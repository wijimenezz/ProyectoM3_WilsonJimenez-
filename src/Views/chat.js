// Views/chat.js
// ─────────────────────────────────────────────
// Orchestrator only. This file's only job is to:
// 1. Get the character from state
// 2. Compose the HTML from UI pieces
// 3. Inject it into #app
// 4. Restore scroll and focus
// 5. Wire up the form
//
// It does NOT know how headers, messages, or the
// form work internally — that's each UI file's job.
// ─────────────────────────────────────────────

import { getCharacter } from "../services/state.js";
import {
  getStatus,
  getPendingMessage,
  clearPendingMessage,
} from "../services/chatState.js";

import { renderChatHeader } from "../UI/Chat/chatHeader.js";
import { renderMessages } from "../UI/Chat/chatMessages.js";
import { renderChatStatus } from "../UI/Chat/chatStatus.js";
import {
  setupChatForm,
  sendMessage,
  getLastFailedMessage,
} from "../UI/Chat/chatForm.js"; // ← added sendMessage + getLastFailedMessage
import { scrollToBottom } from "../UI/Chat/chatHelpers.js";
import { characterNotSelected } from "../UI/Chat/characterNotSelected.js";

export function renderChat() {
  const app = document.querySelector("#app");
  const character = getCharacter();

  if (!character) {
    console.log("no character, calling characterNotSelected");
    characterNotSelected();
    return;
  }

  app.innerHTML = `
    <div class="section section-chat active">
      <div class="chat-wrap">

        ${renderChatHeader(character)}

        <div class="chat-messages" id="chatMessages">
          <div class="date-chip">Today</div>
          ${renderMessages(character)}
          ${renderChatStatus(character)}
        </div>

        <form class="chat-input-bar" id="chatComposer">
          <div class="input-inner">
            <input
              class="real-input"
              id="chatInput"
              type="text"
              placeholder="Message ${character.name}..."
              autocomplete="off"
              ${getStatus() === "loading" ? "disabled" : ""}
            />
            <button
              class="send-btn"
              type="submit"
              ${getStatus() === "loading" ? "disabled" : ""}
            >
              Send
            </button>
          </div>
        </form>

      </div>
    </div>
  `;

  scrollToBottom();

  if (getStatus() !== "loading") {
    setTimeout(() => {
      const input = document.querySelector("#chatInput");
      if (input) input.focus();
    }, 0);
  }

  // Pass renderChat itself as the re-render callback
  // so chatForm can trigger a re-render without
  // importing or knowing about the view layer.
  setupChatForm(character, renderChat);

  // ← NEW: wire up the retry button if it's in the DOM.
  // It only exists when status === "error", so the querySelector
  // returns null on normal renders and the block is skipped.
  const retryBtn = document.querySelector("[data-action='retry']");
  if (retryBtn) {
    retryBtn.addEventListener("click", () => {
      const failed = getLastFailedMessage();
      if (failed) sendMessage(character, failed, renderChat);
    });
  }

  // Check if a starter chip was clicked on the About page.
  // If so, inject the text into the input and auto-submit it.
  // clearPendingMessage() runs first so re-renders don't fire it again.
  const pending = getPendingMessage();
  if (pending) {
    clearPendingMessage();
    const input = document.querySelector("#chatInput");
    const form = document.querySelector("#chatComposer");
    if (input && form) {
      input.value = pending;
      form.requestSubmit();
    }
  }
}

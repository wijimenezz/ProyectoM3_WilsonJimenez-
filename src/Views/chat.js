import { getCharacter } from "../services/state.js";
import { getStatus } from "../services/chatState.js";

import { renderChatHeader } from "../UI/Chat/chatHeader.js";
import { renderMessages } from "../UI/Chat/chatMessages.js";
import { renderChatStatus } from "../UI/Chat/chatStatus.js";
import { setupChatForm } from "../UI/Chat/chatForm.js";
import { scrollToBottom } from "../UI/Chat/chatHelpers.js";

export function renderChat() {
  const app = document.querySelector("#app");
  const character = getCharacter();

  if (!character) {
    app.innerHTML = `
      <div class="section section-chat active">
        <p>No character selected.</p>
      </div>
    `;
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
}

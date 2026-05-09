// views/chat.js

import { getCharacter } from "../services/state.js";

import {
  getMessages,
  addMessage,
  getStatus,
  setStatus,
  getError,
  setError,
} from "../services/chatState.js";

export function renderChat() {
  const app = document.querySelector("#app");

  const character = getCharacter();

  // Safety check
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

        <!-- HEADER -->
        <div class="chat-header">

          <div class="av-ring">
            <img
              src="${character.image}"
              alt="${character.name}"
            />
          </div>

          <div class="chat-hd-info">
            <div class="chat-hd-name">
              ${character.name}
            </div>

            <div class="chat-hd-status">
              <div class="live-dot"></div>
              Online · ${character.species}
            </div>
          </div>

          <div class="chat-hd-badge">
            <div class="hero-dot s-${character.status.toLowerCase()}"></div>
            ${character.status}
          </div>

        </div>

        <!-- MESSAGES -->
        <div class="chat-messages" id="chatMessages">

          <div class="date-chip">
            Today
          </div>

          ${renderMessages()}

          ${renderStatus()}

        </div>

        <!-- INPUT -->
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

  // ✅ FIX 1 — Scroll to bottom after every render.
  // Because innerHTML recreates the messages container from scratch,
  // the scroll position resets to 0 every time. We force it down
  // immediately after the HTML is injected, so the user always
  // sees the latest messages without manually scrolling.
  scrollToBottom();

  // ✅ FIX 2 — Restore focus to the input after every render.
  // innerHTML destroys the old <input> and creates a brand new DOM node.
  // That new node has no focus — the browser doesn't know the user
  // was typing there. We grab it right away and call .focus() so the
  // user can keep typing without having to click the input again.
  // The guard (status !== "loading") matches the disabled attribute
  // on the input: no point focusing a disabled element.
  if (getStatus() !== "loading") {
    // ✅ setTimeout 0 defers focus to the next event loop tick,
    // AFTER the browser finishes painting the new DOM.
    // Without this, focus() fires while the element is still
    // being rendered and the browser silently ignores it.
    setTimeout(() => {
      const input = document.querySelector("#chatInput");
      if (input) input.focus();
    }, 0);
  }

  setupChatForm(character);
}

/* ------------------------------------------------ */
/* MESSAGES RENDER */
/* ------------------------------------------------ */

function renderMessages() {
  const character = getCharacter();

  const messages = getMessages(character.id);

  return messages
    .map((msg) => {
      const isUser = msg.role === "user";

      return `
        <div class="msg-row ${isUser ? "usr" : ""}">

          ${
            !isUser
              ? `
                <img
                  class="msg-av"
                  src="${character.image}"
                  alt="${character.name}"
                />
              `
              : ""
          }

          <div class="msg-col">

            <div class="bubble ${isUser ? "usr" : "ai"}">
              ${escapeHtml(msg.text)}
            </div>

            <div class="msg-time">
              ${getCurrentTime()}
            </div>

          </div>

        </div>
      `;
    })
    .join("");
}

/* ------------------------------------------------ */
/* STATUS RENDER */
/* ------------------------------------------------ */

function renderStatus() {
  const character = getCharacter();

  const status = getStatus();

  const error = getError();

  if (status === "loading") {
    return `
      <div class="typing-row">

        <img
          class="msg-av"
          src="${character.image}"
          alt="${character.name}"
        />

        <div class="typing-bubble">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>

      </div>
    `;
  }

  if (status === "error") {
    return `
      <div class="error-msg">
        ${error}
      </div>
    `;
  }

  return "";
}

/* ------------------------------------------------ */
/* FORM SUBMIT */
/* ------------------------------------------------ */

function setupChatForm(character) {
  const form = document.querySelector("#chatComposer");

  const input = document.querySelector("#chatInput");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = input.value.trim();

    if (!text) return;

    // USER MESSAGE
    addMessage(character.id, {
      role: "user",
      text,
    });

    input.value = "";

    setStatus("loading");

    // renderChat() is called here → innerHTML runs → input is destroyed.
    // scrollToBottom() and input.focus() inside renderChat() handle
    // the recovery automatically. No extra code needed at call sites.
    renderChat();

    try {
      await fakeDelay();

      addMessage(character.id, {
        role: "character",
        text: `I am ${character.name}. You said: "${text}"`,
      });

      setStatus("idle");

      renderChat(); // → scrollToBottom + focus restored inside renderChat()
    } catch (err) {
      setStatus("error");

      setError("Something went wrong. Try again.");

      renderChat(); // → scrollToBottom + focus restored inside renderChat()
    }
  });
}

/* ------------------------------------------------ */
/* HELPERS */
/* ------------------------------------------------ */

function getCurrentTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function fakeDelay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
}

// ✅ FIX 1 (helper) — Centralized scroll function.
// We give the messages container a stable id="chatMessages" in the HTML
// above so this selector always finds it. scrollTop = scrollHeight
// pushes the view to the very last pixel of content.
function scrollToBottom() {
  const messages = document.querySelector("#chatMessages");
  if (messages) messages.scrollTop = messages.scrollHeight;
}

function escapeHtml(text) {
  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}

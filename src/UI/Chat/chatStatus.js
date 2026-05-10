// UI/Chat/chatStatus.js
// ─────────────────────────────────────────────
// Single responsibility: render the status area.
// Handles two states: loading (typing indicator)
// and error. Returns empty string when idle.
// Knows nothing about messages or form events.
// ─────────────────────────────────────────────

import { getStatus, getError } from "../../services/chatState.js";

export function renderChatStatus(character) {
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

// UI/Chat/chatMessages.js
// ─────────────────────────────────────────────
// Single responsibility: render the messages list.
// Reads messages from state, returns HTML string.
// Knows nothing about form events or status states.
// ─────────────────────────────────────────────

import { getMessages } from "../../services/chatState.js";
import { getCurrentTime, escapeHtml } from "./chatHelpers.js";

export function renderMessages(character) {
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

// UI/Chat/chatHeader.js
// ─────────────────────────────────────────────
// Single responsibility: render the chat header.
// Receives the character object and returns HTML.
// Knows nothing about state, events, or messages.
// ─────────────────────────────────────────────

export function renderChatHeader(character) {
  return `
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
  `;
}

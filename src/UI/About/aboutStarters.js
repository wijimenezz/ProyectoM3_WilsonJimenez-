// UI/About/aboutStarters.js
// ─────────────────────────────────────────────
// Single responsibility: render starter chips.
// Maps over extraInfo.starters array so adding
// or removing starters never touches other files.
// ─────────────────────────────────────────────

export function renderAboutStarters(extraInfo) {
  const chips = extraInfo.starters
    .map(
      (starter) => `
      <button class="chip" data-route="chat" data-message="${starter}">
        ${starter}
      </button>
    `,
    )
    .join("");

  return `
    <div class="convo-suggestions">
      <div class="stat-label">Conversation starters</div>
      <div class="convo-chips">${chips}</div>
    </div>
  `;
}

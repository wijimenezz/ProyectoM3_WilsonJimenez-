// UI/About/aboutActions.js
// ─────────────────────────────────────────────
// Single responsibility: render the CTA button.
// Isolated so swapping it (e.g. adding an icon,
// changing the route) never touches other files.
// ─────────────────────────────────────────────

export function renderAboutActions() {
  return `
    <button class="convo-btn" data-route="chat">
      <span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
        Start a Conversation
      </span>
    </button>
  `;
}

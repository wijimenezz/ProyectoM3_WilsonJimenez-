// UI/About/aboutBio.js
// ─────────────────────────────────────────────
// Single responsibility: render the bio card.
// Receives extraInfo and returns HTML.
// Knows nothing about character API data.
// ─────────────────────────────────────────────

export function renderAboutBio(extraInfo) {
  return `
    <div class="bio-card glass">
      <div class="stat-label" style="margin-bottom: 8px">Quick bio</div>
      <p>${extraInfo.bio}</p>
    </div>
  `;
}

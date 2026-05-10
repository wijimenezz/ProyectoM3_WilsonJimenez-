// UI/About/aboutEpisodes.js
// ─────────────────────────────────────────────
// Single responsibility: render the episode card.
// Receives pre-calculated count and percentage
// from aboutHelpers so it stays pure HTML output.
// Knows nothing about stats, bio, or events.
// ─────────────────────────────────────────────

export function renderAboutEpisodes(count, percentage) {
  return `
    <div class="ep-card glass">

      <div class="ep-row">
        <div>
          <div class="stat-label">Episodes</div>
          <div class="ep-num">${count}</div>
        </div>
        <div class="ep-meta">
          <div>${percentage}% of S1–S5</div>
          <div style="font-size: 11px; color: var(--faint); margin-top: 2px">
            ${count} total episodes
          </div>
        </div>
      </div>

      <div class="ep-track">
        <div class="ep-fill" style="width: ${percentage}%"></div>
      </div>

    </div>
  `;
}

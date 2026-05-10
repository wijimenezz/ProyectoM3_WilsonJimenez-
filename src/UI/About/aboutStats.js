// UI/About/aboutStats.js
// ─────────────────────────────────────────────
// Single responsibility: render the stats grid.
// Receives character + extraInfo, returns HTML.
// Knows nothing about episodes, bio, or events.
// ─────────────────────────────────────────────

export function renderAboutStats(character, extraInfo) {
  return `
    <div class="stats-grid">

      <div class="stat-card glass accent">
        <div class="stat-label">Species</div>
        <div class="stat-val">${character.species}</div>
      </div>

      <div class="stat-card glass">
        <div class="stat-label">Gender</div>
        <div class="stat-val">${character.gender}</div>
      </div>

      <div class="stat-card glass">
        <div class="stat-label">Personality</div>
        <div class="stat-val">${extraInfo.personality}</div>
      </div>

      <div class="stat-card glass">
        <div class="stat-label">Clue Level</div>
        <div class="stat-val">${extraInfo.clueLevel}</div>
      </div>

      <div class="stat-card glass accent">
        <div class="stat-label">Origin</div>
        <div class="stat-val">${character.origin.name}</div>
      </div>

      <div class="stat-card glass">
        <div class="stat-label">Location</div>
        <div class="stat-val">${character.location.name}</div>
      </div>

    </div>
  `;
}

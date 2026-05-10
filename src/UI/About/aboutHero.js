// UI/About/aboutHero.js
// ─────────────────────────────────────────────
// Single responsibility: render the hero card.
// Shows character image, name, status, species,
// and gender. Receives character, returns HTML.
// ─────────────────────────────────────────────

export function renderAboutHero(character) {
  return `
    <div class="hero-card">
      <img src="${character.image}" alt="${character.name}" />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-name">${character.name}</div>
        <div class="hero-sub">
          <div class="hero-dot s-${character.status.toLowerCase()}"></div>
          ${character.status} &nbsp;·&nbsp; ${character.species} &nbsp;·&nbsp; ${character.gender}
        </div>
      </div>
    </div>
  `;
}

// Views/UI/CharCard.js
// ─────────────────────────────────────────
// Responsible for: building a single character card HTML string
// and the loading skeleton cards.
// No click logic here — that belongs to the caller (home.js)
// because only the caller knows what clicking a card should do.
// ─────────────────────────────────────────

// Returns one character card as an HTML string.
// i (index) is used for the staggered animation delay.
export function buildCharCard(char, i) {
  return `
    <div class="char-card" data-index="${i}" style="animation-delay:${i * 0.06}s">
      <div class="char-img-wrap">
        <img src="${char.image}" alt="${char.name}" loading="lazy"/>
        <div class="img-overlay"></div>
        <div class="status-dot s-${char.status.toLowerCase()}"></div>
      </div>
      <div class="char-info">
        <div class="char-name">${char.name}</div>
        <div class="char-species">${char.species}</div>
      </div>
    </div>
  `;
}

// Returns N skeleton placeholder cards while data is loading.
export function buildSkeletons(count) {
  return Array.from(
    { length: count },
    () => `
      <div class="char-card skeleton">
        <div class="char-img-wrap skeleton-img"></div>
        <div class="char-info">
          <div class="skeleton-line"></div>
          <div class="skeleton-line short"></div>
        </div>
      </div>
    `,
  ).join("");
}

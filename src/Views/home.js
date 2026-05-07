import { getCharactersByIds, searchCharacters } from "../api.js";
import { setCharacter } from "../state.js";
import { navigateTo } from "../navigation.js";

const DEFAULT_IDS = [1, 2, 3, 4];

// ── Entry point ──────────────────────────────────────────
export async function renderHome() {
  const app = document.querySelector("#app");

  app.innerHTML = buildShell();

  await loadCards({ ids: DEFAULT_IDS });

  setupSearch();
}

// ── Shell HTML ───────────────────────────────────────────
function buildShell() {
  return `
    <div class="section section-home active">
      <div class="logo-row">
        <div class="logo-mark">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
            <line x1="9" y1="9" x2="9.01" y2="9"/>
            <line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
        </div>
        <span class="logo-text">CharChat</span>
        <span class="logo-badge">BETA</span>
      </div>

      <p class="sec-label">Characters</p>
      <h1 class="sec-title">Pick your<br/>companion</h1>

      <div class="search-wrap">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          class="search-box"
          id="search-input"
          type="text"
          placeholder="Search characters…"
        />
      </div>

      <div class="char-grid" id="char-grid">
        ${buildSkeletons(4)}
      </div>

      <div class="cta-bar">
        <button class="cta-btn" data-route="chat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="white" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Chat
        </button>
      </div>
    </div>`;
}

// ── Load cards (by IDs or by search query) ───────────────
async function loadCards({ ids = null, query = "" }) {
  setGridStatus("loading");

  try {
    let characters = [];

    if (ids) {
      characters = await getCharactersByIds(ids);
    } else {
      const data = await searchCharacters(query);
      characters = data.results;
    }

    renderCards(characters);
  } catch (err) {
    if (err.status === 404) {
      setGridStatus("empty", query);
    } else {
      setGridStatus("error");
    }
  }
}

// ── Render cards into grid ───────────────────────────────
function renderCards(characters) {
  const grid = document.querySelector("#char-grid");

  grid.innerHTML = characters
    .map(
      (char, i) => `
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
  `,
    )
    .join("");

  grid.querySelectorAll(".char-card").forEach((card, i) => {
    card.addEventListener("click", () => {
      setCharacter(characters[i]);
      navigateTo("about");
    });
  });
}

// ── Search with debounce ─────────────────────────────────
function setupSearch() {
  const input = document.querySelector("#search-input");
  let timer;

  input.addEventListener("input", () => {
    clearTimeout(timer);
    const query = input.value.trim();

    timer = setTimeout(() => {
      if (query === "") {
        loadCards({ ids: DEFAULT_IDS });
      } else {
        loadCards({ query });
      }
    }, 400);
  });
}

// ── Grid status helpers ──────────────────────────────────
function setGridStatus(status, query = "") {
  const grid = document.querySelector("#char-grid");
  if (!grid) return;

  const states = {
    loading: buildSkeletons(4),
    empty: `<p class="no-results">No characters found for "<strong>${query}</strong>"</p>`,
    error: `<p class="no-results">Something went wrong. Try again.</p>`,
  };

  grid.innerHTML = states[status] ?? "";
}

function buildSkeletons(count) {
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

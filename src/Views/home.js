// Views/home.js
// ─────────────────────────────────────────
// Orchestrator only. This file answers ONE question:
// "what happens when the home view loads?"
// All HTML pieces and UI behaviours live in ./UI/
// ─────────────────────────────────────────

import { getCharactersByIds, searchCharacters } from "../services/api.js";
import { setCharacter } from "../services/state.js";
import { navigateTo } from "../navigation.js";

import { buildLogo } from "../UI/Home/logo.js";
import { buildSearchBar, setupSearch } from "../UI/Home/searchbar.js";
import { buildCharCard, buildSkeletons } from "../UI/Home/charCard.js";
import { setGridStatus } from "../UI/Home/gridStatus.js";

const DEFAULT_IDS = [118, 2, 242, 4, 1, 285];

// ── Entry point ──────────────────────────────────────────
export async function renderHome() {
  const app = document.querySelector("#app");

  app.innerHTML = buildShell();

  await loadCards({ ids: DEFAULT_IDS });

  // Tell SearchBar what to do when the query changes.
  // The callback decides ids vs. query — SearchBar doesn't care.
  setupSearch((query) => {
    if (query === "") {
      loadCards({ ids: DEFAULT_IDS });
    } else {
      loadCards({ query });
    }
  });
}

// ── Shell HTML ───────────────────────────────────────────
// Assembles the static frame of the view from UI pieces.
// Only the grid and search input are dynamic after this point.
function buildShell() {
  return `
    <div class="section section-home active">

      <div class="home-static">
        ${buildLogo()}

        <p class="sec-label">Personajes</p>
        <h1 class="sec-title">Elige Bien a Quien<br/>Preguntar</h1>

        <div class="trama-card glass">
          <div class="stat-label" style="margin-bottom: 8px">Consigna</div>
          <p>Rick creó una máquina capaz de alterar el tiempo… pero alguien la usó sin permiso y explotó en su garaje. Ahora múltiples líneas temporales están colapsando: hay recuerdos falsos, personas muertas que siguen vivas y realidades mezclándose. Habla con cada personaje, descubre las contradicciones y encuentra quién provocó el accidente antes de que el multiverso desaparezca.</p>
        </div>
      </div>

      <div class="home-scroll">
        <div class="char-grid" id="char-grid">
          ${buildSkeletons(6)}
        </div>
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

    </div>
  `;
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
    console.error("loadCards error:", err);

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

  // Build all card HTML from the UI component, then inject once.
  // One innerHTML write is faster than appending card by card.
  grid.innerHTML = characters.map(buildCharCard).join("");

  // Attach click handlers after the HTML exists in the DOM.
  grid.querySelectorAll(".char-card").forEach((card, i) => {
    card.addEventListener("click", () => {
      setCharacter(characters[i]);
      navigateTo("about");
    });
  });
}

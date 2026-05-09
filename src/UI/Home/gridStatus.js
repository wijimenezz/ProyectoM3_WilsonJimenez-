// Views/UI/GridStatus.js
// ─────────────────────────────────────────
// Responsible for: replacing the grid contents with a
// loading, empty, or error state.
// Centralised here so every possible grid state lives in
// one place — easy to add new states later (e.g. "offline").
// ─────────────────────────────────────────

import { buildSkeletons } from "./CharCard.js";

// Swaps the grid content for a status message.
// status: "loading" | "empty" | "error"
// query:  the search term (only used for the "empty" message)
export function setGridStatus(status, query = "") {
  const grid = document.querySelector("#char-grid");

  if (!grid) return;

  const states = {
    loading: buildSkeletons(4),
    empty: `<p class="no-results">No characters found for "<strong>${query}</strong>"</p>`,
    error: `<p class="no-results">Something went wrong. Try again.</p>`,
  };

  grid.innerHTML = states[status] ?? "";
}

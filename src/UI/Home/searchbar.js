// Views/UI/SearchBar.js
// ─────────────────────────────────────────
// Responsible for: the search input HTML and its debounced
// input listener. Receives a callback so it stays decoupled
// from data-fetching — it just tells home.js "the query changed".
// ─────────────────────────────────────────

const DEBOUNCE_MS = 400;

// Returns the search bar HTML string.
export function buildSearchBar() {
  return `
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
  `;
}

// Attaches the debounced listener to the search input.
// onSearch(query) is called after the user stops typing.
// Passing the callback in keeps this file unaware of API logic.
export function setupSearch(onSearch) {
  const input = document.querySelector("#search-input");

  let timer;

  input.addEventListener("input", () => {
    clearTimeout(timer);

    const query = input.value.trim();

    timer = setTimeout(() => onSearch(query), DEBOUNCE_MS);
  });
}

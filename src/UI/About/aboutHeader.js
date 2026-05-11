import { LOGO_PATH } from "../Home/logo.js";

export function renderAboutHeader() {
  return `
    <div class="logo-row">
      <div class="logo-mark">
        <svg class="logo-svg" width="40" height="40" viewBox="0 0 50 50" fill="black">
          <path d="${LOGO_PATH}"></path>
        </svg>
      </div>
      <span class="logo-text">ClueVerse</span>
      <span class="logo-badge">PERFIL</span>
    </div>
  `;
}

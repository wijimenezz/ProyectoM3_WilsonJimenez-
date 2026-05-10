import { buildLogo } from "../Home/logo.js";

export function renderAboutHeader() {
  return `
    <div class="logo-row">
      ${buildLogo()}
      <span class="logo-text">ClueVerse</span>
      <span class="logo-badge">PERFIL</span>
    </div>
  `;
}

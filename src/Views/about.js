import { characterInfo } from "../data/characterInfo.js";
import { getCharacter } from "../services/state.js";

import { renderAboutHeader } from "../UI/About/aboutHeader.js";
import { renderAboutHero } from "../UI/About/aboutHero.js";
import { renderAboutStats } from "../UI/About/aboutStats.js";
import { renderAboutEpisodes } from "../UI/About/aboutEpisodes.js";
import { renderAboutActions } from "../UI/About/aboutActions.js";
import { renderAboutBio } from "../UI/About/aboutBio.js";
import { renderAboutStarters } from "../UI/About/aboutStarters.js";
import { getEpisodeStats } from "../UI/About/aboutHelpers.js";

const FALLBACK_EXTRA_INFO = {
  bio: "Información no disponible.",
  personality: "Desconocida",
  clueLevel: "Desconocido",
  starters: [],
};

export function renderAbout() {
  const app = document.querySelector("#app");
  const character = getCharacter();

  if (!character) {
    app.innerHTML = `<h1>No character selected</h1>`;
    return;
  }

  const extraInfo = characterInfo[character.id] || FALLBACK_EXTRA_INFO;
  const { count, percentage } = getEpisodeStats(character);

  app.innerHTML = `
    <div class="section section-about active" id="section-about" data-section="about">

      ${renderAboutHeader()}
      ${renderAboutHero(character)}
      ${renderAboutStats(character, extraInfo)}
      ${renderAboutEpisodes(count, percentage)}
      ${renderAboutActions()}
      ${renderAboutBio(extraInfo)}
      ${renderAboutStarters(extraInfo)}

    </div>
  `;
}

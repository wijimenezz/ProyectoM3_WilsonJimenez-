// UI/About/aboutHelpers.js
// ─────────────────────────────────────────────
// Pure calculation functions. No DOM, no state.
// ─────────────────────────────────────────────

const TOTAL_EPISODES = 51;

export function getEpisodeStats(character) {
  const count = character.episode.length;
  const percentage = Math.round((count / TOTAL_EPISODES) * 100);
  return { count, percentage };
}

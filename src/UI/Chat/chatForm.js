// UI/Chat/chatForm.js
// ─────────────────────────────────────────────
// Single responsibility: handle form submission.
// Listens for submit, updates state, triggers
// re-render via the callback passed in.
// Knows nothing about how the UI is built.
// ─────────────────────────────────────────────

import { addMessage, setStatus, setError } from "../../services/chatState.js";

import { fakeDelay } from "./chatHelpers.js";

// onRerender is a callback — chatForm doesn't know
// what renderChat looks like, it just calls it when
// state changes. This keeps the form decoupled from
// the view layer.
export function setupChatForm(character, onRerender) {
  const form = document.querySelector("#chatComposer");
  const input = document.querySelector("#chatInput");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = input.value.trim();

    if (!text) return;

    addMessage(character.id, { role: "user", text });

    input.value = "";

    setStatus("loading");
    onRerender();

    try {
      await fakeDelay();

      addMessage(character.id, {
        role: "character",
        text: `I am ${character.name}. You said: "${text}"`,
      });

      setStatus("idle");
      onRerender();
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Try again.");
      onRerender();
    }
  });
}

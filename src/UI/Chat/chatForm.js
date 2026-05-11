// UI/Chat/chatForm.js
// ─────────────────────────────────────────────
// Single responsibility: handle form submission.
// Listens for submit, updates state, triggers
// re-render via the callback passed in.
// Knows nothing about how the UI is built.
// ─────────────────────────────────────────────

import { getCharacterReply } from "../../services/aiClient.js";
import {
  addMessage,
  getMessages,
  setStatus,
  setError,
} from "../../services/chatState.js";
// ajusta la ruta si es diferente

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
      // Pasamos el historial completo (ya incluye el mensaje del user)
      const messages = getMessages(character.id);
      const reply = await getCharacterReply(character, messages);

      addMessage(character.id, { role: "character", text: reply });
      setStatus("idle");
      onRerender();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Something went wrong. Try again.");
      onRerender();
    }
  });
}

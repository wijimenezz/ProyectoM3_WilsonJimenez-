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

// Stored outside the function so the retry button
// can access the last failed message.
let lastFailedMessage = null;

export function getLastFailedMessage() {
  return lastFailedMessage;
}

export function setupChatForm(character, onRerender) {
  const form = document.querySelector("#chatComposer");
  const input = document.querySelector("#chatInput");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    await sendMessage(character, text, onRerender);
  });
}

// Extracted into its own exported function so the retry
// button can call it directly with the last failed text.
export async function sendMessage(character, text, onRerender) {
  addMessage(character.id, { role: "user", text });
  lastFailedMessage = null;

  const input = document.querySelector("#chatInput");
  if (input) input.value = "";

  setStatus("loading");
  onRerender();

  try {
    const messages = getMessages(character.id);
    const reply = await getCharacterReply(character, messages);

    addMessage(character.id, { role: "character", text: reply });
    setStatus("idle");
    onRerender();
  } catch (err) {
    console.error(err);
    // Store the failed message so the retry button
    // can re-send it without the user retyping it.
    lastFailedMessage = text;
    setStatus("error");
    setError("No se pudo enviar el mensaje.");
    onRerender();
  }
}

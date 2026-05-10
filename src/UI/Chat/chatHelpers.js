// UI/Chat/chatHelpers.js
// ─────────────────────────────────────────────
// Pure utility functions. No DOM, no state.
// Any file in the Chat UI can import from here.
// ─────────────────────────────────────────────

export function getCurrentTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function fakeDelay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
}

export function scrollToBottom() {
  const messages = document.querySelector("#chatMessages");
  if (messages) messages.scrollTop = messages.scrollHeight;
}

export function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

const MODEL_NAME = "gemini-2.5-flash-lite";
const MAX_OUTPUT_TOKENS = 200;
const TEMPERATURE = 0.9;
const MAX_TURNS_HISTORY = 12;

export function toApiMessages(uiMessages) {
  return uiMessages.map((msg) => ({
    role: msg.role === "character" ? "model" : "user",
    parts: [{ text: msg.text }],
  }));
}

// 2. Construye el payload completo con shape de Gemini.
// Doc: https://ai.google.dev/api/generate-content
export function buildPayload({ systemPrompt, uiMessages }) {
  return {
    model: MODEL_NAME,

    systemInstruction: {
      parts: [{ text: systemPrompt }],
    },

    contents: toApiMessages(uiMessages),

    generationConfig: {
      maxOutputTokens: MAX_OUTPUT_TOKENS,
      temperature: TEMPERATURE,
    },
  };
}
export function normalizeAIResponse(raw) {
  const parts = raw?.candidates?.[0]?.content?.parts;

  if (!Array.isArray(parts)) return "";

  return parts
    .filter((p) => p && typeof p.text === "string")
    .map((p) => p.text)
    .join("")
    .trim();
}

// 4. Helpers de historial inmutables.
// Devuelven un nuevo array, NO mutan el original.
export function appendUserMessage(messages, text) {
  return [...messages, { role: "user", text }];
}

export function appendAssistantMessage(messages, text) {
  return [...messages, { role: "character", text }];
}

// 5. Recorte: enviamos solo los ultimos N turnos para no explotar tokens.
export function getTrimmedHistory(messages, maxTurns = MAX_TURNS_HISTORY) {
  return messages.slice(-maxTurns);
}

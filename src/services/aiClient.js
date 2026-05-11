import {
  buildPayload,
  getTrimmedHistory,
  normalizeAIResponse,
} from "../transform/chatPayload.js";
import { send as sendToMock } from "./mockGeminiApi.js";
import {
  BETH_SYSTEM_PROMT,
  EVIL_MORTY_SYSTEM_PROMT,
  MORTY_SYSTEM_PROMT,
  MR_MEESEKS_SYSTEM_PROMT,
  RICK_PRIME_SYSTEM_PROMT,
  RICK_SYSTEM_PROMT,
} from "./promts.js";

// Mapea character.id → system prompt.
// Las keys deben coincidir exactamente con los ids de tus personajes.
const PROMPTS_BY_CHARACTER = {
  1: RICK_SYSTEM_PROMT,
  285: RICK_PRIME_SYSTEM_PROMT,
  2: MORTY_SYSTEM_PROMT,
  4: BETH_SYSTEM_PROMT,
  118: EVIL_MORTY_SYSTEM_PROMT,
  242: MR_MEESEKS_SYSTEM_PROMT,
};

// Ahora recibe el objeto character completo.
export async function getCharacterReply(character, uiMessages) {
  const systemPrompt = PROMPTS_BY_CHARACTER[character.id] ?? RICK_SYSTEM_PROMT; // fallback

  const trimmed = getTrimmedHistory(uiMessages);

  const payload = buildPayload({ systemPrompt, uiMessages: trimmed });

  const rawResponse = await sendToMock(payload); // cambia a sendToGemini para producción

  const text = normalizeAIResponse(rawResponse);

  const usage = rawResponse?.usageMetadata;
  if (usage) {
    console.log(
      `[Tokens] input: ${usage.promptTokenCount}, output: ${usage.candidatesTokenCount}`,
    );
  }

  return text;
}

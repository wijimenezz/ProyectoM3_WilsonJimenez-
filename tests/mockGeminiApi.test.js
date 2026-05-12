// src/services/mockGeminiApi.test.js
import { describe, it, expect } from "vitest";
import { send } from "../src/services/mockGeminiApi.js";
import { normalizeAIResponse } from "../src/transform/chatPayload.js";

describe("mockGeminiApi.send", () => {
  it("devuelve el shape real de Gemini con candidates", async () => {
    const payload = {
      systemInstruction: { parts: [{ text: "Eres Rick" }] },
      contents: [{ parts: [{ text: "Hola" }] }],
    };
    const result = await send(payload);
    expect(result).toHaveProperty("candidates");
    expect(result.candidates[0].finishReason).toBe("STOP");
  }, 3000);

  it("devuelve usageMetadata con tokens calculados", async () => {
    const payload = {
      systemInstruction: { parts: [{ text: "Eres Rick" }] },
      contents: [{ parts: [{ text: "test" }] }],
    };
    const result = await send(payload);
    expect(result.usageMetadata.promptTokenCount).toBeGreaterThan(0);
    expect(result.usageMetadata.totalTokenCount).toBeGreaterThan(0);
  }, 3000);

  it("el texto normalizado es un string no vacío", async () => {
    const payload = {
      systemInstruction: { parts: [{ text: "Eres Morty" }] },
      contents: [{ parts: [{ text: "¿Qué pasó con Beth?" }] }],
    };
    const raw = await send(payload);
    const text = normalizeAIResponse(raw);
    expect(typeof text).toBe("string");
    expect(text.length).toBeGreaterThan(0);
  }, 3000);

  it("la respuesta siempre viene de CANNED_REPLIES", async () => {
    const CANNED_REPLIES = [
      "Ohh geez, *urp*, que pregunta mas obvia. Morty, ven a explicarle.",
      "Mira, *urp*, en mil universos ya respondi esto. Buscalo en uno.",
      "Wubba lubba dub dub. La respuesta es: depende. Como todo.",
      "*urp* La ciencia dice que si. La ciencia tambien dice que no me importa.",
      "Es complicado. O no. En realidad es simple si tenes mi cerebro.",
    ];
    const payload = { contents: [{ parts: [{ text: "test" }] }] };
    const raw = await send(payload);
    const text = normalizeAIResponse(raw);
    expect(CANNED_REPLIES).toContain(text);
  }, 3000);
});

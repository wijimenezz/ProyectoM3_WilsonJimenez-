// src/transform/chatPayload.test.js
import { describe, it, expect } from "vitest";
import {
  toApiMessages,
  buildPayload,
  normalizeAIResponse,
  appendUserMessage,
  appendAssistantMessage,
  getTrimmedHistory,
} from "./chatPayload.js";

describe("toApiMessages", () => {
  it("convierte role character a model", () => {
    const input = [{ role: "character", text: "Hola" }];
    const result = toApiMessages(input);
    expect(result[0].role).toBe("model");
  });

  it("convierte role user correctamente", () => {
    const input = [{ role: "user", text: "Hola" }];
    const result = toApiMessages(input);
    expect(result[0].role).toBe("user");
  });

  it("mapea el texto a parts", () => {
    const input = [{ role: "user", text: "test" }];
    const result = toApiMessages(input);
    expect(result[0].parts[0].text).toBe("test");
  });
});

describe("buildPayload", () => {
  it("incluye systemInstruction con el prompt", () => {
    const payload = buildPayload({
      systemPrompt: "Eres Rick",
      uiMessages: [],
    });
    expect(payload.systemInstruction.parts[0].text).toBe("Eres Rick");
  });

  it("incluye generationConfig", () => {
    const payload = buildPayload({ systemPrompt: "", uiMessages: [] });
    expect(payload.generationConfig).toBeDefined();
    expect(payload.generationConfig.maxOutputTokens).toBeDefined();
  });
});

describe("normalizeAIResponse", () => {
  it("extrae el texto del candidato", () => {
    const raw = {
      candidates: [{ content: { parts: [{ text: "Respuesta" }] } }],
    };
    expect(normalizeAIResponse(raw)).toBe("Respuesta");
  });

  it("devuelve string vacío si no hay candidatos", () => {
    expect(normalizeAIResponse({})).toBe("");
  });

  it("une múltiples parts", () => {
    const raw = {
      candidates: [
        { content: { parts: [{ text: "Hola " }, { text: "Morty" }] } },
      ],
    };
    expect(normalizeAIResponse(raw)).toBe("Hola Morty");
  });
});

describe("appendUserMessage", () => {
  it("agrega mensaje sin mutar el original", () => {
    const original = [{ role: "user", text: "antes" }];
    const result = appendUserMessage(original, "nuevo");
    expect(result).toHaveLength(2);
    expect(original).toHaveLength(1); // no mutó
    expect(result[1]).toEqual({ role: "user", text: "nuevo" });
  });
});

describe("appendAssistantMessage", () => {
  it("agrega mensaje con role character", () => {
    const result = appendAssistantMessage([], "soy rick");
    expect(result[0]).toEqual({ role: "character", text: "soy rick" });
  });
});

describe("getTrimmedHistory", () => {
  it("recorta al máximo de turnos", () => {
    const messages = Array.from({ length: 20 }, (_, i) => ({
      role: "user",
      text: `msg ${i}`,
    }));
    const result = getTrimmedHistory(messages, 6);
    expect(result).toHaveLength(6);
    expect(result[0].text).toBe("msg 14"); // últimos 6
  });

  it("devuelve todos si hay menos del máximo", () => {
    const messages = [{ role: "user", text: "solo uno" }];
    const result = getTrimmedHistory(messages, 6);
    expect(result).toHaveLength(1);
  });
});

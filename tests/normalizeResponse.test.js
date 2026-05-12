// src/transform/normalizeAIResponse.test.js
import { describe, it, expect } from "vitest";
import { normalizeAIResponse } from "../src/transform/chatPayload.js";

describe("normalizeAIResponse", () => {
  it("extrae el texto del primer candidato", () => {
    const raw = {
      candidates: [{ content: { parts: [{ text: "Wubba lubba dub dub" }] } }],
    };
    expect(normalizeAIResponse(raw)).toBe("Wubba lubba dub dub");
  });

  it("une múltiples parts en un solo string", () => {
    const raw = {
      candidates: [
        { content: { parts: [{ text: "Hola " }, { text: "Morty" }] } },
      ],
    };
    expect(normalizeAIResponse(raw)).toBe("Hola Morty");
  });

  it("devuelve string vacío si no hay candidatos", () => {
    expect(normalizeAIResponse({})).toBe("");
  });

  it("devuelve string vacío si parts no es array", () => {
    const raw = { candidates: [{ content: { parts: null } }] };
    expect(normalizeAIResponse(raw)).toBe("");
  });

  it("ignora parts sin propiedad text", () => {
    const raw = {
      candidates: [
        { content: { parts: [{ text: "válido" }, { noText: true }] } },
      ],
    };
    expect(normalizeAIResponse(raw)).toBe("válido");
  });
});

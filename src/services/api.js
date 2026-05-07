import { fetchJson } from "./fetchJson.js";

const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharactersByIds(ids = []) {
  const joined = ids.join(",");
  return fetchJson(`${BASE_URL}/character/${joined}`);
}

export async function searchCharacters(name = "", page = 1) {
  const url = new URL(`${BASE_URL}/character`);
  if (name) url.searchParams.set("name", name);
  url.searchParams.set("page", page);
  return fetchJson(url.toString());
}

import { characterGreetings } from "../data/greetings.js";

const conversations = {};
let status = "idle";
let error = null;

export function getMessages(characterId) {
  if (!conversations[characterId]) {
    const greetings = characterGreetings[characterId];

    const firstMessage = greetings
      ? greetings[Math.floor(Math.random() * greetings.length)]
      : "Pregunta lo que quieras";

    conversations[characterId] = [{ role: "character", text: firstMessage }];
  }

  return conversations[characterId];
}

export function addMessage(characterId, message) {
  conversations[characterId].push(message);
}

export function getStatus() {
  return status;
}

export function setStatus(newStatus) {
  status = newStatus;
}

export function getError() {
  return error;
}

export function setError(newError) {
  error = newError;
}

let pendingMessage = null;

export function getPendingMessage() {
  return pendingMessage;
}

export function setPendingMessage(text) {
  pendingMessage = text;
}

export function clearPendingMessage() {
  pendingMessage = null;
}

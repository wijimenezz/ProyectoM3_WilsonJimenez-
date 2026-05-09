const conversations = {};

let status = "idle";

let error = null;

export function getMessages(characterId) {
  if (!conversations[characterId]) {
    conversations[characterId] = [
      {
        role: "character",
        text: "Pregunta lo que quieras",
      },
    ];
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

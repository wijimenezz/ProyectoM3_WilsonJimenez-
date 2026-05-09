export function getOriginName(rawCharacter) {
  return rawCharacter.origen?.name ?? "unknown";
}

export function getLocationName(rawCharacter) {
  return rawCharacter.location?.name ?? "unknown";
}

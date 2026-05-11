export function getOriginName(rawCharacter) {
  return rawCharacter.origin?.name ?? "unknown";
}

export function getLocationName(rawCharacter) {
  return rawCharacter.location?.name ?? "unknown";
}

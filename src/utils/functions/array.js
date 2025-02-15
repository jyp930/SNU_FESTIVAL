export function shuffleArray(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

export function getRandomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

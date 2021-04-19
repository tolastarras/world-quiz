/**
 * Get a random integer between 0 and max
 *
 * @param {int} max - Available records
 * @return {int} The random integer
 */
export const randInt = max => {
  return Math.floor(Math.random() * max)
}

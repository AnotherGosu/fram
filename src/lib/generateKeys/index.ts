/**
 * Generates number progression of provided length
 *
 * @param length - length of generated array
 * @param start - initial value of generated array
 * @returns array of provided length filled with integer numbers
 *
 * @example
 * generateKeys(5) // returns [0, 1, 2, 3, 4]
 * generateKeys(3, 1) // returns [1, 2, 3]
 */
export const generateKeys = (length: number, start = 0) => {
  return Array.from({ length }, (_, i) => i + start);
};

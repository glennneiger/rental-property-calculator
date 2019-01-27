/**
 * Checks if the input is undefined or null, or an empty object or string
 * @param {any} value - string or object value to verify
 * @return {boolean} True if undefined/null/empty, false otherwise
 */
export function isEmpty(value) {
  return value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);
}
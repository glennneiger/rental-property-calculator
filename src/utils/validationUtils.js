/* Returns false if object/string given is undefined
 * or null, or an empty
 * object or string
 */
export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0)
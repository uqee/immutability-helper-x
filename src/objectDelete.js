/**
 * Remove keys form an object.
 * @param {Array|String} keys
 * @param {Object} object
 * @returns {Object} result
 */

export default function objectDelete(keys, object) {
  if (!Array.isArray(keys)) keys = [keys];
  if (object === null || typeof object !== 'object') return object;
  else {
    const result = Object.assign({}, object);
    keys.forEach(key => delete result[key]);
    return result;
  }
}

/**
 * Push items to a unique-items array.
 * @param {Array|String} items
 * @param {Array} array
 * @returns {Array} result
 */

export default function arrayPushUnique(items, array) {
  if (!Array.isArray(items)) items = [items];
  if (!array || !Array.isArray(array)) return array;

  // modify
  const result = [].concat(array);
  items.forEach(function(item) {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  });

  // return initial if not modified
  return result.length === array.length ? array : result;
}

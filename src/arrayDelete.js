/**
 * Remove items from an array.
 * @param {Array|String} items
 * @param {Array} array
 * @returns {Array} result
 */

export default function arrayDelete(items, array) {
  if (!Array.isArray(items)) items = [items];
  if (!array || !Array.isArray(array)) return array;

  // modify
  const result = array.filter(function(item) {
    return items.indexOf(item) === -1;
  });

  // return initial if not modified
  return result.length === array.length ? array : result;
}

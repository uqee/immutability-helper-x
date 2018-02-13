"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayDelete(itemOrItems, arr) {
    if (!itemOrItems || !arr || !Array.isArray(arr))
        return arr;
    const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
    const res = arr.filter((item) => items.indexOf(item) === -1);
    return res.length === arr.length ? arr : res;
}
exports.arrayDelete = arrayDelete;
function arrayPushUnique(itemOrItems, arr) {
    if (!itemOrItems || !arr || !Array.isArray(arr))
        return arr;
    const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
    const res = arr.slice();
    items.forEach((item) => {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res.length === arr.length ? arr : res;
}
exports.arrayPushUnique = arrayPushUnique;
function objectDelete(keyOrKeys, obj) {
    if (!keyOrKeys || obj === null || typeof obj !== "object")
        return obj;
    const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
    const res = Object.assign({}, obj);
    keys.forEach((key) => delete res[key]);
    return Object.keys(res).length === Object.keys(obj).length ? obj : res;
}
exports.objectDelete = objectDelete;

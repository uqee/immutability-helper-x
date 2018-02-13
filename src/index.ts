// remove items from an array
export function arrayDelete<TItem>(itemOrItems: TItem | TItem[], arr: TItem[]): TItem[] {

  // prepare
  if (!itemOrItems || !arr || !Array.isArray(arr)) return arr;
  const items: TItem[] = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];

  // modify
  const res = arr.filter((item: TItem) => items.indexOf(item) === -1);

  // return initial if not modified
  return res.length === arr.length ? arr : res;
}

// push items to a unique-items array
export function arrayPushUnique<TItem>(itemOrItems: TItem | TItem[], arr: TItem[]): TItem[] {

  // prepare
  if (!itemOrItems || !arr || !Array.isArray(arr)) return arr;
  const items: TItem[] = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];

  // modify
  const res: TItem[] = arr.slice();
  items.forEach((item: TItem) => {
    if (res.indexOf(item) === -1) res.push(item);
  });

  // return initial if not modified
  return res.length === arr.length ? arr : res;
}

// remove keys from an object
export function objectDelete(keyOrKeys: string | string[], obj: object): object {

  // prepare
  if (!keyOrKeys || obj === null || typeof obj !== "object") return obj;
  const keys: string[] = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];

  // modify
  const res: object = { ...obj };
  keys.forEach((key: string) => delete (res as any)[key]);

  // return initial if not modified
  return Object.keys(res).length === Object.keys(obj).length ? obj : res;
}

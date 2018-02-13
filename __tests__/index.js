import update from "immutability-helper";

import {
  arrayDelete,
  arrayPushUnique,
  objectDelete,
} from "../build";

update.extend("$pop", arrayDelete);
update.extend("$pushuniq", arrayPushUnique);
update.extend("$del", objectDelete);

describe("$pop", () => {

  test("modified", () => {
    const a = update([1, 2, 3], { $pop: [1, 3] });
    const b = [2];
    expect(a).toEqual(b);
  });

  test("not modified", () => {
    const data = [1, 2, 3];
    const a = update(data, { $pop: [4, 5] });
    const b = data;
    expect(a).toBe(b);
  });
});

describe("$pushuniq", () => {

  test("modified", () => {
    const a = update([1, 2, 3], { $pushuniq: [2, 3, 4] });
    const b = [1, 2, 3, 4];
    expect(a).toEqual(b);
  });

  test("not modified", () => {
    const data = [1, 2, 3];
    const a = update(data, { $pushuniq: [1, 2] });
    const b = data;
    expect(a).toBe(b);
  });
});

describe("$del", () => {

  test("modified", () => {
    const a = update({ foo: 1, bar: 2 }, { $del: ["bar", "baz"] });
    const b = { foo: 1 };
    expect(a).toEqual(b);
  });

  test("not modified", () => {
    const data = { foo: 1, bar: 2 };
    const a = update(data, { $del: ["baz"] });
    const b = data;
    expect(a).toBe(b);
  });
});

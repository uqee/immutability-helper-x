import update from 'immutability-helper';
import * as src from './src';

update.extend('$pop', src.arrayDelete);
update.extend('$pushuniq', src.arrayPushUnique);
update.extend('$del', src.objectDelete);

test('$pop', () => {
  const a = update([1, 2, 3], { $pop: [1, 3] });
  const b = [2];
  expect(a).toEqual(b);
});

test('$pushuniq', () => {
  const a = update([1, 2, 3], { $pushuniq: [2, 3, 4] });
  const b = [1, 2, 3, 4];
  expect(a).toEqual(b);
});

test('$del', () => {
  const a = update({ foo: 1, bar: 2 }, { $del: ['bar', 'baz'] });
  const b = { foo: 1 };
  expect(a).toEqual(b);
});

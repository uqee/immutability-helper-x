# immutability-helper-extensions


## What

Additional functions for the [`immutability-helper`](https://github.com/kolodny/immutability-helper) tool.


## Getting started

1. Install

```bash
yarn add @uqee/immutability-helper-extensions
```

2. Test

```bash
yarn test
```

3. Use

```javascript
import update from 'immutability-helper';
import {
  arrayDelete,
  arrayPushUnique,
  objectDelete,
} from '@uqee/immutability-helper-extensions';

update.extend('$pop', arrayDelete);
update.extend('$pushuniq', arrayPushUnique);
update.extend('$del', objectDelete);
```


## Reference

Exported function | Description | Example
----------------- | ----------- | -------
`arrayDelete` | Remove items from an array | `update([1, 2, 3], { $pop: [1, 3] }) -> [2]`
`arrayPushUnique` | Push items to a unique-items array | `update([1, 2, 3], { $pushuniq: [2, 3, 4] }) -> [1, 2, 3, 4]`
`objectDelete` | Remove keys form an object | `update({ foo: 1, bar: 2 }, { $del: ['bar', 'baz'] }) -> { foo: 1 }`

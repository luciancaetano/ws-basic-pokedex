import { get, map, reduce } from 'lodash';

export function toRecord<T = any>(items: any, idKey = 'id'): Record<number, T> {
  const defaultValue = {};

  if (!items) return items;

  return reduce(items, (obj, item) => ({
    ...obj,
    [get(item, idKey)]: item,
  }), defaultValue);
}

export function mergePokedexListFullData(oldItems: Record<number, any>, newItems: Record<number, any>) {
  return toRecord(map(newItems, (newItem, key) => ({
    id: get(newItem, 'id'),
    name: get(newItem, 'name'),
    ...get(oldItems, key, {}),
    ...newItem,
    isFull: !!get(oldItems, [key, 'isFull'], false) || !!get(newItem, 'isFull', false),
  })), 'id');
}

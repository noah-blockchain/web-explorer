import {txTypeList} from 'noahjs-tx';

console.log(txTypeList);
export function txTypeFilter(value) {
  value = txTypeList[value].name; // get type name
  value = value.charAt(0).toUpperCase() + value.slice(1); // capitalize the first letter
  return value;
}

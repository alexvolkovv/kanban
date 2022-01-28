import { createListBlock } from './createListBlock.js';

export function createLists(array = [], whereNode) {
  const listHtml = array.map((item) => createListBlock(item.title, item.issues)).join('');

  whereNode.insertAdjacentHTML('beforeend', listHtml);
}

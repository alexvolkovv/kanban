import { calculateCountTask } from '../footer/calculateCountTask.js';
import { checkAllListBlocksAddButton } from '../taskList/checkAddButtonListBlock.js';
import { createListBlock } from '../taskList/createListBlock.js';
import { writeStorage } from '../taskList/writeLocalStorage.js';

export function createClick(event) {
  const isCreateModalBtn = event.target.closest('.modal-create');

  if (!isCreateModalBtn) {
    return;
  }

  const listTitle = document.querySelector('.modal-list__title');
  if (listTitle.value === '') {
    listTitle.focus();

    return;
  }

  const mainContentBlock = document.querySelector('.main-content');
  mainContentBlock.insertAdjacentHTML('afterbegin', createListBlock(listTitle.value));
  writeStorage();
  document.querySelector('.modal-wrap').remove();
  checkAllListBlocksAddButton();
  calculateCountTask();
}

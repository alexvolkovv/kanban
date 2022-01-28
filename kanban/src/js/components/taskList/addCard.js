import { calculateCountTask } from '../footer/calculateCountTask.js';
import { createDropdown } from '../taskListDropdown/createDropdown.js';
import { createListTask } from './createListTask.js';
import { getListTasks } from './getListTasksFromBlock.js';

export function addCard(event) {
  const isAddCardButton = event.target.closest('.add-card');

  if (!isAddCardButton) {
    return;
  }

  const currentListBlock = event.target.closest('.list-block');
  const prevListBlock = currentListBlock.previousElementSibling;
  const dropDown = currentListBlock.querySelector('.list-select');

  if (prevListBlock && !prevListBlock.querySelectorAll('.list-item').length) {
    return;
  }

  if (dropDown) {
    dropDown.classList.add('active');

    return;
  }

  const currentListBlockBody = event.target.closest('.list-block__body');
  const currentListBlockBodyContent = currentListBlock.querySelector('.list-block__body-content');
  const firstListBlock = document.querySelector('.list-block');

  if (currentListBlock === firstListBlock) {
    const newId = +currentListBlockBodyContent.lastElementChild?.dataset.id + 1 || 1;

    currentListBlockBodyContent.insertAdjacentHTML('beforeend', createListTask('', newId));
    currentListBlockBody.scrollTop = currentListBlockBody.scrollHeight;
    currentListBlockBodyContent.lastElementChild.focus();
    calculateCountTask();

    return;
  }

  const listElementsFromPrevBlock = getListTasks(prevListBlock);
  const dropdown = createDropdown(listElementsFromPrevBlock);

  currentListBlockBodyContent.insertAdjacentHTML('beforeend', dropdown);
  currentListBlockBodyContent.querySelector('.list-select').click();
}

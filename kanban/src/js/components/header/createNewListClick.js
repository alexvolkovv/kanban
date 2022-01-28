import { createModalWindow } from '../modalWindow/createAddingNewListModalWindow.js';

export function createNewListClick(event) {
  const isCreateNewListButton = event.target.closest('.header-user__button');

  if (!isCreateNewListButton) {
    return;
  }

  document.body.insertAdjacentHTML('afterbegin', createModalWindow());
  document.querySelector('.modal-list__title').focus();
}

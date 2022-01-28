import { createHeaderDropdown } from './createHeaderDropdown.js';

export function headerDropdownClick(event) {
  const header = document.querySelector('.header');
  const userAvatarContainer = document.querySelector('.header-user__avatar');
  const isUserInfoClick = !!event.target.closest('.user-info');
  const isUserAvatarClick = !!event.target.closest('.header-user__avatar');
  const isUserInfoOpen = !!userAvatarContainer.classList.contains('open');
  const isCloseButtonClick = !!event.target.classList.contains('user-info__close__btn');

  if (isCloseButtonClick) {
    header.removeChild(document.querySelector('.user-info__wrap'));
    userAvatarContainer.classList.remove('open');
    return;
  }

  if (isUserInfoOpen && !isUserInfoClick) {
    header.removeChild(document.querySelector('.user-info__wrap'));
    userAvatarContainer.classList.remove('open');
    return;
  }

  if (isUserAvatarClick) {
    if (!isUserInfoOpen) {
      header.insertAdjacentHTML('beforeend', createHeaderDropdown());
    } else {
      header.removeChild(document.querySelector('.user-info__wrap'));
    }

    userAvatarContainer.classList.toggle('open');
  }
}
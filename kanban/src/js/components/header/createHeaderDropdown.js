function createDropdownHeader() {
  return `
  <div class="user-info__block user-header__block">
    <div class="user-info__title">
      Account
    </div>
    <div class="user-info__close">
      <button class="user-info__close__btn">
        &#9932;
      </button>
    </div>
  </div>
  `;
}

function createDropdownAccountBlock(imgSrc, name, mail) {
  return `
  <div class="user-info__block user-info__account-block">
    <div class="user-image">
      <img src="${imgSrc}" alt="User avatar">
    </div>
    <div class="user-info__personal">
      <div class="user-info__name">${name}</div>
      <div class="user-info__mail">${mail}</div>
    </div>
  </div>
  `;
}

function createDropdownSettingBlock() {
  return `
  <div class="user-info__block settings-block">
    <ul class="user-info__links">
      <li class="settings-block_link"><a href="#">Profile and access</a></li>
      <li class="settings-block_link"><a href="#">Actions</a></li>
      <li class="settings-block_link"><a href="#">Cards</a></li>
      <li class="settings-block_link"><a href="#">Settings</a></li>
    </ul>
  </div>
  `;
}

function createDropdownHelpBlock() {
  return `
  <div class="user-info__block help-block">
    <ul class="user-info__links">
      <li class="settings-block_link"><a href="#">Profile and access</a></li>
      <li class="settings-block_link"><a href="#">Actions</a></li>
    </ul>
  </div>
  `;
}

function createDropdownLogoutBlock() {
  return `
  <div class="user-info__block logout-block">
    <ul class="user-info__links">
      <li class="settings-block_link logout-link"><a href="#">Log out</a></li>
    </ul>
  </div>
  `;
}

export function createHeaderDropdown() {
  const htmlContent = `
  <div class="user-info__wrap">
    <div class="user-info">
    ${createDropdownHeader()}
    ${createDropdownAccountBlock('./src/img/header/user-avatar.png', 'Test name', 'test@mail.ru')}
    ${createDropdownSettingBlock()}
    ${createDropdownHelpBlock()}
    ${createDropdownLogoutBlock()}
    </div>
  </div>
  `;

  return htmlContent;
}
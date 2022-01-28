import { createListTask } from './createListTask.js';

function createListBlockBody(listTasks) {
  return `
  <div class="list-block__body">
    <div class="list-block__body-content">
      ${listTasks}
    </div>

    <div class="list-block__body-add">
      <button class="add-card">
        <span class="plus"></span>
        <span class="add-card__text">Add card</span>
      </button>
      </div>
    </div> 
  </div>
  `;
}

function createListBlockHeader(title) {
  return `
  <div class="list-block__header">
    <input value="${title}" class="list-block__title">
    <div class="list-action">
      <button class="list-action__btn">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </button>
    </div>
  </div>`;
}

export function createListBlock(title = '', taskArray = []) {
  const listHeader = createListBlockHeader(title);
  const listItems = taskArray.map((item) => createListTask(item.name, item.id)).join('');
  const listBody = createListBlockBody(listItems);

  return `
    <div class="list-block">
      ${listHeader}
      ${listBody}
    </div>
  `;
}

export function createListTask(content = '', id = 1) {
  return `
  <div class="list-item" contenteditable="true" data-id="${id}">
    ${content}
  </div>
  `;
}

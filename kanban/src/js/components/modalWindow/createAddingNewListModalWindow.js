function createModalHeader() {
  return `
  <div class="modal-header modal-block">
    Creating new list
  </div>`;
}

function createModalBody() {
  return `
  <div class="modal-body modal-block">
      <input type="text" class="modal-list__title" placeholder="List title...">
    </div>
  `;
}

function createModalFooter() {
  return `
  <div class="modal-footer modal-block">
    <button class="modal-cancel modal-btn">Cancel</button>
    <button class="modal-create modal-btn">Create</button>
  </div>
  `;
}

export function createModalWindow() {
  return `
  <div class="modal-wrap">
  <div class="modal">
    ${createModalHeader()}
    ${createModalBody()}
    ${createModalFooter()}
  </div>
</div>
  `;
}

export function checkListBlockAddButton(blockNode) {
  const prevBlock = blockNode.previousElementSibling;

  if (!prevBlock) {
    blockNode.querySelector('.add-card').classList.remove('disabled');

    return;
  }

  const countTasks = prevBlock.querySelectorAll('.list-item').length;

  if (countTasks !== 0) {
    blockNode.querySelector('.add-card').classList.remove('disabled');

    return;
  }

  blockNode.querySelector('.add-card').classList.add('disabled');
}

export function checkAllListBlocksAddButton() {
  const listBlocks = [...document.querySelectorAll('.list-block')];

  listBlocks.forEach((item) => {
    checkListBlockAddButton(item);
  });
}

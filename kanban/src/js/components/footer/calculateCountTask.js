export function calculateCountTask() {
  const listBlocks = document.querySelectorAll('.list-block');
  const firstBlock = listBlocks[0];
  const lastBlock = listBlocks[listBlocks.length - 1];
  const htmlActiveTasks = document.querySelector('.count-active');
  const htmlFinishedTasks = document.querySelector('.count-finished');

  if (listBlocks.length === 0) {
    htmlActiveTasks.innerHTML = 0;
    htmlFinishedTasks.innerHTML = 0;

    return;
  }

  const countActiveTasks = firstBlock.querySelectorAll('.list-item').length;
  const countFinishedTasks = lastBlock.querySelectorAll('.list-item').length;

  htmlActiveTasks.innerHTML = countActiveTasks;
  htmlFinishedTasks.innerHTML = countFinishedTasks;
}

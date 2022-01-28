export function cancelClick(event) {
  if (event.target.classList.contains('modal-cancel') || event.target.classList.contains('modal-wrap')) {
    document.querySelector('.modal-wrap').remove();
  }
}

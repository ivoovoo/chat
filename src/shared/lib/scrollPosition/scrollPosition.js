export function scrollPosition() {
  const rowContent = document.querySelector(".row__content");
  const scrollHeight = rowContent.scrollHeight;
  const scrollPosition = rowContent.scrollTop + rowContent.offsetHeight;

  if (scrollHeight > scrollPosition) {
    rowContent.scrollTop = scrollHeight;
  }
}

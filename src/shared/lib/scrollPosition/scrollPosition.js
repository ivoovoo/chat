export function scrollPosition() {
  const rowContent = document.querySelector(".app__content");
  const scrollHeight = rowContent.scrollHeight;
  const scrollPosition = rowContent.scrollTop + rowContent.offsetHeight;

  if (scrollHeight > scrollPosition) {
    rowContent.scrollTo({
      top: rowContent.scrollHeight - 5,
      behavior: "smooth",
    });
  }
}

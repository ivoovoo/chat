export function adjustHeight(textarea) {
  textarea.style.height = "auto";
  if (textarea.scrollHeight > 150) {
    textarea.style.height = "150px";
    textarea.style.overflowY = "scroll";
  } else {
    textarea.style.height = textarea.scrollHeight + "px";
    textarea.style.overflowY = "hidden";
  }
}

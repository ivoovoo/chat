export function adjustHeight() {
  this.style.height = "auto";
  if (this.scrollHeight > 150) {
    this.style.height = "150px";
    this.style.overflowY = "scroll";
  } else {
    this.style.height = this.scrollHeight + "px";
    this.style.overflowY = "hidden";
  }
}

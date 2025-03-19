export function clickOut(e, sidebarBool) {
  if (window.innerWidth > 1100 || !sidebarBool) return;
  const target = e.target;
  const sidebar = document.querySelector(".sidebar");

  if (!sidebar.contains(target)) {
    return true;
  }
}

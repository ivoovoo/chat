export function clickOut(e, sidebarBool) {
  if (window.innerWidth > 1100 || !sidebarBool) return;
  const target = e.target;
  const sidebar = document.querySelector(".sidebar");
  console.log(target, sidebarBool);
  if (!sidebar.contains(target)) {
    return true;
  }
}

// show submenu
document.querySelector("#translations").onmouseover = function() {
  document.querySelector("#translations-submenu").style.display = "block"
}
document.querySelector("#translations-submenu").onmouseleave = function() {
  document.querySelector("#translations-submenu").style.display = "none"
}
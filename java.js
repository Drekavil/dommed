const intervalID = setInterval(buttonclick, 1000);
window.onload = function () {
  document.getElementById("domcounter");
};

function buttonclick() {
  document.getElementById("domcounter").value++;
}

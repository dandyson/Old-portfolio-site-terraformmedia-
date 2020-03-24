let sidebarDiv = document.getElementById("sidebarDiv");
let navToggle = document.getElementById("navToggle");
let sidebarCross = document.getElementById("sidebarCross");

navToggle.addEventListener("click", () => {
  sidebarDiv.style.width = "30%";
});

sidebarCross.addEventListener("click", () => {
  sidebarDiv.style.width = "0%";
});

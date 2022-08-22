const menuItems = document.querySelectorAll("#menu a");
const menuIcon = document.getElementById("menuIcon");
const sNav = document.getElementById("secondary-nav");
const ads = document.querySelectorAll(".ad");
var glass = [];
const colors = [
  "#fa7970",
  "#faa356",
  "#7ce38b",
  "#a2d2fb",
  "#77bdfb",
  "#cea5fb",
];
const colors2 = [
  "#D94452",
  "#e8563f",
  "#35bb9b",
  "#4db1ff",
  "#0070f2",
  "#967ada",
];

menuItems.forEach((menuItem) => {
  let index = Math.floor(Math.random() * colors.length);
  let color1 = colors[index];
  let color2 = colors2[index];
  let deg = Math.floor(Math.random() * 361);
  menuItem.style.background = `linear-gradient(${deg}deg, ${color1},${color2})`;
  menuItem.addEventListener("mouseover", (e) => {
    menuItem.querySelector(".icon").style.background = color1;
    menuItem.style.boxShadow = `2px 2px 10px ${color1}, -2px -2px 10px ${color1}`;
  });
  menuItem.addEventListener("mouseleave", (e) => {
    menuItem.querySelector(".icon").style.background = "#ffffff";
    menuItem.style.boxShadow = `none`;
  });
});
ads.forEach((ad) => {
  let index = Math.floor(Math.random() * colors.length);
  let color1 = colors[index];
  let color2 = colors2[index];
  let deg = Math.floor(Math.random() * 361);
  ad.style.background = `linear-gradient(${deg}deg, ${color1},${color2})`;
  let glassNum = Math.floor(Math.random() * 5) + 3;
  for (let i = 0; i < glassNum; i++) {
    let span = document.createElement("span");
    span.classList.add("glass");
    ad.appendChild(span);
  }
  glass = document.querySelectorAll(".ad .glass");
});

// console.log(ads[0].getBoundingClientRect);

glass.forEach((gls) => {
  let rect = ads[0].getBoundingClientRect();
  let w = Math.floor(Math.random() * 800) + 500;
  let h = Math.floor(Math.random() * 200) + 100;
  let top =
    Math.floor(Math.random() * rect.height) - Math.random() * rect.height;
  let left =
    Math.floor(Math.random() * rect.width) - Math.random() * rect.width;
  gls.style.width = w + "px";
  gls.style.height = h + "px";
  gls.style.top = top + "px";
  gls.style.left = left + "px";
});

menuIcon.addEventListener("click", (e) => {
  sNav.classList.toggle("hide");
});

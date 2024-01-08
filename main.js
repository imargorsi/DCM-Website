const themeToggleBtn = document.querySelectorAll("#darkmode__switcher");

const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".mobile-nav__link");

for (let elemet of themeToggleBtn) {
  elemet.addEventListener("click", function () {
    body.classList.toggle("light-mode");
  });
}

const headerBars = document.querySelector(".header__bars");
const mobileNav = document.querySelector(".mobile-nav");

let isMobileNavOpen = false;

headerBars.addEventListener("click", function () {
  isMobileNavOpen = !isMobileNavOpen;

  if (isMobileNavOpen) {
    mobileNav.style.display = "flex";
    document.body.style.overflowY = "hidden";
  } else {
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
  }
});

// for saas section of changing monthly to yearly

const Monthlybtn = document.querySelector("#monthly");
const Yearbtn = document.querySelector("#yearly");
const standaredPrice = document.querySelector("#Standard__price");
const advPrice = document.querySelector("#adv__price");
const elitePrice = document.querySelector("#elite__price");
const planSaving = document.querySelectorAll(".plan__saving");

console.log(planSaving);

Monthlybtn.addEventListener("click", function () {
  Yearbtn.classList.remove("selectoractive");
  Monthlybtn.classList.add("selectoractive");
  standaredPrice.innerHTML = "$297";
  advPrice.innerHTML = "$497";
  elitePrice.innerHTML = "$997";
  planSaving.forEach(function (elemet) {
    elemet.style.display = "none";
  });
});

Yearbtn.addEventListener("click", function () {
  Monthlybtn.classList.remove("selectoractive");
  Yearbtn.classList.add("selectoractive");
  standaredPrice.innerHTML = "$198";
  advPrice.innerHTML = "$331";
  elitePrice.innerHTML = "$797";

  // planSaving.style.display = "block";
  planSaving.forEach(function (elemet) {
    elemet.style.display = "block";
  });
});

import "./styles/modern-normalize.css";
import "./styles/global.css";
import "./styles/components/header.css";
import "./styles/components/hero.css";
import "./styles/components/about.css";
import "./styles/components/services.css";
import "./styles/components/testimonials.css";
import "./styles/components/contact.css";
import "./styles/utlise.css";

const themeToggleBtn = document.querySelector(".header__sun");
const logoChange = document.querySelector("#logo");
const body = document.querySelector("body");

themeToggleBtn.addEventListener("click", function () {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    logoChange.setAttribute("src", "/images/dcm-white.png");
  } else {
    logoChange.setAttribute("src", "/images/logo.png");
  }
  logoChange.toggleAttribute("src", "/images/dcm-white.png");
});

const navBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav-menu");
const bg_cover = document.querySelector(".bg_cover");

let navOpen = false;

document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
});

navBtn.addEventListener("click", function () {
  if (navOpen) {
    navBtn.classList.remove("nav__btn--open");
    navMenu.classList.remove("nav-menu--open");
    bg_cover.classList.remove("d_block");
    navOpen = false;
  } else {
    navBtn.classList.add("nav__btn--open");
    navMenu.classList.add("nav-menu--open");
    bg_cover.classList.add("d_block");
    navOpen = true;
  }
});

bg_cover.addEventListener("click", () => {
  navBtn.classList.remove("nav__btn--open");
  navMenu.classList.remove("nav-menu--open");
  bg_cover.classList.remove("d_block");
  navOpen = false;
});

const navabar = document.querySelector("#navabar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let nowScrollTop = window.scrollY || document.documentElement.scrollTop;
  let isScrollingUp = nowScrollTop < lastScrollTop;
  let isBeyondThreshold = nowScrollTop > 100;
  let isMobile = window.innerWidth < 768;

  if (isScrollingUp && isBeyondThreshold) {
    navabar.style.position = "fixed";
    navabar.style.top = "0";
    navabar.style.zIndex = "997";
    navMenu.style.zIndex = "10000";
    navabar.style.backgroundColor = "#3B3735";
    navabar.style.padding = "2rem";
    navabar.style.transition = "top 0.3s ease-in-out";
    navabar.style.borderBottomLeftRadius = "2.5rem";
    navabar.style.borderBottomRightRadius = "2.5rem";

    if (isMobile) {
      navabar.style.left = "0";
      navabar.style.width = "100%";
      navabar.style.height = "10%";

      navabar.style.transform = "";
    } else {
      navabar.style.left = "50%";
      navabar.style.width = "70%";
      navabar.style.width = "70%";

      navabar.style.transform = "translateX(-50%)";
    }
  } else if (nowScrollTop > lastScrollTop) {
    navabar.style.top = "-900px";
  } else {
    navabar.style.position = "";
    navabar.style.top = "";
    navabar.style.left = "";
    navabar.style.width = "";
    navabar.style.transform = "";
    navabar.style.zIndex = "";
    navabar.style.backgroundColor = "";
    navabar.style.transition = "";
  }

  lastScrollTop = nowScrollTop <= 0 ? 0 : nowScrollTop;
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".place__like").forEach((likeBtn) => {
    const parentPlace = likeBtn.closest(".place");
    const id = parentPlace.dataset.id;

    const icon = likeBtn.querySelector(".place__like-icon");

    const isLiked = localStorage.getItem(`like_${id}`) === "true";
    if (isLiked) icon.classList.add("place__like-icon--fill");

    likeBtn.addEventListener("click", () => {
      const isNowLiked = icon.classList.toggle("place__like-icon--fill");
      localStorage.setItem(`like_${id}`, isNowLiked);
    });
  });
});

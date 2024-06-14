
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

 // cursorOutline.style.left = `${posX}px`;
  //cursorOutline.style.top = `${posY}py`;

  cursorOutline.animate ({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 500, fill: "forwards" });

});


function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  
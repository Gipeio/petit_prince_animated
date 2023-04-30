// SWIPE EFFECT
const pages = document.querySelectorAll(".page");
const translateAmount = 100; 
let translate = 0;

// Check if URL has query parameter
const urlParams = new URLSearchParams(window.location.search);
const pageParam = urlParams.get("page");

// If pageParam is set to "page-two", set translate to -100
if (pageParam === "page-two") {
  translate = -100;
  pages.forEach(page => (page.style.transform = `translateX(${translate}%)`));
}


let slide = (direction) => {
  popup__content.style.visibility = 'hidden';
  logo.style.visibility = 'visible';

    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
    );

}


const chap1 = document.querySelector('.chap1');
const mercury = document.querySelector('.mercury');

chap1.addEventListener('mouseover', () => {
  mercury.classList.add('zoomed');
});

chap1.addEventListener('mouseleave', () => {
  mercury.classList.remove('zoomed');
});

const logo = document.querySelector('.animation');
const solar_system = document.querySelector('.solar-syst');
const popup__content  = document.querySelector('.popup__content ');
const typewriteP = document.querySelector('.typewriteP');
const typewriteP2 = document.querySelector('.typewriteP2');
const typewriteP3= document.querySelector('.typewriteP3');
const typewriteP4 = document.querySelector('.typewriteP4');

 chap1.addEventListener('click', () => {
 logo.style.visibility = 'hidden';
 solar_system.style.opacity = '0.5';
 popup__content.style.visibility = 'visible';
 typewriteP.classList.add('box');
 typewriteP2.classList.add('box2');
 typewriteP3.classList.add('box3');
 typewriteP4.classList.add('box4');


 });

const chap2 = document.querySelector('.chap2');
const venus = document.querySelector('.venus');

chap2.addEventListener('mouseover', () => {
  venus.classList.add('zoomed');
});

chap2.addEventListener('mouseleave', () => {
  venus.classList.remove('zoomed');
});

const chap3 = document.querySelector('.chap3');
const earth = document.querySelector('.earth');

chap3.addEventListener('mouseover', () => {
  earth.classList.add('zoomed');
});

chap3.addEventListener('mouseleave', () => {
  earth.classList.remove('zoomed');
});

const chap4 = document.querySelector('.chap4');
const mars = document.querySelector('.mars');

chap4.addEventListener('mouseover', () => {
  mars.classList.add('zoomed');
});

chap4.addEventListener('mouseleave', () => {
  mars.classList.remove('zoomed');
});

const chap5 = document.querySelector('.chap5');
const jupiter = document.querySelector('.jupiter');

chap5.addEventListener('mouseover', () => {
  jupiter.classList.add('zoomed');
});

chap5.addEventListener('mouseleave', () => {
  jupiter.classList.remove('zoomed');
});

const chap6 = document.querySelector('.chap6');
const saturn = document.querySelector('.saturn');

chap6.addEventListener('mouseover', () => {
  saturn.classList.add('zoomed');
});

chap6.addEventListener('mouseleave', () => {
  saturn.classList.remove('zoomed');
});

const chap7 = document.querySelector('.chap7');
const uranus = document.querySelector('.uranus');

chap7.addEventListener('mouseover', () => {
  uranus.classList.add('zoomed');
});

chap7.addEventListener('mouseleave', () => {
  uranus.classList.remove('zoomed');
});


const chap8 = document.querySelector('.chap8');
const neptune = document.querySelector('.neptune');

chap8.addEventListener('mouseover', () => {
  neptune.classList.add('zoomed');
});

chap8.addEventListener('mouseleave', () => {
  neptune.classList.remove('zoomed');
});

const chap9 = document.querySelector('.chap9');
const pluto = document.querySelector('.pluto');

chap9.addEventListener('mouseover', () => {
  pluto.classList.add('zoomed');
});

chap9.addEventListener('mouseleave', () => {
  pluto.classList.remove('zoomed');
});





// SWIPE EFFECT
const pages = document.querySelectorAll(".page");
const homepageTitle = document.querySelectorAll('.homepageTitle')
const translateAmount = 100; 
let translate = 0;

// Check if URL has query parameter
const urlParams = new URLSearchParams(window.location.search);
const pageParam = urlParams.get("page");

// If pageParam is set to "page-two", set translate to -100
if (pageParam === "page-two") {
  translate = -100;
  pages.forEach(page => (page.style.transform = `translateX(${translate}%)`))
}


let slide = (direction) => {
  popup__content.style.visibility = 'hidden';
  popup__content2.style.visibility = 'hidden';
  popup__content3.style.visibility = 'hidden';
  popup__content4.style.visibility = 'hidden';
  popup__content5.style.visibility = 'hidden';
  popup__content6.style.visibility = 'hidden';
  popup__content7.style.visibility = 'hidden';
  popup__content8.style.visibility = 'hidden';
  popup__content9.style.visibility = 'hidden';

  logo.style.visibility = 'visible';
  picture.style.visibility = 'hidden';

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
const picture = document.querySelector('.picture');
const solar_system = document.querySelector('.solar-syst');
const popup__content  = document.querySelector('.popup__content');
const popup__content2  = document.querySelector('.popup__content2');
const popup__content3  = document.querySelector('.popup__content3');
const popup__content4  = document.querySelector('.popup__content4');
const popup__content5  = document.querySelector('.popup__content5');
const popup__content6  = document.querySelector('.popup__content6');
const popup__content7  = document.querySelector('.popup__content7');
const popup__content8  = document.querySelector('.popup__content8');
const popup__content9  = document.querySelector('.popup__content9');
const typewriteP = document.querySelector('.typewriteP');
const typewriteP2 = document.querySelector('.typewriteP2');
const typewriteP3= document.querySelector('.typewriteP3');
const typewriteP4 = document.querySelector('.typewriteP4');
const typewriteP5 = document.querySelector('.typewriteP5');
const typewriteP6 = document.querySelector('.typewriteP6');
const typewriteP7 = document.querySelector('.typewriteP7');
const typewriteP8 = document.querySelector('.typewriteP8');
const typewriteP9 = document.querySelector('.typewriteP9');
const typewriteP10 = document.querySelector('.typewriteP10');
const typewriteP11 = document.querySelector('.typewriteP11');
const typewriteP12 = document.querySelector('.typewriteP12');
const typewriteP13 = document.querySelector('.typewriteP13');
const typewriteP14= document.querySelector('.typewriteP14');
const typewriteP15 = document.querySelector('.typewriteP15');
const typewriteP16 = document.querySelector('.typewriteP16');
const typewriteP17 = document.querySelector('.typewriteP17');
const typewriteP18 = document.querySelector('.typewriteP18');
const typewriteP19 = document.querySelector('.typewriteP19');
const typewriteP20 = document.querySelector('.typewriteP20');
const typewriteP21 = document.querySelector('.typewriteP21');
const typewriteP22 = document.querySelector('.typewriteP22');
const typewriteP23 = document.querySelector('.typewriteP23');
const typewriteP24 = document.querySelector('.typewriteP24');
const typewriteP25= document.querySelector('.typewriteP25');
const typewriteP26 = document.querySelector('.typewriteP26');
const typewriteP27 = document.querySelector('.typewriteP27');
const typewriteP28 = document.querySelector('.typewriteP28');
const typewriteP29 = document.querySelector('.typewriteP29');
const typewriteP30 = document.querySelector('.typewriteP30');


 chap1.addEventListener('click', () => {
 logo.style.visibility = 'hidden';
 picture.style.visibility = 'visible';
 picture.style.backgroundImage = "url('img/princemoon.png')";
 solar_system.style.opacity = '0.5';
 popup__content.style.visibility = 'visible';
 popup__content2.style.visibility = 'hidden';
 popup__content3.style.visibility = 'hidden';
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

chap2.addEventListener('click', () => {
  logo.style.visibility = 'hidden';
  solar_system.style.opacity = '0.5';
  popup__content2.style.visibility = 'visible';
  popup__content.style.visibility = 'hidden';
  popup__content3.style.visibility = 'hidden';
  picture.style.backgroundImage = "url('img/flower.png')";

  typewriteP5.classList.add('box5');
  typewriteP6.classList.add('box6');
  typewriteP7.classList.add('box7');
 
  });

const chap3 = document.querySelector('.chap3');
const earth = document.querySelector('.earth');

chap3.addEventListener('mouseover', () => {
  earth.classList.add('zoomed');
});

chap3.addEventListener('mouseleave', () => {
  earth.classList.remove('zoomed');
});

chap3.addEventListener('click', () => {
  logo.style.visibility = 'hidden';
  solar_system.style.opacity = '0.5';
  popup__content3.style.visibility = 'visible';
  popup__content.style.visibility = 'hidden';
  popup__content2.style.visibility = 'hidden';
  picture.style.backgroundImage = "url('img/cartograph.png')";

  typewriteP8.classList.add('box8');
  typewriteP9.classList.add('box9');
  typewriteP10.classList.add('box10');
  typewriteP11.classList.add('box11');
 
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


homepageTitle.addEventListener('click', () => {
  logo.style.visibility = 'visible';
  solar_system.style.opacity = '1';
  popup__content.style.visibility = 'hidden';
  });



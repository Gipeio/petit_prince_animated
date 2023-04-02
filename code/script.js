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
    direction === "next" ? translate -= translateAmount : translate += translateAmount;
    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
    );

}


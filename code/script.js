window.onscroll = function () {
    scrollRotate();
};
const zoomElement = document.querySelector(".zoom");
let zoom = 1;
let scrollDegree=0;
let rotationDegree=0;
let image = document.getElementById("reload");
const ZOOM_SPEED = 0.1;
document.addEventListener("wheel", function(e) {
    console.log('e', e)  
    if(e.clientY > 0){
        // scrollRotate();
        scrollDegree+=1;
        rotationDegree+=2;
        console.log('scrollDegree',scrollDegree);
        image.style.transform="rotate("+ rotationDegree + "deg)"
    }
    // if(e.deltaY > 0){    
    //     scrollRotate();
    //     zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
    // }else{    
    //     scrollRotate();
    //     zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  }

});
function scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}
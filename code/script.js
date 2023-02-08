window.onscroll = function () {
    scrollRotate();
};
const zoomElement = document.querySelector(".zoom");
let zoom = 1;
const ZOOM_SPEED = 0.1;
document.addEventListener("wheel", function(e) {
    console.log('e', e)  
    if(e.clientY > 0){
        console.log('connard');
        scrollRotate();
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
    console.log('bitch');
}
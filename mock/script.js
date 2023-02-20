(function () {
    var capsule = document.querySelector(".capsule")
    var sprite = document.querySelector(".sprite"),
      key = { left: false, right: false },
      trans = 0,
      property = getTransformProperty(sprite);
  
    function getTransformProperty(element) {
      var properties = [
        "transform",
        "WebkitTransform",
        "msTransform",
        "MozTransform",
        "OTransform"
      ];
      var p;
      while ((p = properties.shift())) {
        if (typeof element.style[p] != "undefined") {
          return p;
        }
      }
      return false;
    }
  
    function translate() {
      capsule.style[property] = "translateX(" + trans + "px)";
    }
  

    var keyState = {};

    window.addEventListener('keydown',function(e){
        keyState[e.keyCode || e.which] = true;
    },true);
    
    window.addEventListener('keyup',function(e){
        keyState[e.keyCode || e.which] = false;
    },true);
    
    function gameLoop() {

        if (keyState[37]){
          trans -= 5;
          key.left = false;
          key.right = true;
          sprite.classList.remove("right");
          sprite.classList.remove("walk-right");
          sprite.classList.add("left");
          sprite.classList.add("walk-left");
        }
    
        if (keyState[39]){
          trans += 5;
          key.left = true;
          key.right = false;
          sprite.classList.remove("left");
          sprite.classList.remove("walk-left");
          sprite.classList.add("right");
          sprite.classList.add("walk-right");
        }

        if (!keyState[37] && !keyState[39]) {
          sprite.classList.remove("walk-left");
          sprite.classList.remove("walk-right");
        }
    
        translate();
        
        setTimeout(gameLoop, 10);
    }
    
    gameLoop();
    


    
  })();
  
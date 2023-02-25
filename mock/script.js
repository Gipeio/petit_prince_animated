(function () {
    var sprite = document.querySelector(".sprite")
    var person = document.querySelector(".person")
    var text1 = document.querySelector(".text1")
    var text2 = document.querySelector(".text2"),
      key = { left: false, right: false },
      progression = 0,
      trans = 0,
      speed = 5,
      maxtrans = 700,
      mintrans = 0,
      scrollable = true,
      event = 0,
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
      sprite.style[property] = "translateX(" + trans + "px)";
    }
  
    function block() {
      if (trans == maxtrans && progression >= 600) {
        scrollable = false;
        sprite.classList.remove("walk-right");
        stop_background();
        if (event == 0) {
          launchevent(event);
        }
      } else {
        scrollable = true;
      }
    }

    text1.onclick = text2.onclick = function(event) {
        launchevent(event);
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
          key.left = true;
          key.right = false;
          sprite.classList.remove("right");
          sprite.classList.remove("walk-right");
          sprite.classList.add("left");
          sprite.classList.add("walk-left");
          if (trans > mintrans) {
            trans -= speed;
          }
        }
    
        if (keyState[39]){
          block();
          key.left = false;
          key.right = true;
          sprite.classList.remove("left");
          sprite.classList.remove("walk-left");
          sprite.classList.add("right");
          if (scrollable){
            sprite.classList.add("walk-right");
          }

          if (trans < maxtrans) {
            trans += speed;
          }
          if (trans == maxtrans) {
              animate_background();
            }
        }

        if (!keyState[37] && !keyState[39]) {
          sprite.classList.remove("walk-left");
          sprite.classList.remove("walk-right");
        }

        if (key.left == true && trans >= mintrans){
          translate();
        }
        if (key.right == true && trans <= maxtrans){
          translate();
        }

        setTimeout(gameLoop, 10);
    }
    
    gameLoop();
    
    function animate_background() {
      block();
      if (scrollable){
        progression += 5
        person.style[property] = "translateX(-" + progression + "px)";
        const animations = document.querySelectorAll('[data-animation');
        animations.forEach(animation => {
          const running = animation.style.animationPlayState || 'running';
          animation.style.animationPlayState = 'running';
        })
      }
    };

    function stop_background() {
      const animations = document.querySelectorAll('[data-animation');
      animations.forEach(animation => {
        const running = animation.style.animationPlayState || 'running';
        animation.style.animationPlayState = 'paused';
      })
    };


    document.addEventListener('keyup', function(event) {
      stop_background();
  });

  function launchevent(numEvent){
    var txt1 = document.getElementById("text1");
    var txt2 = document.getElementById("text2");
    if (event == 0){
      txt2.innerHTML = "Salam labas?"
    } else if (event == 1) {
      txt1.innerHTML = "Salam, zin mekhtoub wla isna el mktoub"
      txt2.innerHTML = ""
    } else if (event == 2) {
      txt1.innerHTML = ""
      txt2.innerHTML = "mekhtoub"
    } else if (event == 3) {
      txt1.innerHTML = "tfou"
      txt2.innerHTML = ""
    }

    event += 1;
  }
    
  })();

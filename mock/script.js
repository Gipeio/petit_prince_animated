(function () {

//VAR
    var sprite = document.querySelector(".sprite")
    var person = document.querySelector(".person")
    var bubble1 = document.querySelector(".dialog-1")
    var bubble2 = document.querySelector(".dialog-2"),

    key = { left: false, right: false },

    property = getTransformProperty(sprite),

    mintrans = 0,
    maxtrans = 500,
    personMax = 950,
    scrollable = true,
    event = 0,

    progression = 0,
    trans = 0,
    speed = 5,
    static = false,

    person_here = false,
    personLoc = 0,
    person_size = 150;

// Déroulé de l'app

  var keyState = {};

  window.addEventListener('keydown',function(e){
      keyState[e.keyCode || e.which] = true;
  },true);
  
  window.addEventListener('keyup',function(e){
      keyState[e.keyCode || e.which] = false;
  },true);
  

  function Loop() {
    if (keyState[37] && !static){
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

    if (keyState[39] && !static){
      block();
      key.left = false;
      key.right = true;
      sprite.classList.remove("left");
      sprite.classList.remove("walk-left");
      sprite.classList.add("right");
      if (scrollable || trans < maxtrans){
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

    setTimeout(Loop, 10);
  }

  Loop();

//Lancement d'un évènement

  function launchevent(numEvent){
    var txt1 = document.getElementById("text1");
    var txt2 = document.getElementById("text2");
    if (event == 0){
      person_here = true;
      person.style.width = person_size + "px";     
    } else if (event == 1){
      stop_background();
      static = true
      sprite.classList.remove("walk-right");
      bubble2.style.display = 'block';
      txt2.innerHTML = "Salam labas?"
    } else if (event == 2) {
      bubble1.style.display = 'block';
      bubble2.style.display = 'none';
      txt1.innerHTML = "Salam ghzalti, zinek macheft bhalo, koul youm tzidi tezyani,zin mekhtoub wla isna el mktoub"
      txt2.innerHTML = ""
    } else if (event == 3) {
      bubble1.style.display = 'none';
      bubble2.style.display = 'block';
      txt1.innerHTML = ""
      txt2.innerHTML = "mekhtoub"
    } else if (event == 4) {
      bubble1.style.display = 'block';
      bubble2.style.display = 'none';
      txt1.innerHTML = "tfou"
      txt2.innerHTML = ""
    } else if (event == 5) {
      bubble1.style.display = 'none';
      bubble2.style.display = 'none';
      static = false;
      txt1.innerHTML = ""
      txt2.innerHTML = ""
    }

    event += 1;
  }

  text1.onclick = text2.onclick = function(event) {
    launchevent(event);
  }

//Points d'ancrages 

  function block() {
    if (event == 6) {
      scrollable = true;
    } else if (trans == maxtrans && progression >= personMax && event == 1) {
      launchevent(event);  
    } else if (trans == maxtrans && progression >= 300 && event == 0) {
      launchevent(event);
    } else if (progression < personMax) {
      scrollable = true;
    }
  }

//Déplacement des personnages

  function translate() {
    sprite.style[property] = "translateX(" + trans + "px)";
  }

  function animate_person() {
    if (person_here) {
      personLoc += 5;
      person.style[property] = "translateX(-" + personLoc + "px)";
    }
  }

//Gestion du background

function animate_background() {
  block();
  if (scrollable){
    progression += speed;
    animate_person();
    const animations = document.querySelectorAll('[data-animation');
    animations.forEach(animation => {
      const running = animation.style.animationPlayState || 'running';
      animation.style.animationPlayState = 'running';
    })
  }
};

function stop_background() {
  scrollable = false;
  const animations = document.querySelectorAll('[data-animation');
  animations.forEach(animation => {
    const running = animation.style.animationPlayState || 'running';
    animation.style.animationPlayState = 'paused';
  })
};


document.addEventListener('keyup', function(event) {
  stop_background();
});

//autre

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
  
//FIN

  })();
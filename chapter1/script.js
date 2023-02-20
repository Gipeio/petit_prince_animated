(function () {
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
      sprite.style[property] = "translateX(" + trans + "px)";
    }
  
    function walk(e) {
      var keyCode = e.keyCode;
      if (keyCode === 39) {
        key.right = true;
      } else if (keyCode === 37) {
        key.left = true;
      }
      if (key.right === true) {
        trans += 10;
        translate();
        sprite.classList.remove("left");
        sprite.classList.add("right");
        sprite.classList.add("walk-right");
      } else if (key.left === true) {
        trans -= 10;
        translate();
        sprite.classList.remove("right");
        sprite.classList.add("left");
        sprite.classList.add("walk-left");
      }
    }
  
    function stop(e) {
      var keyCode = e.keyCode;
      if (keyCode === 39) {
        key.right = false;
      } else if (keyCode === 37) {
        key.left = false;
      }
      if (key.right === false) {
        sprite.classList.remove("walk-right");
      }
      if (key.left === false) {
        sprite.classList.remove("walk-left");
      }
    }
  
    document.addEventListener("keydown", walk, false);
    document.addEventListener("keyup", stop, false);
  })();
  
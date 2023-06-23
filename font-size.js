function fontchange(n) {
    var paragraphs = document.getElementsByClassName('para');
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.fontSize = parseInt(window.getComputedStyle(paragraphs[i]).fontSize) + n + 'px';
    }
  }

  var increaseButton = document.getElementById('increase');
  increaseButton.addEventListener('click', function() {
    fontchange(2);
    var current = document.querySelector('.active');
    if (current) {
      current.classList.remove('active');
    }
    this.classList.add('active');
  });

  var decreaseButton = document.getElementById('decrease');
  decreaseButton.addEventListener('click', function() {
    fontchange(-2);
    var current = document.querySelector('.active');
    if (current) {
      current.classList.remove('active');
    }
    this.classList.add('active');
  });
  var brightnessSlider = document.getElementById("brightnessSlider");

    brightnessSlider.addEventListener("input", function() {
    var brightnessValue = this.value;
    var htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.style.filter = "brightness(" + brightnessValue + "%)";
    });

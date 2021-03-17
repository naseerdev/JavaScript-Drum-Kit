window.onload = function () {

  window.onkeyup = function (e) {
    var hSound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    hSound.play()
  }
}
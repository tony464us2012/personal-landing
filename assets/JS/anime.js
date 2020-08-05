// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1950,
    delay: (el, i) => 100*i
  }).add({
    targets: '.ml2',
    opacity: 1,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000
  });
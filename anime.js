
let scrollController = new ScrollMagic.Controller();

let time1 = anime.timeline({autoplay: false});

// Add animations
let screen1 = {
  targets: '#animation-image .animate-image1 img',
  opacity: [0.3,1],
  scale: [2,0.8],
  duration: 10000,
  delay: 0,
  easing: 'easeInOutSine'
};

let screen2 = {
  targets: '#animation-image .animate-image1 img',
  scale: 0.8,
  duration: 10,
};

// children-items
time1.add(screen1).add(screen2);


let scene2 = new ScrollMagic.Scene({
  triggerElement: "#animation-image",
  duration: 4500,
  triggerHook: 0,
})

.on("progress", function (event) {
  time1.seek(time1.duration * event.progress);
})

.setPin('#animation-image')
.addTo(scrollController);




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
  duration: 4000,
  triggerHook: 0,
})

.on("progress", function (event) {
  time1.seek(time1.duration * event.progress);
})

.setPin('#animation-image')
.addTo(scrollController);

/////////////////////////////////////////////////////////////////////
// let time12 = anime.timeline({autoplay: false});

// // Add animations
// let screen12 = {
//   targets: '#animation-card .animate-image2',
//   opacity: [0.5,1],
//   translateX: {
//     value: ['-100%', '0%'],
//     duration: 1500,
//   },
//   duration: 1000,
//   delay: 0,
//   easing: 'easeInOutSine'
// };

// // children-items
// time12.add(screen12);

// let scene3 = new ScrollMagic.Scene({
//   triggerElement: "#animation-card",
//   duration: 2000,
//   triggerHook: 0,
// })

// .on("progress", function (event) {
//   time12.seek(time12.duration * event.progress * 3);
// })

// .setPin('#animation-card')
// .addTo(scrollController);





// //------------------
// //TIMELINE 4
// //------------------

// // Add timeline
// let tl4 = anime.timeline({autoplay: false});

// // Add animations
// let s3a2 = {
//   targets: '#three .image',
//   opacity: [0,.5],
//   translateX: {
//     value: ['-100%', '0%'],
//     duration: 1500,
//   },
//   duration: 1000,
//   delay: 0,
//   easing: 'easeInOutSine'
// };

// // Add children
// tl4.add(s3a2);

// //------------------
// //SCENE 3
// //------------------

// //Add third scrollmagic scene
// let scene3 = new ScrollMagic.Scene({
//   triggerElement: "#three",
//   duration: 2000,
//   triggerHook: 0
// })

// // Add debug indicators
// .addIndicators({
//   colorTrigger: "black",
//   colorStart: "blue",
//   colorEnd: "red",
//   indent: 10
// })


// .on("progress", function (event) {
//   tl4.seek((tl4.duration * event.progress) * 3);
// })

// .setPin('#three')
// .addTo(controller);




// //------------------
// //TIMELINE 5
// //------------------

// gsap.fromTo("#cursor",{
//    AoutoAlpha :0,
//    x:-10,
   
// },{
//     AoutoAlpha:0,
//     duration:1,
//     repeat:-1,
//     ease:SteppedEase.config(1),

// })
// gsap.to("#text",{

// })


 let circle= document.getElementById("box");

window.addEventListener("mousemove", function(e){
    gsap.to(circle, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.5,      // Jitna zyada duration, utna smooth/delayed lag hoga (e.g. 0.3 ya 0.6)
    ease: "power2.out"  // Smooth deceleration effect
  });
})


// gsap.to('#item',{
// x:1000,
// y:400,
// dutration :5,
// delay:1,
// backgroundColor:"yellow",
// borderRadius: "50%",
// repeat:-1,
// yoyo:true

gsap.from('#item', {
      y: -50,                   // Screen ke kaafi upar se shuru hoga
      duration: 0.5,              // Complete hone ka time
      delay: 0.1,               // Kitni der baad shuru ho
      backgroundColor: "#38bdf8",// Start color (Animates to pink)
      ease: "bounce.out",       // Realistic bounce effect!
      repeat: -1,               // Infinite loop
      repeatDelay: 0.1, 
      stagger:0.05,        // Har cycle ke baad thoda pause
      yoyo: true                // Wapas upar bhi jaye
    });
    gsap.from('#item1', {
      y: -50,                   // Screen ke kaafi upar se shuru hoga
      duration: 0.5,              // Complete hone ka time
      delay: 0.1,               // Kitni der baad shuru ho
      backgroundColor: "#38bdf8",// Start color (Animates to pink)
      ease: "bounce.out",       // Realistic bounce effect!
      repeat: -1,               // Infinite loop
      repeatDelay: 0.1, 
      stagger:0.05,        // Har cycle ke baad thoda pause
      yoyo: true                // Wapas upar bhi jaye
    });
// })
// gsap.to("#item",{

// })
// gsap.from('#item',{
// x:100,
// y:200,
// dutration :3,
// delay:5,
// backgroundColor:"pink",
// boderRadius: "20%",


// })

// gsap.from("h1",{
//     opacity:0,
//     dutration:2,
//     delay:1,
//     stagger:0.5,

// })


let tl = gsap.timeline();

tl.from("#item3",{
    y:-20,
    opacity:0,
    delay:1,

})
tl.from("li",{
    y:-20,
    opacity:0,

})

tl.from("h1",{
    opacity:0,
    y:-10,
    scale:1,
    
  

})
// gsap.to('#item',{
// x:1000,
// y:400,
// dutration :5,
// delay:1,
// backgroundColor:"yellow",
// borderRadius: "50%",
// repeat:-1,
// yoyo:true


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
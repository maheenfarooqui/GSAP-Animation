let path = "M 10 100 Q 400 100 790 100";
let finalPath = "M 10 100 Q 400 100 790 100";

let string = document.getElementById("string");

string.addEventListener("mousemove", function (e) {
  console.log(e.y);
  path = `M 10 100 Q ${e.x} ${e.y} 790 100`;
  gsap.to("svg path",
    {
      attr: { d: path },
      duration: 0.2,
      ease: "power3.out",
    });
});

string.addEventListener("mouseleave", function(e){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:0.5,
        ease: "elastic.out(1,0.3)",
    })
})
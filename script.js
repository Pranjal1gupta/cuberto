Shery.mouseFollower();
Shery.makeMagnet('.magnet');
Shery.hoverWithMediaCircle(".hvr", {videos:["./media/0.mp4", "./media/2.mp4", "./media/3.mp4"]});

// gsap.to(".fleftelm",{
//     scrollTrigger:{
//         trigger: ".featuredimage",
//         pin:true,
//         start:"top top",
//         end:"bottom bottom",
//         endTrigger:".last",
//         scrub:1
//     },
//     y:"-300%",
//     ease:Power2

// })

gsap.to(".fleftelm", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });

// 

let sections=document.querySelector(".fleftelm")
Shery.imageEffect(".images", {
    style: 3,
    config:{
        OnMouse:{value:1}
    },
    slideStyle: (setScroll) => {
      window.addEventListener("scroll", () => {
        sections.forEach(function(section,index){
            ScrollTrigger.create({
                trigger: section,
                start:"top top",
                scrub:1,
                onUpdate:function(prog){
                    setScroll(prog.progress+index);
                }
            })
        })
      });
    },
  });


  function test(){
    console.log("hello")
    return "hello";
  }

  const res=test();
  console.log(res);
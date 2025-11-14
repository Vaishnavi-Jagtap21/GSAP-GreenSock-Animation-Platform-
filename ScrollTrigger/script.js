gsap.from("#page1 .box",{
    scale:0,
    delay:0,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page1 .box",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 20%",
        // scrub:true
        scrub:1,
        pin:true
    }
})
gsap.from("#page2 .box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        markers:true,
        start:"top 40%",
        end:"top 40%",
        // scrub:true
        scrub:1,
        pin:true
    }
})
gsap.from("#page3 .box",{
    scale:0,
    delay:1,
    duration:1,
    rotate:720,
   
    // scrollTrigger:"#page3 #box"
    scrollTrigger:{
        trigger:"#page3 .box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 10%",
        // scrub:true
        scrub:1,
        pin:true
    }

})
gsap.from("#page3 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
})

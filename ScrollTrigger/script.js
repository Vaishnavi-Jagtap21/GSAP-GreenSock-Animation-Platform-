// 🔵 ANIMATION 1 — PAGE 1 BOX
gsap.from("#page1 .box", {
    scale: 0,          // start very small
    delay: 0,          // no delay
    duration: 2,       // animation lasts 2 seconds
    rotate: 360,       // rotate one full circle

    scrollTrigger: {
        trigger: "#page1 .box",  // element that activates the animation
        scroller: "body",        // page scroll
        markers: true,           // show debugging markers on screen
        start: "top 50%",        // animation begins when top of box reaches 50% of viewport
        end: "top 20%",          // animation ends when top reaches 20% of viewport
        scrub: 1,                // animation syncs with scroll (smooth scrub)
        pin: true                // freezes (pins) the section while animating
    }
});


// 🔵 ANIMATION 2 — PAGE 2 BOX
gsap.from("#page2 .box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,

    scrollTrigger: {
        trigger: "#page2 .box",
        scroller: "body",
        markers: true,
        start: "top 40%",   // animation starts a bit earlier
        end: "top 40%",     // both start and end at same point = small scroll window
        scrub: 1,           // scroll-based smooth control
        pin: true           // freeze this box during the scroll
    }
});


// 🔵 ANIMATION 3 — PAGE 3 BOX
gsap.from("#page3 .box", {
    scale: 0,
    delay: 1,
    duration: 1,
    rotate: 720,             // faster rotation (2 full spins)

    scrollTrigger: {
        trigger: "#page3 .box",
        scroller: "body",
        markers: true,
        start: "top 60%",    // animation starts when 60% into viewport
        end: "top 10%",      // ends at 10%
        scrub: 1,
        pin: true            // pins #page3 section
    }
});


// 🔵 ANIMATION 4 — PAGE 3 TEXT (h2)
gsap.from("#page3 h2", {
    opacity: 0,              // initially invisible
    duration: 2,
    x: -500,                 // slide in from the left

    scrollTrigger: {
        trigger: "#page3",   // entire page 3 triggers this
        scroller: "body",
        markers: true,
        start: "top 60%"     // starts when page 3 reaches 60% of viewport
    }
});

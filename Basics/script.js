// 🔵 ANIMATION 1 — Animate #box1 with many properties
gsap.to("#box1", {
   x: 1000,               // move horizontally to the right by 1000px
   duration: 2,           // animation lasts 2 seconds
   delay: 1,              // start after 1 second
   rotate: 360,           // rotate 1 full circle
   backgroundColor: "blue", // change background color to blue
   borderRadius: "50%",   // turn the box into a circle
   scale: 0.5,            // shrink to 50% size
   repeat: 1,             // play animation twice (repeat 1 time)
   // repeat: -1 will loop forever
   yoyo: true             // animation goes forward → backward → forward
});


// 🔵 ANIMATION 2 — #box2 enters from the right
gsap.from("#box2", {
   x: 1000,               // start off-screen to the right
   duration: 1,           // 1 second animation
   delay: 1,              // start after 1 second
   rotate: 180            // rotate half circle while appearing
});


// 🔵 ANIMATION 3 — Move #box to the right
gsap.to("#box", {
    x: 1000,
    duration: 1
});


// 🔵 ANIMATION 4 — Animate h1 elements one by one (stagger)
gsap.from("h1", {
    color: "red",         // start with red color
    duration: 2,
    delay: 1,
    opacity: 0,           // invisible at start
    y: 10,                // slightly down → moves up into place
    stagger: 0.3          // animate each h1 with a 0.3s delay (one after another)
});


// ❗ This is duplicate animation on #box — it runs again
gsap.to("#box", {
    x: 1000,
    duration: 1
});


// ─────────────────────────────────────────────
// 🟣 TIMELINE ANIMATION — Animation sequence
// ─────────────────────────────────────────────

// Create a GSAP timeline (animations play in order)
var t1 = gsap.timeline();

// Step 1 → animate #box
t1.to("#box", {
   x: 1500,               // move further right
   rotate: 360,           // rotate full circle
   duration: 1.5,
   delay: 1               // delay only affects first animation
});

// Step 2 → animate #box1 after #box animation finishes
t1.to("#box1", {
    x: 1500,
    duration: 1.5
});

// Step 3 → animate #box2 after #box1 finishes
t1.to("#box2", {
    x: 1500,
    duration: 2,
    rotate: 180
});

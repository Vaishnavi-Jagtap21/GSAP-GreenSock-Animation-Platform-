// Create a new GSAP timeline.
// This allows all animations to play one after another in sequence.
var tl = gsap.timeline();

// ---------------------------------------------------------
// 1) Animate the <h2> (logo or navbar title)
// ---------------------------------------------------------
tl.from("h2", {
    y: -20,        // Start 20px above its original position
    opacity: 0,    // Start completely hidden
    duration: 1,   // Animation duration is 1 second
    delay: 0.5     // Wait 0.5 seconds before starting the first animation
});

// ---------------------------------------------------------
// 2) Animate all <h4> elements (navigation menu items)
// ---------------------------------------------------------
tl.from("h4", {
    y: -20,        // Move in from 20px above
    opacity: 0,    // Start invisible
    duration: 1,   // Each animation lasts 1 second
    stagger: 0.3   // Animate each <h4> one after another (0.3 sec gap)
});

// ---------------------------------------------------------
// 3) Animate the main <h1> heading
// ---------------------------------------------------------
tl.from("h1", {
    y: 20,         // Start 20px below its original position
    opacity: 0,    // Start invisible
    duration: 2,   // Animation lasts 2 seconds
    scale: 0.2     // Start very small (20% size) and scale up to full size
});

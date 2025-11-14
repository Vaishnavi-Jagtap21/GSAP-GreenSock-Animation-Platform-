// Initial SVG path (a straight line with a centered control point)
var path = "M 10 100 Q 550 100 990 100";

// Final / reset path (same as initial)
var finalpath = "M 10 100 Q 550 100 990 100";

// Select the #string container where the SVG is located
var string = document.querySelector("#string");

// Add a mouseenter event (fires once when mouse enters the #string area)
string.addEventListener("mouseenter", function (dets) {

    // Update the path by changing the control point's Y-position 
    // dets.clientY = mouse Y position in the viewport
    path = `M 10 100 Q 550 ${dets.clientY} 990 100`;

    // Animate the SVG path using GSAP
    gsap.to("svg path", {
        attr: { d: path },   // Apply the new path shape
        duration: 1,         // Animation speed (1 second)
        ease: "power5.out"   // Smooth easing animation
    });
});

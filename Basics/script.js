gsap.to("#box1",{
   x:1000,
   duration:2,
   delay:1,
   rotate:360,
   backgroundColor:"blue",
   borderRadius:"50%",
   scale:0.5,
   repeat:1,   //Repeat:-1 gives loop in infinite
   yoyo:true   
})
gsap.from("#box2",{
  x:1000,
   duration:1,
   delay:1,
   rotate:180
})
gsap.to("#box",{
    x:1000,
    duration:1,
    
})
gsap.from("h1",{
    color:"red",
    duration:2,
    delay:1,
    opacity:0,
    y:10,
    stagger:0.3
})
gsap.to("#box",{
    x:1000,
    duration:1,

})

var t1=gsap.timeline()
t1.to("#box",{
   x:1500,
   rotate:360,
   duration:1.5,
   delay:1
})
t1.to("#box1",{
    x:1500,
    duration:1.5
})
t1.to("#box2",{
    x:1500,
    duration:2,
     rotate:180
})
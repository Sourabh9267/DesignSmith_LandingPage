var tl=gsap.timeline();


tl.fromTo("#navpart1",{
    y:-100,
    opacity:0,

},
{
    y:0,
    opacity:1,
    stagger:0.3,
    duration:0.5
})

tl.fromTo("#navpart2 h3",{
    y:-100,
    opacity:0,
},
{   y:0,
    opacity:1,
    stagger:0.5,
    duration:0.5
})

tl.fromTo("#overlay",{
    x:-1000,
    opacity:0

},{
    x:0,
    duration:0.5,
    opacity:1
})

tl.fromTo("#modelimg",{
    x:-1000,
    opacity:-3,
    stagger:5
},{
    x:"20%",
    opacity:1,
    duration:0.5,
    stagger:5
})

tl.fromTo("#contentpart2 > *",{
    x:1000,
    
   
},{
    x:0,
    duration:1,
    stagger:0.5
})

tl.fromTo("#colorbox",{
    x:2000,
    opacity:-3
},{
    x:0,
    opacity:1,
    duration:1
})


let tl = gsap.timeline();

tl.to(".main",{
    display: "none",
    opacity: 0,
})

tl.from(".loader img",{
    y:350,
    delay:0.6,
    duration:1,
    ease: Power4,
})
tl.to(".loader-img", {
    x:-650,
    scale: 40,
    delay:1,
    // duration:1.7
})
tl.to(".loader",{
    display: "none",
    opacity:0,
    ease: Power4,
    duration: 0.9
})
tl.from(".main",{
    display: "block",
    opacity: 1,
    ease: Power4,
    duration: 1,
})

let tl2 = gsap.timeline({
    repeat: -1,
})

tl2.to(".img-cont", {
    width:"100%",
    ease: Expo.easeInOut,
    duration:3,
    stagger:3,
},"a")

tl2.to(".hero-text .text",{
    ease: Expo.easeInOut,
    duration:3.5,
    stagger: 3,
    top: 0
},"a")

tl2.to(".hero-text .text",{
    delay:4,
    ease: Expo.easeInOut,
    duration:1,
    stagger: 3,
    top: "-100%",
},"a")

let icon1 = document.querySelector(".phone");
let icon2 = document.querySelector(".telegram");
let icon3 = document.querySelector(".address");
let iconTxt = document.querySelector(".icon-txt");

icon1.addEventListener("click", function(){
    iconTxt.innerHTML = "+91-98250 06139 | 97129 06139"
    
    
})
icon2.addEventListener("click", function(){
    iconTxt.innerHTML = "dsp_bmc    @yahoo.co.in"
})
icon3.addEventListener("click", function(){
    iconTxt.innerHTML = "283/D, Nr. post   Office, GIDC-1, Mehsana, Gujarat, India"
})


icon1.addEventListener("mouseleave", function(){
    iconTxt.innerHTML = "" 
})
icon2.addEventListener("mouseleave", function(){
    iconTxt.innerHTML = "" 
})
icon3.addEventListener("mouseleave", function(){
    iconTxt.innerHTML = "" 
})
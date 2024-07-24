const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(details){
        // console.log(details.clientX,details.clientY)
        document.querySelector('#minicircle').style.transform=`translate(${details.clientX}px,${details.clientY}px) scale(${xscale},${yscale})`
        
    })
}
circleMouseFollower();
// Get the current hour and minute
var d = new Date().getHours();
var m = new Date().getMinutes();

// Format the hour and minute to be always two digits
if (d < 10) {
    d = "0" + d;
}
if (m < 10) {
    m = "0" + m;
}

// Determine AM or PM
var t = (d < 12) ? "AM" : "PM";

// Convert hour to 12-hour format
if (d > 12) {
    d = d - 12;
} else if (d == 0) {
    d = 12;
}

// Display the time
document.querySelector('#time').innerHTML = d + ":" + m +" "+ t;

function circleSqueezer(){
    var xscale=1
    var yscale=1
    var xprev=0;
    var yprev=0;
    window.addEventListener('mousemove',function(dets){
        xprev=dets.clientX
        yprev=dets.clientY

        // console.log(xscale=gsap.utils.clamp(0.8,1.2,dets.clientX-xprev))
        // console.log(yscale=gsap.utils.clamp(.8,1.2,dets.clientY-yprev))

        circleMouseFollower(xscale,yscale)
    })
}
circleSqueezer()
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
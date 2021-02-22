let tl = new TimelineMax();
let controller = new ScrollMagic.Controller();

// tl.to(".header", 2, { left: "30%" });

let scene = new ScrollMagic.Scene({
    triggerElement: ".stage",
})
    .setTween(tl)
    .addTo(controller);

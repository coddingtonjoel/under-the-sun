let tl = new TimelineMax();
let controller = new ScrollMagic.Controller();

// header shift left
tl.to(".header", 1.5, { right: "13%", top: "100%" });

// line rotate middle
tl.to(".line", 1, {
    transform: "rotate(90deg) translate(0)",
    width: "100px",
    top: "92%",
    left: "48%",
});

// header-alts in
tl.to(".header-alt-1", 1, {
    opacity: 0.3,
})
    .to(".header-alt-1", 1, {
        delay: 1,
        opacity: 0,
    })
    .to(".header-alt-2", 1, {
        opacity: 0.3,
    })
    .to(".header-alt-2", 1, {
        delay: 1,
        opacity: 0,
    })
    .to(".header-alt-3", 1, {
        opacity: 0.3,
    })
    .to(".header-alt-3", 1, {
        delay: 1,
        opacity: 0,
    })
    .to(".header-alt-4", 1, {
        opacity: 0.3,
    })
    .to(".header-alt-4", 1, {
        delay: 1,
        opacity: 0,
    });

// header fades out
tl.to(".header", 1, { opacity: 0 });

// line shifts to left
tl.to(".line", 2, {
    delay: 2,
    width: 60,
    left: "15%",
});

// line blinks
tl.to(".line", 1, {
    delay: 0.5,
    opacity: 0,
})
    .to(".line", 1, {
        delay: 0.5,
        opacity: 0.2,
    })
    .to(".line", 1, {
        delay: 0.5,
        opacity: 0,
    })
    .to(".line", 1, {
        delay: 0.5,
        opacity: 0.2,
    })
    .to(".line", 1, {
        delay: 0.5,
        opacity: 0,
    })
    .to(".line", 1, {
        delay: 0.5,
        opacity: 0.2,
    });

// quote silently moves to center
tl.to(".quote-container", 0, {
    top: "108%",
    left: "53%",
    transform: "translate(-50%, -50%)",
});

// line shifts as if typing
// tl.to(".line", 4);
tl.to(".quote-container", 1, { opacity: 1 });

let scene = new ScrollMagic.Scene({
    duration: 4000,
    triggerHook: 0.5,
    triggerElement: ".scene",
})
    .setPin(".header-container")
    .setTween(tl)
    .addTo(controller);

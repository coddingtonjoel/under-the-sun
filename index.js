let tl = new TimelineMax();
let controller = new ScrollMagic.Controller();

//----------------
// SCENE 1
//
// INTRODUCTION
//----------------

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
    top: "80%",
    left: "18%",
    transform: "translate(-50%, -50%)",
});

// hide author
tl.to(".author", 0, { opacity: 0 });

// hide lines 2-4 of quote
tl.to(".quote-two", 0, { opacity: 0 });
tl.to(".quote-three", 0, { opacity: 0 });
tl.to(".quote-four", 0, { opacity: 0 });

tl.to(".quote-container", 1, { opacity: 1 });

// move line to starting place of text
tl.to(".line", { x: "20px" });
const quote = CSSRulePlugin.getRule(".quote-one::after");

// shift ::after of line 1
tl.to(quote, 5, {
    transform: "translateX(565px)",
});
tl.to(
    ".line",
    5,
    {
        x: "590px",
    },
    "-=5"
);

// shift ::after of line 2
tl.to(quote, 0, { transform: "translateX(0) translateY(85px)" });
tl.to(".line", 0, {
    x: "20px",
    y: "85px",
});
tl.to(".quote-two", 0, { opacity: 1 });

tl.to(quote, 5, {
    transform: "translateX(825px) translateY(85px)",
});
tl.to(
    ".line",
    5,
    {
        x: "850px",
        y: "85px",
    },
    "-=5"
);

// shift ::after of line 3
tl.to(quote, 0, { transform: "translateX(0) translateY(175px)" });
tl.to(".line", 0, {
    x: "20px",
    y: "175px",
});
tl.to(".quote-three", 0, { opacity: 1 });

tl.to(quote, 5, {
    transform: "translateX(1025px) translateY(175px)",
});
tl.to(
    ".line",
    5,
    {
        x: "1050px",
        y: "175px",
    },
    "-=5"
);

// shift ::after of line 4
tl.to(quote, 0, { transform: "translateX(0) translateY(260px)" });
tl.to(".line", 0, {
    x: "20px",
    y: "260px",
});
tl.to(".quote-four", 0, { opacity: 1 });

tl.to(quote, 5, {
    transform: "translateX(565px) translateY(260px)",
});
tl.to(
    ".line",
    5,
    {
        x: "590px",
        y: "260px",
    },
    "-=5"
);

// show author
tl.to(".author", 2, { opacity: 1 });

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
    })
    .to(".line", 1, {
        opacity: 0,
    })
    .to(quote, 0, { opacity: 0 });

let scene = new ScrollMagic.Scene({
    duration: 8000,
    triggerHook: 0.5,
    triggerElement: ".scene",
})
    .setPin(".header-container")
    .setTween(tl)
    .addTo(controller);

//----------------
// SCENE 2
//
// MIND VS BODY
//----------------

let tl2 = new TimelineMax();

let scene2 = new ScrollMagic.Scene({
    duration: 8000,
    triggerHook: 0.5,
    triggerElement: ".mind-body-container",
})
    .setPin(".mind-body-container")
    .setTween(tl2)
    .addTo(controller);

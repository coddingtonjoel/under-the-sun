let tl = new TimelineMax();
let controller = new ScrollMagic.Controller();

//----------------
// SCENE 1
//
// INTRODUCTION
//----------------

// hide "scroll to begin"
tl.to(".header-sub", 2, { opacity: 0 });

// header shift left
tl.to(".header", 2, { right: "13%", top: "100%" });

// line rotate middle
tl.to(".line", 3, {
    transform: "rotate(90deg) translate(0)",
    width: "100px",
    top: "92%",
    left: "48%",
});

// header-alts in
tl.to(".header-alt-1", 2, {
    opacity: 0.3,
})
    .to(".header-alt-1", 2, {
        delay: 1,
        opacity: 0,
    })
    .to(".header-alt-2", 2, {
        opacity: 0.3,
    })
    .to(".header-alt-2", 2, {
        delay: 1,
        opacity: 0,
    })
    .to(".header-alt-3", 2, {
        opacity: 0.3,
    })
    .to(".header-alt-3", 2, {
        delay: 1,
        opacity: 0,
    })
    .to(".header-alt-4", 2, {
        opacity: 0.3,
    })
    .to(".header-alt-4", 2, {
        delay: 1,
        opacity: 0,
    });

// header fades out
tl.to(".header", 3, { opacity: 0 });

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
    duration: 10000,
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

// squares stagger in
tl2.staggerFrom(
    [
        ".squares-one",
        ".squares-two",
        ".squares-three",
        ".squares-four",
        ".squares-five",
        ".squares-six",
        ".squares-seven",
        ".squares-eight",
        ".squares-nine",
    ],
    5,
    { transform: "scale(0)", opacity: 0, ease: "power4.out" },
    0.2
);

// squares on bottom disappear
tl2.to(".squares-bottom", 2, { opacity: 0, delay: 1 });

// rest of squares fade away above
tl2.to(".squares", 3, { opacity: 0, y: "-700px", ease: "power2.out" }, "-=1");

// reposition words "mind" and "body"
tl2.to(".mind", 2, { x: -100, ease: "power4.out" });
tl2.to(".body", 2, { x: 100, ease: "power4.out" }, "-=2");
tl2.to(".mind", 2, { y: 50, ease: "power4.out" });
tl2.to(".body", 2, { y: -47, ease: "power4.out" }, "-=2");

// move header up, 6 seconds ago
tl2.to(".stage-two-header", 3, { y: -350, ease: "power4.out" }, "-=6");

// draw line one
tl2.to(".mind-body-chart-lineone", 0, {
    opacity: 1,
});

tl2.to(".mind-body-chart-lineone", 3, {
    strokeDashoffset: "0",
    ease: "power1.out",
});

// draw circle one
tl2.to(".mind-body-chart-circleone", 0, {
    opacity: 1,
});

tl2.to(".mind-body-chart-circleone", 3, {
    strokeDashoffset: "0",
    ease: "power1.out",
});

// fade in descartes idea
tl2.to(".mind-body-descartes", 3, {
    opacity: 1,
});

// draw line two
tl2.to(".mind-body-chart-linetwo", 0, {
    opacity: 1,
});

tl2.to(".mind-body-chart-linetwo", 3, {
    strokeDashoffset: "0",
    ease: "power1.out",
});

// draw circle two
tl2.to(".mind-body-chart-circletwo", 0, {
    opacity: 1,
});

tl2.to(".mind-body-chart-circletwo", 3, {
    strokeDashoffset: "0",
    ease: "power1.out",
});

// fade in bacon idea
tl2.to(".mind-body-bacon", 3, {
    opacity: 1,
});

// draw line three
tl2.to(".mind-body-chart-linethree", 0, {
    opacity: 1,
});

tl2.to(".mind-body-chart-linethree", 3, {
    strokeDashoffset: "0",
    ease: "power1.out",
});

// draw circle three
tl2.to(".mind-body-chart-circlethree", 0, {
    opacity: 1,
});

tl2.to(".mind-body-chart-circlethree", 3, {
    strokeDashoffset: "0",
    ease: "power1.out",
});

// fade in pascal idea
tl2.to(".mind-body-pascal", 3, {
    opacity: 1,
});

// draw line three
tl2.to(".mind-body-chart-linefour", 0, {
    opacity: 1,
});

tl2.to(".mind-body-chart-linefour", 3, {
    strokeDashoffset: "0",
    ease: "power1.out",
});

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerHook: 0.5,
    triggerElement: ".mind-body-container",
})
    .setPin(".mind-body-container")
    .setTween(tl2)
    .addTo(controller);

const shape = document.querySelector(".mind-body-chart-linefour");
console.log(shape.getTotalLength());

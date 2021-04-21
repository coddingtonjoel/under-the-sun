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
    10,
    { transform: "scale(0)", opacity: 0, ease: "power4.out" },
    0.2
);

// squares on bottom disappear
tl2.to(".squares-bottom", 3, { opacity: 0, delay: 1 });

// rest of squares fade away above
tl2.to(".squares", 6, { opacity: 0, y: "-700px", ease: "power2.out" }, "-=3");

// reposition words "mind" and "body"
tl2.to(".mind", 4, { x: -100, ease: "power4.out" });
tl2.to(".body", 4, { x: 100, ease: "power4.out" }, "-=4");
tl2.to(".mind", 4, { y: 50, ease: "power4.out" });
tl2.to(".body", 4, { y: -57, ease: "power4.out" }, "-=4");

// move header up, 6 seconds ago
tl2.to(".stage-two-header", 6, { y: -350, ease: "power4.out" }, "-=12");

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

// fade in mind body conclusion
tl2.to(".mind-body-concl", 3, {
    opacity: 1,
});

// hide all other content besides conclusion
tl2.staggerTo(
    [
        ".stage-two-header",
        ".mind-body-chart-lineone",
        ".mind-body-chart-circleone",
        ".mind-body-descartes",
        ".mind-body-chart-linetwo",
        ".mind-body-chart-circletwo",
        ".mind-body-bacon",
        ".mind-body-chart-linethree",
        ".mind-body-chart-circlethree",
        ".mind-body-pascal",
        ".mind-body-chart-linefour",
    ],
    3,
    {
        opacity: 0,
    },
    0.5
);

// move up concl
tl2.to(".mind-body-concl", 7, {
    y: -100,
});

// show concl sub
tl2.to(".mind-body-concl-two", 3, {
    opacity: 1,
    delay: 4,
});

let scene2 = new ScrollMagic.Scene({
    duration: 5000,
    triggerHook: 0.5,
    triggerElement: ".mind-body-container",
})
    .setPin(".mind-body-container")
    .setTween(tl2)
    .addTo(controller);

//----------------
// SCENE 3
//
// WHAT IS WISDOM?
//----------------

let tl3 = new TimelineMax();

// animate header underline
tl3.to(".wisdom-line", 4, { strokeDashoffset: 0 });

// bring up job verse
tl3.to(".wisdom-job", 2, { opacity: 1, y: 40 });

// move header up
tl3.to(".stage-three-header", 3, { y: -345, delay: 4 });

// draw chart
tl3.to(".wisdom-chart", 0, { opacity: 1 });
tl3.to(".wisdom-circleone", 3, { strokeDashoffset: 0 });
tl3.to(".wisdom-lineone", 3, { strokeDashoffset: 0 });
tl3.to(".wisdom-circletwo", 3, { strokeDashoffset: 0 });

// bring up proverbs verse
tl3.to(".wisdom-proverbs", 2, { opacity: 1, y: 180 });

// clear everything and bring definition to center
tl3.to(".wisdom-line", 3, { opacity: 0, delay: 15 });
tl3.to(".wisdom-job", 3, { opacity: 0 }, "-=3");
tl3.to(".stage-three-header", 3, { opacity: 0 }, "-=6");
tl3.to(".wisdom-chart", 3, { opacity: 0 }, "-=6");
tl3.to(".wisdom-proverbs", 3, { opacity: 0 }, "-=6");

// bring up wisdom definition
tl3.fromTo(
    ".wisdom-definition",
    6,
    { opacity: 0, y: 90 },
    { opacity: 1, y: -20 }
);

// delay timeline from progressing briefly
tl3.to(".wisdom.line", 20, { y: 1 });

let scene3 = new ScrollMagic.Scene({
    duration: 3000,
    triggerHook: 0.5,
    triggerElement: ".wisdom-container",
})
    .setPin(".wisdom-container")
    .setTween(tl3)
    .addTo(controller);

let tl4 = new TimelineMax();

// move up header
tl4.to(".stage-four-header", 7, { y: -250, delay: 7, ease: "power1.out" });

// bring up desc #1
tl4.fromTo(
    ".app-desc1",
    5,
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, delay: 5 }
);

// bring up books #1
tl4.staggerTo([".app-b1", ".app-b2", ".app-b3"], 5, {
    y: -30,
    opacity: 1,
    stagger: 0.5,
    ease: "power1.out",
});

// bring down desc #1
tl4.to(".app-desc1", 5, {
    opacity: 0,
    delay: 10,
});

// bring down books #1
tl4.to(
    [".app-b1", ".app-b2", ".app-b3"],
    5,
    {
        opacity: 0,
        stagger: 1.5,
        ease: "power1.out",
    },
    "-=5"
);

// bring up desc #2
tl4.fromTo(
    ".app-desc2",
    5,
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, delay: 3 }
);

// bring up books #2
tl4.to(".app-b4", 5, {
    y: -60,
    opacity: 1,
    ease: "power1.out",
});

// bring down desc #2
tl4.to(".app-desc2", 5, { opacity: 0, delay: 10 });

// bring down books #2
tl4.to(
    ".app-b4",
    5,
    {
        opacity: 0,
        ease: "power1.out",
    },
    "-=5"
);

// bring up desc #3
tl4.fromTo(
    ".app-desc3",
    5,
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, delay: 3 }
);

// bring up books #3
tl4.to(".app-b5", 5, {
    y: -60,
    opacity: 1,
    ease: "power1.out",
});

// bring down desc #3
tl4.to(".app-desc3", 5, { opacity: 0, delay: 10 });

// bring down books #3
tl4.to(
    ".app-b5",
    5,
    {
        opacity: 0,
        ease: "power1.out",
    },
    "-=5"
);

// bring up desc #4
tl4.fromTo(
    ".app-desc4",
    5,
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, delay: 3 }
);

// bring up books #4
tl4.to(".app-b6", 5, {
    y: -60,
    opacity: 1,
    ease: "power1.out",
});

// bring down desc #4
tl4.to(".app-desc4", 10, { opacity: 0, delay: 10 });

// bring down books #4
tl4.to(
    ".app-b6",
    10,
    {
        opacity: 0,
    },
    "-=10"
);

tl4.to(".stage-four-header", 10, { opacity: 0 }, "-=10");

tl4.fromTo(
    ".app-final",
    20,
    { opacity: 0, y: -100 },
    { opacity: 1, y: -185, delay: 5, ease: "power1.out" }
);

tl4.to(".app-final-sub", 10, { opacity: 1 });

let scene4 = new ScrollMagic.Scene({
    duration: 5000,
    triggerHook: 0.5,
    triggerElement: ".app-container",
})
    .setPin(".app-container")
    .setTween(tl4)
    .addTo(controller);

// const shape = document.querySelector(".wisdom-lineone");
// console.log(shape.getTotalLength());

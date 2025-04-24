document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, delay: 1 });

    tl.to(".screen", { y: -50, opacity: 1, duration: 0.5 });
    tl.to(".battery", { y: -100, opacity: 1, duration: 0.5 }, "-=0.3");
    tl.to(".motherboard", { y: -150, opacity: 1, duration: 0.5 }, "-=0.3");
    tl.to(".camera", { y: -200, opacity: 1, duration: 0.5 }, "-=0.3");
    tl.to(".back-cover", { y: -250, opacity: 1, duration: 0.5 }, "-=0.3");

    tl.to(".screen", { y: 0, duration: 0.5 });
    tl.to(".battery", { y: 0, duration: 0.5 }, "-=0.3");
    tl.to(".motherboard", { y: 0, duration: 0.5 }, "-=0.3");
    tl.to(".camera", { y: 0, duration: 0.5 }, "-=0.3");
    tl.to(".back-cover", { y: 0, duration: 0.5 }, "-=0.3");
});

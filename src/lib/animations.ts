import gsap from "gsap";

export const EASE = {
    smooth: 'power2.inOut',
    enter: 'power3.out',
    exit: 'power3.in',
    elastic: 'elastic.out(1, 0.5)',
};

export const DURATION = {
    fast: 0.3,
    base: 0.6,
    slow: 1.0,
    intro: 1.4,
};

export const STAGGER = {
    tight: 0.08,
    base: 0.15,
    loose: 0.25,
};

export function createRevealAnimation(targets: string, delay = 0) {
    return gsap.from(targets, {
        y: 50,
        opacity: 0,
        duration: DURATION.base,
        ease: EASE.enter,
        stagger: STAGGER.base,
        delay,
    });
}

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Modify to return the GSAP animation object
export const animateParagraph = (paragraphRef: HTMLParagraphElement) => {
  const words = paragraphRef.querySelectorAll("span");
  return gsap.fromTo(
    words,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1, // Delay between each word animation
      ease: "power2.out",
      duration: 0.6,
      delay: 1,
    }
  );
};

// Modify to return the GSAP animation object
export const animateSection = (sectionRef: HTMLDivElement) => {
  return gsap.fromTo(
    sectionRef,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1, // Delay between each word animation
      ease: "power2.out",
      duration: 2,
    }
  );
};

export const animateHeading = (
  headingRef: HTMLHeadingElement | HTMLDivElement | null,
  sectionRef: HTMLDivElement | null
) => {
  return gsap.fromTo(
    headingRef,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef,
        start: "top 60%",
        end: "top 30%",
      },
    }
  );
};

// left to right

export const animateLeftToRight = (sectionRef: HTMLDivElement | null) => {
  return gsap.fromTo(
    sectionRef,
    {
      opacity: 0,
      x: -100,
    },
    {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef,
        start: "top 60%",
        end: "top 30%",
      },
    }
  );
};

// right to left

export const animateRightToLeft = (sectionRef: HTMLDivElement | null) => {
  return gsap.fromTo(
    sectionRef,
    {
      opacity: 0,
      x: 100,
    },
    {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef,
        start: "top 60%",
        end: "top 30%",
      },
    }
  );
};

// animate number range

export const animateNumberRange = (
  start: number,
  end: number,
  triggerRef: HTMLDivElement
) => {
  return gsap.fromTo(
    triggerRef,
    {
      innerHTML: start,
    },
    {
      innerHTML: end,
      ease: "power2.out",
      scrollTrigger: {
        trigger: triggerRef,
        start: "top 60%",
        end: "top 30%",
      },
    }
  );
};

// Create timeline and add animations
export const createTimeline = (
  paragraphRef: HTMLParagraphElement,
  sectionRef: HTMLDivElement
) => {
  const tl = gsap.timeline();

  // Add animations to the timeline
  tl.add(animateSection(sectionRef));
  tl.add(animateParagraph(paragraphRef));

  return tl;
};

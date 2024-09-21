import { useEffect, useRef } from "react";
import Typed from "typed.js";
import SocialsIcon from "../components/SocialsIconBar";
import CopyElement from "../components/CopyElement";
import { homeBannerText } from "../constants";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: [
        "Portfolio website.",
        "E commerce website.",
        "E commerce store.",
      ],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const sectionRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (paragraphRef.current) {
      const words = paragraphRef.current.querySelectorAll("span");
      gsap.fromTo(
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
    }
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1, // Delay between each word animation
          ease: "power2.out",
          duration: 2,
        }
      );
    }
  }, []);

  return (
    <section className="particles h-max w-full " ref={sectionRef}>
      <div className="content-placement flex justify-center flex-col items-center gap-10 py-10">
        <h1 className="text-center ">
          <strong className="text-center text-text-color-1 heading-fontsize ">
            Want to have your own website ?
          </strong>
        </h1>
        <div>
          <span className="auto-type mx-auto  font-semibold text-center text-text-color-2 heading-fontsize"></span>
        </div>
        <p className="text-center  text-text-color-3" ref={paragraphRef}>
          {homeBannerText.split(" ").map((word, index) => (
            <span key={index} style={{ display: "inline-block", opacity: 0 }}>
              {word}&nbsp;
            </span>
          ))}
        </p>
        <div className="flex sm:gap-8 gap-2 flex-wrap items-center justify-center">
          <div className="flex gap-4 ">
            <img src="/assets/mail.svg" alt="mail:" />
            <CopyElement text="msxdev01@gmail.com">
              <a href="mailto:msxdev01@gmail.com">msxdev01@gmail.com</a>
            </CopyElement>
          </div>

          <div className="flex gap-2">
            <img src="/assets/call.svg" alt="mail:" />
            <CopyElement text="+91 7007022949">
              <a href="tel:+91 7007022949">+91 7007022949</a>
            </CopyElement>
          </div>
        </div>
        <SocialsIcon />
      </div>
    </section>
  );
};

export default Hero;

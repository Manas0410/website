import { useEffect } from "react";
import Typed from "typed.js";
import SocialsIcon from "../components/SocialsIconBar";
import CopyElement from "../components/CopyElement";

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

  return (
    <section className="particles h-max w-full ">
      <div className="content-placement flex justify-center flex-col items-center gap-10 py-10">
        <h1 className="text-center ">
          <strong className="text-center text-text-color-1 heading-fontsize ">
            Want to have your own website ?
          </strong>
        </h1>
        <div>
          <span className="auto-type mx-auto  font-semibold text-center text-text-color-2 heading-fontsize"></span>
        </div>
        <p className="text-center  text-text-color-3">
          We offer comprehensive services, from crafting custom websites using
          all the modern technologies to building e-commerce platforms, web
          applications, and responsive designs. They manage front-end and
          back-end development, provide maintenance, support, and integrate SEO
          to ensure optimal performance and visibility online.
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

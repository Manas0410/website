import { useEffect } from "react";
import Typed from "typed.js";

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
    <section className="particles h-[80vh] w-full ">
      <div className="content-placement flex justify-center flex-col items-center">
        <h1 className="text-center my-10">
          <strong className="text-center text-text-color-1 sm:text-4xl lg:text-6xl text-2xl ">
            Want to have your own website ?
          </strong>
        </h1>
        <div>
          <span className="auto-type mx-auto  my-10 font-semibold text-center text-text-color-2 sm:text-4xl lg:text-6xl text-2xl"></span>
        </div>
        <p className="text-center my-10">
          We offer comprehensive services, from crafting custom websites using
          all the modern technologies to building e-commerce platforms, web
          applications, and responsive designs. They manage front-end and
          back-end development, provide maintenance, support, and integrate SEO
          to ensure optimal performance and visibility online.
        </p>
      </div>
    </section>
  );
};

export default Hero;

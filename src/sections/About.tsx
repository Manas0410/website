import { useEffect, useRef } from "react";
import LanguageCarrousel from "../components/LanguageCarrousel";
import { animateHeading } from "../Animations/gsapAnimations";

const About = () => {
  const headingRef1 = useRef<null | HTMLHeadingElement>(null);
  const headingRef2 = useRef<null | HTMLHeadingElement>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    animateHeading(headingRef1.current, sectionRef.current);
    animateHeading(headingRef2.current, sectionRef.current);
  }, []);

  return (
    <section className=" mt-24 " ref={sectionRef}>
      <div className="content-placement">
        <h3
          className="text-center text-text-color-4 heading-fontsize mb-10"
          ref={headingRef1}
        >
          About <span className="text-text-color-2">Us</span>
        </h3>
        <h4 className="text-center text-text-color-3 mb-20" ref={headingRef2}>
          At MSxDev, we are dedicated to delivering top-notch web development
          services that cater to every digital need. Whether you're looking to
          build a robust e-commerce platform, a responsive business website, or
          an engaging portfolio, our team of experienced developers has you
          covered. We specialize in modern web development techniques, ensuring
          that your site not only looks great but also performs flawlessly
          across all devices. From front-end user experiences to back-end
          functionality, we provide end-to-end solutions that bring your vision
          to life.
          <br />
          <br />
          Our commitment to quality goes beyond aesthetics. We focus on creating
          websites that are optimized for performance, security, and search
          engines, ensuring that your business thrives in the competitive online
          landscape. With expertise in SEO, responsive design, and UI/UX
          consulting, we work closely with our clients to craft customized
          solutions tailored to their specific goals. No matter the complexity
          of your project, we are here to provide the tools and technology
          needed to help your business grow and succeed online.
        </h4>
      </div>
      <LanguageCarrousel />
    </section>
  );
};

export default About;

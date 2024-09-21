import { useEffect, useRef } from "react";
import ContactForm from "../components/ContactForm";
import CopyElement from "../components/CopyElement";
import SocialsIconBar from "../components/SocialsIconBar";
import {
  animateHeading,
  animateLeftToRight,
  animateRightToLeft,
} from "../Animations/gsapAnimations";

const Contact = () => {
  const headingRef1 = useRef<null | HTMLHeadingElement>(null);
  const headingRef2 = useRef<null | HTMLHeadingElement>(null);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    animateHeading(headingRef1.current, sectionRef.current);
    animateHeading(headingRef2.current, sectionRef.current);
  }, []);

  const leftRef = useRef<null | HTMLDivElement>(null);
  const rightRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    animateLeftToRight(leftRef.current);
    animateRightToLeft(rightRef.current);
  }, []);
  return (
    <section className="content-placement mt-24 " ref={sectionRef}>
      <h3
        className="text-center text-text-color-4 heading-fontsize mb-10"
        ref={headingRef1}
      >
        Contact <span className="text-text-color-2">Us</span>
      </h3>
      <h4 className="text-center text-text-color-3" ref={headingRef2}>
        If you have some assignment and want to contact us or ,You can fill the
        below form with your details. <br />
        We will get back to you soon.
      </h4>
      <section className="mt-10 flex flex-col custom-lg:flex-row custom-lg:gap-4 gap-14">
        <div
          ref={leftRef}
          className="w-full max-h-[316px] custom-lg:w-[30%] flex flex-col gap-4 justify-between items-center"
        >
          <img
            src="/assets/locationlogo.webp"
            alt="Address:"
            width={120}
            height={120}
            className=""
          />
          <div className="flex  pb-2 custom-lg:gap-4 gap-2 flex-col  justify-center ">
            <div className="flex gap-4 ">
              <img src="/assets/mail.svg" alt="mail:" />
              <CopyElement text="msxdev01@gmail.com">
                <a href="mailto:msxdev01@gmail.com">msxdev01@gmail.com</a>
              </CopyElement>
            </div>

            <div className="flex gap-2">
              <img src="/assets/call.svg" alt="number:" />
              <CopyElement text="+91 7007022949">
                <a href="tel:+91 7007022949">+91 7007022949</a>
              </CopyElement>
            </div>

            <div className="flex gap-2">
              <img src="/assets/location.svg" alt="number:" />
              <address className="lg:text-sm md:text-sm font-medium text-text-color-3">
                We are workiing remotely
              </address>
            </div>
          </div>
          <SocialsIconBar />
        </div>
        <ContactForm reference={rightRef} />
      </section>
    </section>
  );
};

export default Contact;

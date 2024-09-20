import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { services } from "../constants";
import ServiceBanner from "../components/ServiceBanner";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".servicecard").forEach((card) => {
      gsap.to(card, {
        scale: 0.9,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className="content-placement my-24">
      <h3 className="text-center text-text-color-4 heading-fontsize mb-20">
        Our <span className="text-text-color-2">Services</span>
      </h3>
      <div className="flex gap-10 flex-col relative ">
        {services.map((service, i) => (
          <div
            key={service.heading}
            className={`${i === 4 ? "" : "servicecard"} top-[15vh] shadow-none`}
            style={{ position: "sticky" }}
          >
            <ServiceBanner {...service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

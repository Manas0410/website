import gsap from "gsap";
import { useEffect } from "react";
import { services, servicesDescription } from "../constants";
import ServiceBanner from "../components/ServiceBanner";

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
    <section className="content-placement mt-24">
      <h3 className="text-center text-text-color-4 heading-fontsize mb-10">
        Our <span className="text-text-color-2">Services</span>
      </h3>
      <h4 className="text-center text-text-color-3 mb-20">
        {servicesDescription}
      </h4>
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

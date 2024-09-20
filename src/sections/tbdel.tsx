// @ts-nocheck
import ServiceBanner from "../components/ServiceBanner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const colors = ["red", "blue", "green", "black"];

const Tbdel = () => {
  useEffect(() => {
    gsap.utils.toArray(".servicecard").forEach((card) => {
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
    <div className="flex gap-10 flex-col relative content-placement ">
      {colors.map((item) => (
        <div
          className="servicecard top-[15vh] px-10 shadow-none"
          style={{ position: "sticky" }}
        >
          <ServiceBanner />{" "}
        </div>
      ))}
    </div>
  );
};

export default Tbdel;

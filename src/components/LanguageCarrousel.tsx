import React from "react";
import TechOverlay from "./TechOverlay";

const Languages = () => {
  return (
    <section className="h-full min-w-[1429px] w-screen flex-shrink-0  grid grid-cols-8 py-5 overflow-hidden">
      {/* First row: grid columns 1, 3, 5, 7 */}
      <img
        src="/assets/languages/typescript.png"
        alt="javascript"
        className="skill gridposition"
        style={{ "--r": 1, "--c": 1 } as React.CSSProperties}
      />
      <img
        src="/assets/languages/javascript2.png"
        alt="javascript"
        className="skill gridposition"
        style={{ "--r": 1, "--c": 3 } as React.CSSProperties}
      />
      <img
        src="/assets/languages/react.png"
        alt="javascript"
        className="skill gridposition"
        style={{ "--r": 1, "--c": 5 } as React.CSSProperties}
      />
      <img
        src="/assets/languages/gsap.svg"
        alt="javascript"
        className="skill gridposition"
        style={{ "--r": 1, "--c": 7 } as React.CSSProperties}
      />

      {/* Second row: grid columns 2, 4, 6, 8 */}
      <img
        src="/assets/languages/html.png"
        alt="javascript"
        className="skill gridposition"
        style={{ "--r": 2, "--c": 2 } as React.CSSProperties}
      />
      <img
        src="/assets/languages/nextjs.svg"
        alt="javascript"
        className="skill gridposition"
        style={{ "--r": 2, "--c": 4 } as React.CSSProperties}
      />
      <img
        src="/assets/languages/aws.png"
        alt="javascript"
        className="skill gridposition"
        style={{ "--r": 2, "--c": 6 } as React.CSSProperties}
      />
      <img
        src="/assets/languages/git.png"
        alt="javascript"
        className="skill gridposition"
        style={{ "--r": 2, "--c": 8 } as React.CSSProperties}
      />

      {/* First row: grid columns 1, 3, 5, 7 */}

      <img
        src="/assets/languages/database.png"
        alt="javascript"
        className="skill gridposition"
        style={{ "--r": 3, "--c": 1 } as React.CSSProperties}
      />
      <img
        src="/assets/languages/node.png"
        alt="javascript"
        className="skill gridposition"
        style={{ "--r": 3, "--c": 3 } as React.CSSProperties}
      />
      <img
        src="/assets/languages/docker.png"
        alt="javascript"
        className="skill gridposition"
        style={{ "--r": 3, "--c": 5 } as React.CSSProperties}
      />
      <img
        src="/assets/languages/css-3.png"
        alt="css"
        className="skill gridposition"
        style={{ "--r": 3, "--c": 7 } as React.CSSProperties}
      />
    </section>
  );
};

const LanguageCarrousel = () => {
  return (
    <section className="gradient relative overflow-hidden w-screen">
      <div className="flex inf-carousel-animation h-[500px] ">
        <Languages />
        <Languages />
      </div>
      <TechOverlay />
    </section>
  );
};

export default LanguageCarrousel;

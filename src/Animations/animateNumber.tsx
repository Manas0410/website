import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useNumberAnimation = (
  startNumber: number,
  endNumber: number,
  targetRef: React.RefObject<HTMLDivElement>,
  duration: number = 1
) => {
  const [currentNumber, setCurrentNumber] = useState(startNumber);

  useEffect(() => {
    // Ensure the ref and the target element are available
    if (!targetRef.current) return;

    // GSAP ScrollTrigger to start the number change when div is visible
    ScrollTrigger.create({
      trigger: targetRef.current,
      start: "top center", // Adjust start position as needed
      onEnter: () => {
        gsap.to(
          {},
          {
            duration: duration, // duration for the count
            onUpdate: function () {
              const newValue = Math.floor(
                gsap.utils.interpolate(startNumber, endNumber, this.progress())
              );
              setCurrentNumber(newValue);
            },
          }
        );
      },
    });
  }, [startNumber, endNumber, targetRef, duration]);

  return currentNumber;
};

export default useNumberAnimation;

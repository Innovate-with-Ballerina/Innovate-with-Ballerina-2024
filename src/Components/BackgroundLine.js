import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function BackgroundLine({ parentRef }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (!parentRef.current) return;

    const handleScroll = () => {
      const scrollTop = parentRef.current.scrollTop;
      const scrollHeight = parentRef.current.scrollHeight;
      const clientHeight = parentRef.current.clientHeight;
      const progress = scrollTop / (scrollHeight - clientHeight);

      const offset = Math.max(2500 - progress * 3000, 0); // Adjust based on the total path length
      controls.start({
        strokeDashoffset: offset,
        transition: { ease: "linear" },
      });
    };

    if (inView) {
      parentRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (parentRef.current) {
        parentRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [controls, inView, parentRef]);

  return (
    <div ref={ref}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="526"
        height="1145"
        viewBox="0 0 526 1145"
        fill="none"
      >
        <motion.path 
          d="M2 0V110.987H437V305.469V499.951H243.5V711.743H524V871.605H386.5V1024.34H505V1145"
          stroke="#4D4D4D"
          strokeWidth="4"
          strokeDasharray="2500" // This should be the length of the entire path
          strokeDashoffset="2500" // Start fully hidden
          animate={controls}
        />
      </svg>
    </div>
  );
}

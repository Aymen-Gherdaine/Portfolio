"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const RevealAnimation = ({ children, delay }) => {
  // Create a reference to the DOM element that we want to observe
  const ref = useRef(null);

  // Determine if the referenced element is in view
  const isInView = useInView(ref, { once: true });

  // Controls for the animation
  const mainControls = useAnimation();

  // Effect hook to start the animation when the element is in view
  useEffect(() => {
    if (isInView) {
      // Start the animation by setting the state to "visible"
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay ? delay : 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealAnimation;

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      className="carousel-wrapper"
      style={{
        position: "absolute",
        top: "15%",
        left: "47.3%",
        width: "600px",
        height: "450px",
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[current]}
          src={images[current]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.01,
          }} 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"
          }}
        />
      </AnimatePresence>
    </div>
  );
}

export default ProjectCarousel;

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function ProjectCarousel({ images, interval = 5000, speed = 700 }) {
  const wrapRef = useRef(null);
  const controls = useAnimation();
  const [current, setCurrent] = useState(0);
  const [slideW, setSlideW] = useState(600); 

  useEffect(() => {
    const measure = () => setSlideW(wrapRef.current?.clientWidth || 600);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Auto défilement
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  // Anim à chaque changement d’index
  useEffect(() => {
    controls.start({
      x: -current * slideW,
      transition: { duration: speed / 1000, ease: [0.22, 1, 0.36, 1] }
    });
  }, [current, slideW, controls, speed]);

  return (
    <div
      ref={wrapRef}
      className="carousel-wrapper"
      style={{
        position: "absolute",
        top: "15%",
        left: "47.3%",
        width: "600px",
        height: "450px",
        overflow: "hidden"
      }}
    >
      <motion.div
        animate={controls}
        style={{
          display: "flex",
          height: "100%",
          willChange: "transform"
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 100%", 
              width: slideW,     
              height: "100%"
            }}
          >
            <img
              src={src}
              alt={`slide-${i}`}
              draggable="false"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ProjectCarousel;

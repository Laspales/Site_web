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

  // Animation à chaque changement
  useEffect(() => {
    controls.start({
      x: -current * slideW,
      transition: { duration: speed / 1000, ease: [0.22, 1, 0.36, 1] }
    });
  }, [current, slideW, controls, speed]);

  return (
    <div ref={wrapRef} className="carousel-wrapper">
      <motion.div animate={controls} className="carousel-inner">
        {images.map((src, i) => (
          <div key={i} className="carousel-slide" style={{ width: slideW }}>
            <img src={src} alt={`slide-${i}`} draggable="false" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ProjectCarousel;

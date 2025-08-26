import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Animtext({ texts, delay = 3000 }) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(texts[0]);

  useEffect(() => {
    let frame = 0;
    let queue = [];
    let animationFrame;
    let timeout;
    const chars = "!<>-_\\/[]{}—=+*^?#________";

    const setText = (newText) => {
      const oldText = displayText;
      const length = Math.max(oldText.length, newText.length);
      queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(animationFrame);
      frame = 0;
      animationFrame = requestAnimationFrame(update);
    };

    const update = () => {
      let output = "";
      let complete = 0;
      for (let i = 0, n = queue.length; i < n; i++) {
        let { from, to, start, end, char } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      setDisplayText(output);
      if (complete === queue.length) {
        timeout = setTimeout(() => {
          const nextIndex = (index + 1) % texts.length;
          setIndex(nextIndex);
        }, delay);
      } else {
        frame++;
        animationFrame = requestAnimationFrame(update);
      }
    };

    setText(texts[index]);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeout);
    };
  }, [index, texts, delay]);

  return (
    <motion.span
      className="grey"
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
}

export default Animtext;

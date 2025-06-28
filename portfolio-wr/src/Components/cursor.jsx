import React, { useEffect } from "react";
import './cursor-style.css';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor.cursor2");

    const move = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cursor) {
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (cursor2) {
        cursor2.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor cursor2"></div>
    </>
  );
};

export default Cursor;
//  j'ai pris ça sur CodePen
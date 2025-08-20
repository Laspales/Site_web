import React, { useEffect, useRef, useState } from "react";

/** Normalise: string -> segments, et nettoie les segments fournis */
function normalizeText(text) {
  if (Array.isArray(text)) {
    return text.map((s) => ({
      content: String(s?.content ?? ""),
      className: String(s?.className ?? ""),
    }));
  }
  if (typeof text === "string") {
    return [{ content: text, className: "" }];
  }
  // fallback au cas où
  return [{ content: String(text ?? ""), className: "" }];
}


export default function TypewriterText({ text, speed = 30, onFinish, as: Tag = "p" }) {
  const segments = normalizeText(text);
  const fullTextRef = useRef(segments.map((s) => s.content).join(""));
  const [visibleCount, setVisibleCount] = useState(0);

  const started = useRef(false);
  const timer = useRef(null);

  useEffect(() => {
    if (started.current) return;        
    started.current = true;

    // Si speed <= 0, on affiche tout d’un coup (utile en tests)
    if (speed <= 0) {
      setVisibleCount(fullTextRef.current.length);
      onFinish && onFinish();
      return;
    }

    timer.current = setInterval(() => {
      setVisibleCount((n) => {
        const next = Math.min(n + 1, fullTextRef.current.length);
        if (next >= fullTextRef.current.length) {
          clearInterval(timer.current);
          onFinish && onFinish();
        }
        return next;
      });
    }, speed);

    return () => clearInterval(timer.current);
  }, [speed, onFinish]);

  // Construit le rendu en ne montrant que "visibleCount" caractères
  let remaining = visibleCount;
  const children = segments.map((seg, i) => {
    if (remaining <= 0) return null;
    const take = Math.min(seg.content.length, remaining);
    const visible = seg.content.slice(0, take);
    remaining -= take;

    // Gère les \n == <br/>
    const parts = visible.split("\n");
    return (
      <span key={i} className={seg.className}>
        {parts.map((p, j) =>
          j < parts.length - 1 ? (
            <React.Fragment key={j}>
              {p}
              <br />
            </React.Fragment>
          ) : (
            p
          )
        )}
      </span>
    );
  });

  return <Tag>{children}</Tag>;
}

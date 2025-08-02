import React, { useState, useEffect, useRef } from 'react';

function TypewriterText({ text, speed = 30, onFinish }) {
  const [displayedText, setDisplayedText] = useState('');
  const hasRun = useRef(false); 

  useEffect(() => {
    if (hasRun.current) return; 
    hasRun.current = true;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        if (onFinish) onFinish(); 
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onFinish]);

  const formattedText = displayedText.split('\n').map((line, i) => (
    <React.Fragment key={i}>
        <b>
      {line}
      </b>
      <br />
    </React.Fragment>
  ));

  return <p>{formattedText}</p>;
}

export default TypewriterText;

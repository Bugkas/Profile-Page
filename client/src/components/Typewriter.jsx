import { useState, useEffect } from 'react';

export default function Typewriter({ phrases }) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[phraseIndex];

    const tick = () => {
      if (isDeleting) {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setSpeed(50);
      } else {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setSpeed(100);
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex(prev => (prev + 1) % phrases.length);
        setSpeed(500);
      }
    };

    timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, speed, phrases]);

  return (
    <>
      <span className="typing-text">{text}</span>
      <span className="typing-cursor">|</span>
    </>
  );
}

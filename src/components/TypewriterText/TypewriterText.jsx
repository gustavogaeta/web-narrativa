import { useState, useEffect, useRef } from 'react';
import styles from './TypewriterText.module.css';

/**
 * Renders text with a typewriter animation effect.
 * Calls onComplete when finished.
 */
export default function TypewriterText({ text, speed = 22, onComplete, className = '' }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) {
        clearInterval(intervalRef.current);
        setDone(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(intervalRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const skipToEnd = () => {
    clearInterval(intervalRef.current);
    setDisplayed(text);
    setDone(true);
    onComplete?.();
  };

  return (
    <span
      className={`${styles.typewriter} ${className}`}
      onClick={!done ? skipToEnd : undefined}
      role={!done ? 'button' : undefined}
      aria-label={!done ? 'Clique para pular a animação' : undefined}
      tabIndex={!done ? 0 : undefined}
      onKeyDown={!done ? (e) => { if (e.key === 'Enter' || e.key === ' ') skipToEnd(); } : undefined}
    >
      {displayed}
      {!done && <span className="cursor" aria-hidden="true" />}
    </span>
  );
}

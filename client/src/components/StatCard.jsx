import { useState, useEffect, useRef } from 'react';

export default function StatCard({ targetVal, label }) {
  const [count, setCount] = useState(0);
  const [animated, setAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated) {
        setAnimated(true);
        let start = 0;
        const duration = 1500; // ms
        const steps = 50;
        const stepTime = duration / steps;
        const increment = targetVal / steps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= targetVal) {
            setCount(targetVal);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, stepTime);

        return () => clearInterval(timer);
      }
    }, { threshold: 0.2 });

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [targetVal, animated]);

  const isDecimal = targetVal % 1 !== 0;
  const formattedCount = isDecimal ? count.toFixed(1) : Math.floor(count);

  return (
    <div className="stat-card" ref={cardRef}>
      <span className="stat-num">{formattedCount}+</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

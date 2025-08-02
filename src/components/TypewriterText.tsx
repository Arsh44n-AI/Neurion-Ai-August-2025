import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 0,
  speed = 50,
  className = '',
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`typewriter-${text.slice(0, 10)}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [text, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (onComplete) {
        onComplete();
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed, isVisible, onComplete]);

  return (
    <span 
      id={`typewriter-${text.slice(0, 10)}`}
      className={`${className} relative`}
    >
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-cyan-400">|</span>
      )}
    </span>
  );
};
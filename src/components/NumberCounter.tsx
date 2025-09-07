'use client';

import React, { useEffect, useState, useRef } from 'react';

interface NumberCounterProps {
  endValue: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export const NumberCounter: React.FC<NumberCounterProps> = ({
  endValue,
  duration = 2000,
  delay = 0,
  className = '',
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Parse the number from the string (handle +, %, Lakh, etc.)
  const parseNumber = (str: string): number => {
    const match = str.match(/(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0;
  };

  // Extract suffix (+, %, Lakh, etc.)
  const getSuffix = (str: string): string => {
    return str.replace(/(\d+(?:\.\d+)?)/, '');
  };

  // Extract prefix (for cases like "24/7")
  const getPrefix = (str: string): string => {
    if (str.includes('/')) {
      const parts = str.split('/');
      return parts[0];
    }
    return '';
  };

  // Format the number (handle Lakh formatting)
  const formatNumber = (num: number, originalStr: string): string => {
    if (originalStr.includes('Lakh')) {
      // Don't animate Lakh values - just show final result
      return originalStr;
    }
    if (originalStr.includes('/')) {
      return originalStr; // Don't animate "24/7" format
    }
    return Math.floor(num).toString();
  };

  const targetNumber = parseNumber(endValue);
  const suffix = getSuffix(endValue);
  const prefix = getPrefix(endValue);

  useEffect(() => {
    if (!isVisible) return;

    // Skip animation for special formats
    const isSpecialFormat = endValue.includes('/') || endValue.includes('Lakh');
    if (isSpecialFormat) {
      setCurrentValue(targetNumber);
      return;
    }

    const timer = setTimeout(() => {
      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = startValue + (targetNumber - startValue) * easeOutQuart;

        setCurrentValue(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, targetNumber, duration, delay, endValue]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayValue = formatNumber(currentValue, endValue);

  // For special formats like "24/7" and "1 Lakh+", don't add prefix/suffix since formatNumber returns complete string
  const isSpecialFormat = endValue.includes('/') || endValue.includes('Lakh');

  return (
    <div ref={ref} className={className}>
      {isSpecialFormat ? displayValue : (
        <>
          {prefix && prefix}
          {displayValue}
          {suffix}
        </>
      )}
    </div>
  );
};

export default NumberCounter;

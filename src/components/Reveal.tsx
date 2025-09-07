'use client';

import React, { useEffect, useRef } from 'react';
import { animate, inView } from 'motion';

type RevealVariant = 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale';

type RevealBaseProps<T extends React.ElementType> = {
  children: React.ReactNode;
  className?: string;
  as?: T;
  variant?: RevealVariant;
  duration?: number;
  delay?: number;
  once?: boolean;
  style?: React.CSSProperties;
};

type RevealProps<T extends React.ElementType> = RevealBaseProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof RevealBaseProps<T>>;

const getInitialTransformForVariant = (variant: RevealVariant): string => {
  switch (variant) {
    case 'fade-up':
      return 'translateY(24px)';
    case 'fade-down':
      return 'translateY(-24px)';
    case 'fade-left':
      return 'translateX(24px)';
    case 'fade-right':
      return 'translateX(-24px)';
    case 'scale':
      return 'scale(0.95)';
    default:
      return 'none';
  }
};

const getTargetTransformForVariant = (variant: RevealVariant): string => {
  switch (variant) {
    case 'fade-up':
    case 'fade-down':
    case 'fade-left':
    case 'fade-right':
      return 'none';
    case 'scale':
      return 'scale(1)';
    default:
      return 'none';
  }
};

export const Reveal = <T extends React.ElementType = 'div'>(
  {
    children,
    className,
    as,
    variant = 'fade-up',
    duration = 0.6,
    delay = 0,
    once = true,
    style,
    ...rest
  }: RevealProps<T>
) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;

    let hasEntered = false;

    // Initial styles are set via initialStyle prop

    const stop = inView(el, () => {
      if (hasEntered) return;
      hasEntered = true;

      type CSSKeyframes = { [property: string]: string | number | (string | number)[] };
      const keyframes: CSSKeyframes = { opacity: [0, 1], transform: [getInitialTransformForVariant(variant), getTargetTransformForVariant(variant)] };
      const options: { duration?: number; delay?: number; easing?: string } = { duration, delay, easing: 'cubic-bezier(0.2, 0.65, 0.3, 1)' };

      animate(el as Element, keyframes, options);

      if (once) {
        stop();
        return;
      }

      // If not once, return an onLeave handler to reset
      if (!once) {
        return () => {
          animate(el as Element, { opacity: 0, transform: getInitialTransformForVariant(variant) }, { duration: 0.3 });
        };
      }
    }, { amount: 0.2 });

    // If the element is already in view on mount, trigger animation immediately after a small delay
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    const visibilityRatio = rect.height > 0 ? Math.max(0, visibleHeight) / rect.height : 0;

    if (visibilityRatio >= 0.2) {
      setTimeout(() => {
        if (!hasEntered) {
          hasEntered = true;
          type CSSKeyframes = { [property: string]: string | number | (string | number)[] };
          const keyframes: CSSKeyframes = { opacity: [0, 1], transform: [getInitialTransformForVariant(variant), getTargetTransformForVariant(variant)] };
          const options: { duration?: number; delay?: number; easing?: string } = { duration, delay, easing: 'cubic-bezier(0.2, 0.65, 0.3, 1)' };

          animate(el as Element, keyframes, options);
        }
      }, 50);
    }

    return () => {
      stop();
    };
  }, [variant, duration, delay, once]);

  const initialStyle: React.CSSProperties = {
    opacity: 0,
    transform: getInitialTransformForVariant(variant),
    willChange: 'opacity, transform',
    ...style,
  };

  const ComponentTag = (as || 'div') as React.ElementType;

  return (
    <ComponentTag
      ref={ref as unknown as React.Ref<HTMLElement>}
      className={className}
      style={initialStyle}
      {...(rest as object)}
    >
      {children}
    </ComponentTag>
  );
};

export default Reveal;



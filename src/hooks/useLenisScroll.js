import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useLenisScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchInertiaMultiplier: 30,
      infinite: false,
    });

    function raf(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return lenisRef;
}

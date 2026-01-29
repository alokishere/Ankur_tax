import React from 'react';

export function useGSAPAnimation(animationFn, dependencies = []) {
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    if (elementRef.current && animationFn) {
      animationFn(elementRef.current);
    }
  }, dependencies);

  return elementRef;
}

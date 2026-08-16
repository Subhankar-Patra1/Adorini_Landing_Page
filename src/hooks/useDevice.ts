import { useEffect, useState } from 'react';

/**
 * Viewport size class, read synchronously on first render.
 *
 * The lazy initialiser matters: defaulting to a fixed width would paint the
 * wrong layout once and then visibly snap on hydration.
 */
export function useDevice() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  };
}

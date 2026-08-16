import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-surface-lowest focus:px-5 focus:py-3 focus:text-[16px] focus:text-on-surface focus:shadow-lift"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      {/* Offsets the fixed header. */}
      <main id="main" className="pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

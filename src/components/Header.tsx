import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { business, legalLinks, navLinks } from '@/config/business';
import { Wordmark } from '@/components/BrandMarks';
import { Container } from '@/components/Container';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuLinkClass,
} from '@/components/ui/navigation-menu';
import { useDevice } from '@/hooks/useDevice';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/lib/utils';

export function Header() {
  const { isMobile } = useDevice();
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const barHeight = isMobile ? 'h-16' : 'h-20';
  const wordmarkHeight = isMobile ? 26 : 34;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,border-color] duration-200 ease-out',
        // Transparent at the top of the page, frosting in once scrolled.
        scrolled ? 'glass-light' : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className={cn('flex items-center justify-between', barHeight)}>
        <Link
          to="/"
          className="-ml-1 flex min-h-[44px] items-center rounded-md px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={`${business.name} — home`}
        >
          <Wordmark height={wordmarkHeight} />
        </Link>

        {isMobile ? (
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-tertiary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent title="Site navigation">
              <nav className="mt-14 flex flex-col" aria-label="Main">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        cn(
                          'flex min-h-[52px] items-center border-b border-divider text-[18px] transition-colors',
                          isActive ? 'text-accent' : 'text-on-surface',
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </SheetClose>
                ))}
              </nav>

              <Separator className="mt-6" />

              <nav className="mt-4 flex flex-col gap-1" aria-label="Policies">
                {legalLinks
                  .filter((link) => link.to !== '/contact')
                  .map((link) => (
                    <SheetClose asChild key={link.to}>
                      <Link
                        to={link.to}
                        className="flex min-h-[44px] items-center text-[16px] text-on-surface-variant"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
              </nav>

              <div className="mt-auto pt-6 text-[14px] leading-relaxed text-on-surface-variant">
                <a href={`tel:${business.phoneHref}`} className="block min-h-[44px] leading-[44px]">
                  {business.phone}
                </a>
                <a href={`mailto:${business.email}`} className="block break-all">
                  {business.email}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.to}>
                  <NavigationMenuLink asChild>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        cn(navigationMenuLinkClass, isActive && 'text-on-surface')
                      }
                    >
                      {link.label}
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </Container>
    </header>
  );
}

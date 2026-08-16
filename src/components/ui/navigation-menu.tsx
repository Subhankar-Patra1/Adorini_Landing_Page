import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn('relative flex items-center', className)}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = 'NavigationMenu';

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn('flex list-none items-center gap-1', className)}
    {...props}
  />
));
NavigationMenuList.displayName = 'NavigationMenuList';

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

/** Shared link appearance for the desktop menu. */
export const navigationMenuLinkClass =
  'inline-flex h-11 items-center rounded-full px-4 text-[16px] text-on-surface-variant transition-colors hover:bg-tertiary-container hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent data-[active=true]:text-on-surface';

export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink };

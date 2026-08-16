import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[16px] font-medium transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-surface hover:bg-brand-ink active:bg-brand-ink',
        outline:
          'border border-outline-variant bg-surface-lowest text-on-surface hover:bg-tertiary-container active:bg-tertiary-container',
        accent: 'bg-accent text-surface hover:bg-accent-deep active:bg-accent-deep',
        ghost: 'text-on-surface hover:bg-tertiary-container active:bg-tertiary-container',
      },
      size: {
        // 48px on touch, 44px on pointer — both clear the 44px target minimum.
        mobile: 'h-12 px-6',
        desktop: 'h-11 px-6',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'desktop',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

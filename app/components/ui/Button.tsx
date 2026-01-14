
import { tv, type VariantProps } from 'tailwind-variants';
import React from 'react';

const button = tv({
  base: 'inline-flex items-center justify-center rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  variants: {
    variant: {
      default: 'bg-emerald-green text-white hover:bg-emerald-green/90',
      primary: 'bg-trust-blue text-white hover:bg-trust-blue/90',
      destructive: 'bg-red-500 text-white hover:bg-red-600',
      outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'underline-offset-4 hover:underline text-primary',
    },
    size: {
      default: 'h-10 py-2 px-4',
      sm: 'h-9 px-3 rounded-md',
      lg: 'h-11 px-8 rounded-md',
      xl: 'h-12 min-h-12 px-8 rounded-md text-lg', // 48px
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={button({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, button };

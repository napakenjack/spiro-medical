import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-[#0A84FF] text-white hover:bg-[#073B6B] shadow-lg shadow-blue-200 rounded-full',
      secondary: 'bg-[#0B1F33] text-white hover:bg-gray-800 shadow-xl rounded-2xl',
      outline: 'border border-[#0B1F33]/10 text-[#0B1F33] hover:bg-gray-50 rounded-full',
      ghost: 'text-[#5B6B7A] hover:text-[#0A84FF] hover:bg-blue-50/50 rounded-full',
    };

    const sizes = {
      sm: 'h-10 px-6 text-xs uppercase tracking-widest',
      md: 'h-12 px-8 text-sm',
      lg: 'h-14 px-8 text-lg',
    };

    if (asChild) {
      return (
        <Slot
          ref={ref as any}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          {...props}
        />
      );
    }

    return (
      <motion.button
        ref={ref as any}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...(props as any)}
      />
    );
  }
);
Button.displayName = 'Button';

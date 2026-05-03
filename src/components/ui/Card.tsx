import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface CardProps extends HTMLMotionProps<'div'> {
  glass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-2xl p-5',
          glass ? 'bg-white/60 backdrop-blur-md border border-white/50 shadow-sm' : 'bg-white shadow-sm border border-gray-100',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

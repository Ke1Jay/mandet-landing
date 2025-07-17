import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  variant?: 'light' | 'dark' | 'surface';
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  variant = 'surface',
  className,
  hover = false,
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={clsx(
        // Base styles
        'rounded-lg transition-all duration-200',
        
        // Variants
        {
          'bg-surface text-text-primary shadow-md': variant === 'surface',
          'bg-background text-text-primary shadow-sm': variant === 'light',
          'bg-dark-surface text-dark-text-primary shadow-lg': variant === 'dark',
        },
        
        // Hover effects
        {
          'hover:shadow-lg hover:-translate-y-1': hover,
        },
        
        // Padding
        {
          'p-4': padding === 'sm',
          'p-6': padding === 'md',
          'p-8': padding === 'lg',
        },
        
        className
      )}
    >
      {children}
    </div>
  );
} 
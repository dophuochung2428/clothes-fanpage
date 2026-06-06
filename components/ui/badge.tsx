import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'secondary' | 'outline';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const badgeStyles: Record<BadgeVariant, string> = {
  default: 'bg-slate-100 text-slate-700',
  secondary: 'bg-brand-600 text-white',
  outline: 'border border-slate-200 bg-white text-slate-700'
};

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn('inline-flex cursor-pointer items-center rounded-full px-3 py-1 text-xs font-semibold transition', badgeStyles[variant], className)}
      {...props}
    />
  );
}

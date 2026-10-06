import { ElementType, ReactNode } from 'react';
import styles from './Typography.module.scss';

interface TypographyProps {
  as?: ElementType;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  children: ReactNode;
  className?: string;
}

export const Typography = ({ as, variant = 'body', children, className = '' }: TypographyProps) => {
  const Component = as || (variant.startsWith('h') ? variant : 'p') as ElementType;
  const classes = `${styles[variant]} ${className}`.trim();
  
  return <Component className={classes}>{children}</Component>;
};

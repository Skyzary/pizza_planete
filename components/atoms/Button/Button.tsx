import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  href,
  className: customClassName = '',
  ...props
}: ButtonProps) => {
  const className = `${styles.button} ${styles[variant] || ''} ${customClassName}`.trim();

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

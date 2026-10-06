
import { ReactNode } from 'react';
import styles from './PaperCard.module.scss';

interface PaperCardProps {
  children: ReactNode;
  className?: string;
  tilt?: 'none' | 'left' | 'right';
}

export const PaperCard = ({ children, className = '', tilt = 'none' }: PaperCardProps) => {
  const tiltClass = tilt !== 'none' ? styles[`tilt-${tilt}`] : '';
  const combinedClasses = `${styles.paperCard} ${tiltClass} ${className}`.trim();

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

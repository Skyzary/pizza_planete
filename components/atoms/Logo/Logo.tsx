import Link from 'next/link';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      Pizza Planète
    </Link>
  );
};

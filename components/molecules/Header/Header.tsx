import Link from 'next/link';
import { Logo } from '../../atoms/Logo/Logo';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Accueil</Link>
          <Link href="/menu" className={styles.link}>Menu</Link>
        </nav>
        <div className={styles.actions}>
          <a
            href="tel:0467853434"
            className={styles.iconButton}
            aria-label="Appeler 04 67 85 34 34"
            title="Appeler : 04 67 85 34 34"
          >
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/pizzaplanetsfabregues/?locale=fr_FR"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconButton}
            aria-label="Facebook Pizza Planète"
            title="Facebook Pizza Planète"
          >
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

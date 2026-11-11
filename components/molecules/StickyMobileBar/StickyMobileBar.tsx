'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './StickyMobileBar.module.scss';

export const StickyMobileBar = () => {
  const pathname = usePathname();
  const isMenuPage = pathname === '/menu';

  return (
    <aside className={styles.stickyDock} aria-label="Commande rapide mobile">
      <div className={styles.dockIsland}>
        {/* Toggle between Home and Menu */}
        <Link
          href={isMenuPage ? '/' : '/menu'}
          className={styles.menuTab}
          aria-label={isMenuPage ? "Retourner à l'accueil" : 'Voir notre menu'}
        >
          <span className={styles.tabIcon} aria-hidden="true">
            {isMenuPage ? '🏠' : '🍕'}
          </span>
          <span className={styles.tabText}>
            {isMenuPage ? 'Accueil' : 'Carte'}
          </span>
        </Link>

        {/* Main Calling CTA */}
        <a
          href="tel:0467853434"
          className={styles.callCta}
          title="Appeler pour commander"
        >
          <div className={styles.callIconWrapper}>
            <svg
              className={styles.phoneSvg}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
            </svg>
          </div>
          <div className={styles.callInfo}>
            <div className={styles.callLabel}>
              <span className={styles.pulseDot} aria-hidden="true" />
              <span className={styles.actionName}>Commander</span>
              <span className={styles.freeBadge}>0€ livraison</span>
            </div>
            <span className={styles.phoneNumber}>04 67 85 34 34</span>
          </div>
        </a>
      </div>
    </aside>
  );
};

'use client';

import { useEffect, useState } from 'react';
import styles from './StickyMobileBar.module.scss';

type BarState = 'neutral' | 'open' | 'soon' | 'closed';

export const StickyMobileBar = () => {
  const [barState, setBarState] = useState<BarState>('neutral');

  useEffect(() => {
    const updateStatus = () => {
      try {
        const now = new Date();
        const parisDate = new Date(
          now.toLocaleString('en-US', { timeZone: 'Europe/Paris' })
        );
        const day = parisDate.getDay();
        const minutes = parisDate.getHours() * 60 + parisDate.getMinutes();
        const isOpenDay = day !== 1; // Fermé le lundi

        if (isOpenDay && minutes >= 18 * 60 && minutes < 21 * 60 + 30) {
          setBarState('open');
        } else if (isOpenDay && minutes < 18 * 60) {
          setBarState('soon');
        } else {
          setBarState('closed');
        }
      } catch {
        setBarState('neutral');
      }
    };

    updateStatus();
    const timer = setInterval(updateStatus, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside className={styles.stickyDock} aria-label="Commande rapide mobile">
      <div className={styles.dockIsland}>
        <a
          href="tel:0467853434"
          className={styles.callCta}
          title="Appeler Pizza Planète pour commander"
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
              {barState === 'open' && (
                <span className={styles.pulseDot} aria-hidden="true" />
              )}
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

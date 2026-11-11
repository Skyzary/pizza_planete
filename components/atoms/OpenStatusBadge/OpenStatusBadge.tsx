'use client';

import { useEffect, useState } from 'react';
import styles from './OpenStatusBadge.module.scss';

interface OpenStatusBadgeProps {
  className?: string;
  variant?: 'compact' | 'full';
  theme?: 'dark' | 'light';
}

interface StatusData {
  type: 'open' | 'soon' | 'closed';
  text: string;
}

export const OpenStatusBadge = ({
  className = '',
  variant = 'compact',
  theme = 'dark',
}: OpenStatusBadgeProps) => {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<StatusData | null>(null);

  useEffect(() => {
    const computeLiveStatus = () => {
      try {
        const now = new Date();
        const parisString = now.toLocaleString('en-US', { timeZone: 'Europe/Paris' });
        const parisDate = new Date(parisString);
        const day = parisDate.getDay(); // 0: Dimanche, 1: Lundi, 2: Mardi... 6: Samedi
        const currentMinutes = parisDate.getHours() * 60 + parisDate.getMinutes();

        const isOpenDay = day !== 1; // Fermé le lundi
        const openMinutes = 18 * 60; // 18:00
        const closeMinutes = 21 * 60 + 30; // 21:30

        if (isOpenDay && currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
          setStatus({
            type: 'open',
            text: variant === 'compact' ? 'Ouvert maintenant' : 'Ouvert maintenant • jusqu\'à 21h30',
          });
        } else if (isOpenDay && currentMinutes < openMinutes) {
          setStatus({
            type: 'soon',
            text: variant === 'compact' ? 'Ouvre ce soir à 18h' : 'Ouvre ce soir à 18h00 • 21h30',
          });
        } else if (day === 1) {
          setStatus({
            type: 'closed',
            text: variant === 'compact' ? 'Fermé le lundi' : 'Fermé le lundi • Réouverture mardi 18h',
          });
        } else {
          // Après 21h30
          const nextDayText = day === 0 ? 'mardi à 18h' : 'demain à 18h';
          setStatus({
            type: 'closed',
            text: variant === 'compact' ? 'Fermé ce soir' : `Fermé • Réouverture ${nextDayText}`,
          });
        }
      } catch {
        setStatus({
          type: 'open',
          text: 'Mardi - Dimanche : 18h00 - 21h30',
        });
      }
    };

    // Вычисляем только в браузере клиента при монтировании компонента
    computeLiveStatus();
    setMounted(true);

    // Обновляем каждую минуту в реальном времени
    const timer = setInterval(computeLiveStatus, 30000);
    return () => clearInterval(timer);
  }, [variant]);

  // Во время SSR и сборки (next build) рендерится нейтральное статичное расписание,
  // чтобы статус "Ouvert" или "Fermé" не запекался в статичный HTML.
  if (!mounted || !status) {
    return (
      <div
        className={`${styles.badge} ${styles[theme]} ${styles.neutral} ${className}`.trim()}
        aria-hidden="true"
        suppressHydrationWarning
      >
        <span className={styles.dot} />
        <span className={styles.text}>
          {variant === 'compact' ? '18h00 - 21h30' : 'Mar - Dim : 18h00 - 21h30'}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`${styles.badge} ${styles[theme]} ${styles[status.type]} ${className}`.trim()}
      role="status"
      aria-live="polite"
      suppressHydrationWarning
    >
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.text}>{status.text}</span>
    </div>
  );
};

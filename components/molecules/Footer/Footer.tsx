import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p><strong>Pizza Planète</strong></p>
          <p>Tél : 04 67 85 34 34</p>
          <p className={styles.perks}>🛵 Livraison Gratuite • 💳 CB • 🎫 Tickets Resto</p>
        </div>
        <div className={styles.schedule}>
          <p><strong>Horaires d&apos;ouverture</strong></p>
          <p>Lundi : Fermé</p>
          <p>Mardi - Dimanche : 18:00 - 21:30</p>
        </div>
        <div className={styles.links}>
          <Link href="/mentions-legales" className={styles.link}>Mentions Légales</Link>
        </div>
      </div>
    </footer>
  );
};

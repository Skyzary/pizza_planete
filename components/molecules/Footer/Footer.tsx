import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <address className={styles.info}>
          <p><strong>Pizza Planète Fabrègues</strong></p>
          <p>
            <a
              href="https://maps.google.com/?q=1+Rue+Guynemer,+34690+Fabr%C3%A8gues"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              title="Voir l'itinéraire sur Google Maps"
            >
              📍 1 Rue Guynemer, 34690 Fabrègues
            </a>
          </p>
          <p>
            Tél : <a href="tel:0467853434" className={styles.link}>04 67 85 34 34</a>
          </p>
          <p className={styles.perks}>🛵 Livraison Gratuite • 💳 CB • 🎫 Tickets Resto</p>
        </address>
        <div className={styles.schedule}>
          <p><strong>Horaires d&apos;ouverture</strong></p>
          <p>Lundi : Fermé</p>
          <p>Mardi - Dimanche : 18:00 - 21:30</p>
        </div>
        <div className={styles.links}>
          <Link href="/menu" className={styles.link}>Menu</Link>
          <Link href="/mentions-legales" className={styles.link}>Mentions Légales</Link>
        </div>
      </div>
    </footer>
  );
};

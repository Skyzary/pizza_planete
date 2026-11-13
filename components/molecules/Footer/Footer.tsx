import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand Block */}
        <div className={styles.brandBlock}>
          <Link href="/" className={styles.brandLogo}>
            Pizza Planets
          </Link>
          <p className={styles.tagline}>
            Pizzeria artisanale à Fabrègues • Pâte fraîche maison
          </p>
        </div>

        {/* Interactive Contact Pills */}
        <address className={styles.actionsRow}>
          <a
            href="https://maps.google.com/?q=1+Rue+Guynemer,+34690+Fabr%C3%A8gues"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pillLink}
            title="Voir l'itinéraire sur Google Maps"
          >
            <span aria-hidden="true">📍</span>
            <span>1 Rue Guynemer, 34690 Fabrègues</span>
          </a>

          <a
            href="tel:0467853434"
            className={`${styles.pillLink} ${styles.phonePill}`}
            title="Appeler Pizza Planets"
          >
            <span aria-hidden="true">📞</span>
            <span>04 67 85 34 34</span>
          </a>

          <a
            href="https://www.facebook.com/pizzaplanetsfabregues/?locale=fr_FR"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialPill}
            aria-label="Facebook Pizza Planets"
            title="Suivez-nous sur Facebook"
          >
            <svg
              className={styles.socialIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </address>

        {/* Schedule & Delivery */}
        <div className={styles.scheduleBlock}>
          <span className={styles.scheduleHeading}>Horaires d&apos;ouverture</span>
          <div className={styles.scheduleTimes}>
            <span>Mardi – Dimanche : <strong>18h00 – 21h30</strong></span>
            <span className={styles.dotSep} aria-hidden="true">•</span>
            <span className={styles.closedDay}>Lundi : Fermé</span>
          </div>
          <p className={styles.deliveryNote}>
            🛵 Livraison gratuite à Fabrègues et alentours • 💳 CB &amp; Tickets Resto
          </p>
        </div>

        {/* Sub-footer */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>© 2026 Pizza Planets Fabrègues</span>
          <nav className={styles.links} aria-label="Liens de pied de page">
            <Link href="/" className={styles.link}>Accueil</Link>
            <span className={styles.linkDot} aria-hidden="true">•</span>
            <Link href="/menu" className={styles.link}>Menu</Link>
            <span className={styles.linkDot} aria-hidden="true">•</span>
            <Link href="/mentions-legales" className={styles.link}>Mentions Légales</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

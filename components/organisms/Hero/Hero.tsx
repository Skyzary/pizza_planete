import Link from 'next/link';
import { Typography } from '../../atoms/Typography/Typography';
import { Button } from '../../atoms/Button/Button';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Typography variant="h1">Bienvenue chez Pizza Planète</Typography>
        <Typography variant="body" className={styles.subtitle}>
          Les meilleures pizzas artisanales de la région, préparées avec des ingrédients frais.
        </Typography>
        <div className={styles.actions}>
          <Link href="/menu">
            <Button variant="primary">Voir le Menu</Button>
          </Link>
          <a href="tel:0467853434">
            <Button variant="secondary">Appeler : 04 67 85 34 34</Button>
          </a>
        </div>
        <a href="#avantages" className={styles.perksCard} aria-label="Découvrir nos avantages : Livraison Gratuite, Paiement par CB, Tickets Resto">
          <div className={styles.perkCol}>
            <span className={styles.perkIcon} aria-hidden="true">🛵</span>
            <div className={styles.perkContent}>
              <span className={styles.perkTitle}>Livraison Gratuite</span>
              <span className={styles.perkSub}>0€ de frais</span>
            </div>
          </div>
          <div className={styles.perkDivider} aria-hidden="true" />
          <div className={styles.perkCol}>
            <span className={styles.perkIcon} aria-hidden="true">💳</span>
            <div className={styles.perkContent}>
              <span className={styles.perkTitle}>Paiement par CB</span>
              <span className={styles.perkSub}>Sans contact &amp; TPE</span>
            </div>
          </div>
          <div className={styles.perkDivider} aria-hidden="true" />
          <div className={styles.perkCol}>
            <span className={styles.perkIcon} aria-hidden="true">🎫</span>
            <div className={styles.perkContent}>
              <span className={styles.perkTitle}>Tickets Resto</span>
              <span className={styles.perkSub}>Cartes &amp; Chèques</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

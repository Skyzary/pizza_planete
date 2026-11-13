import { Typography } from '../../atoms/Typography/Typography';
import { Button } from '../../atoms/Button/Button';
import { OpenStatusBadge } from '../../atoms/OpenStatusBadge/OpenStatusBadge';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badgeWrapper}>
          <OpenStatusBadge variant="full" theme="light" />
        </div>
        <Typography variant="h1">Pizzeria Artisanale à Fabrègues</Typography>
        <Typography variant="body" className={styles.subtitle}>
          Bienvenue chez <strong>Pizza Planets</strong> ! Les meilleures pizzas artisanales de Fabrègues et ses alentours, préparées avec passion et des ingrédients frais. Livraison 100% gratuite.
        </Typography>
        <div className={styles.actions}>
          <Button href="/menu" variant="primary">
            Voir le Menu
          </Button>
          <Button href="tel:0467853434" variant="secondary">
            Commander au 04 67 85 34 34
          </Button>
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

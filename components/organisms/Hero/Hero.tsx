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
      </div>
    </section>
  );
};

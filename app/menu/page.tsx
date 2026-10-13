import Image from 'next/image';
import { Header } from '../../components/molecules/Header/Header';
import { Footer } from '../../components/molecules/Footer/Footer';
import { Typography } from '../../components/atoms/Typography/Typography';
import { Button } from '../../components/atoms/Button/Button';
import styles from './page.module.scss';

export const metadata = {
  title: 'Notre Menu - Pizza Planète Fabrègues',
  description: 'Consultez la carte complète de Pizza Planète : pizzas rouges, pizzas blanches et nos spécialités artisanales.',
};

const menuPages = [
  {
    src: '/Menu_1.webp',
    title: 'Pizzas Rouges (Base Tomate)',
    pageNumber: 'Page 1 / 3',
    alt: 'Menu Pizza Planète - Page 1 : Nos pizzas rouges à base de sauce tomate',
    width: 701,
    height: 1020,
  },
  {
    src: '/Menu_2.webp',
    title: 'Pizzas Blanches & Panachées',
    pageNumber: 'Page 2 / 3',
    alt: 'Menu Pizza Planète - Page 2 : Nos pizzas blanches et panachées',
    width: 695,
    height: 1020,
  },
  {
    src: '/Menu_3.webp',
    title: 'Spécialités & Nouvelles Recettes',
    pageNumber: 'Page 3 / 3',
    alt: 'Menu Pizza Planète - Page 3 : Spécialités et nouvelles créations',
    width: 729,
    height: 1020,
  },
];

export default function Menu() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.headerSection}>
            <Typography variant="h1" className={styles.pageTitle}>Notre Menu</Typography>
            <p className={styles.subtitle}>
              Découvrez l&apos;intégralité de nos recettes artisanales et nos tarifs.
              Cliquez ou appuyez sur une page pour l&apos;ouvrir en haute résolution.
            </p>
            <div className={styles.orderBanner}>
              <a href="tel:0467853434" className={styles.callButton}>
                <Button variant="primary">Commander au 04 67 85 34 34</Button>
              </a>
            </div>
          </section>

          <section className={styles.menuList} aria-label="Pages du menu">
            {menuPages.map((page, index) => (
              <article key={page.src} className={styles.menuCard}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>{page.title}</h2>
                  <span className={styles.pageBadge}>{page.pageNumber}</span>
                </div>
                <a
                  href={page.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.imageLink}
                  title={`Ouvrir la ${page.pageNumber} en grand format`}
                >
                  <Image
                    src={page.src}
                    alt={page.alt}
                    width={page.width}
                    height={page.height}
                    className={styles.menuImage}
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 860px"
                  />
                  <div className={styles.zoomOverlay} aria-hidden="true">
                    <span>🔍 Agrandir l&apos;image</span>
                  </div>
                </a>
              </article>
            ))}
          </section>

          <section className={styles.bottomCta}>
            <Typography variant="h2" className={styles.bottomTitle}>Une envie de pizza ?</Typography>
            <p className={styles.bottomText}>
              Passez commande directement par téléphone pour un retrait rapide et chaud en boutique !
            </p>
            <a href="tel:0467853434" className={styles.callButton}>
              <Button variant="primary">Appeler le 04 67 85 34 34</Button>
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

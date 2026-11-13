import Image from 'next/image';
import type { Metadata } from 'next';
import { Header } from '../../components/molecules/Header/Header';
import { Footer } from '../../components/molecules/Footer/Footer';
import { Typography } from '../../components/atoms/Typography/Typography';
import { Button } from '../../components/atoms/Button/Button';
import { OpenStatusBadge } from '../../components/atoms/OpenStatusBadge/OpenStatusBadge';
import { MenuJsonLd } from '../../components/seo/MenuJsonLd';
import { drinksData, formulesData } from '../../pizza_data';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Notre Carte & Menu - Pizzas artisanales à Fabrègues',
  description:
    'Consultez la carte complète de Pizza Planets à Fabrègues (34690) : plus de 50 pizzas artisanales, formules avantageuses et boissons. Livraison 100% gratuite au 04 67 85 34 34.',
  alternates: {
    canonical: '/menu',
  },
  openGraph: {
    title: 'Notre Menu & Tarifs - Pizza Planets Fabrègues',
    description:
      'Découvrez la carte complète de Pizza Planets à Fabrègues : plus de 50 recettes au choix, formules 33 Ø et livraison gratuite.',
    url: 'https://pizza-planete.fr/menu',
    images: ['/banner.jpg'],
  },
};

const menuPages = [
  {
    src: '/Menu_1_hd.webp',
    title: 'Pizzas Rouges (Base Tomate)',
    pageNumber: 'Page 1 / 3',
    alt: 'Menu Pizza Planets Fabrègues - Page 1 : Pizzas rouges à base de sauce tomate',
    width: 1600,
    height: 2328,
  },
  {
    src: '/Menu_2_hd.webp',
    title: 'Pizzas Blanches & Panachées',
    pageNumber: 'Page 2 / 3',
    alt: 'Menu Pizza Planets Fabrègues - Page 2 : Pizzas blanches et panachées',
    width: 1600,
    height: 2348,
  },
  {
    src: '/Menu_3_hd.webp',
    title: 'Spécialités & Nouvelles Recettes',
    pageNumber: 'Page 3 / 3',
    alt: 'Menu Pizza Planets Fabrègues - Page 3 : Spécialités et nouvelles créations',
    width: 1600,
    height: 2239,
  },
];

export default function Menu() {
  return (
    <div className={styles.page}>
      <MenuJsonLd />
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.headerSection}>
            <div className={styles.badgeWrapper}>
              <OpenStatusBadge variant="full" theme="light" />
            </div>
            <Typography variant="h1" className={styles.pageTitle}>Notre Menu &amp; Carte</Typography>
            <p className={styles.subtitle}>
              Découvrez l&apos;intégralité de nos pizzas artisanales et nos tarifs à <strong>Fabrègues</strong>.
              Cliquez ou appuyez sur une page pour l&apos;ouvrir en plein écran.
            </p>
            <div className={styles.orderBanner}>
              <Button href="tel:0467853434" variant="primary">
                Commander au 04 67 85 34 34
              </Button>
            </div>
            <div className={styles.quickNav}>
              <a href="#formules" className={styles.quickNavPill}>
                <span aria-hidden="true">🏷️</span> Formules 33 Ø &amp; Boissons Offertes
              </a>
              <a href="#boissons" className={styles.quickNavPill}>
                <span aria-hidden="true">🥤</span> Boissons &amp; Alcools
              </a>
            </div>
          </section>

          {/* Dépliant visuel haute résolution */}
          <section className={styles.menuList} aria-label="Dépliant illustré du menu">
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

            {/* Section Formules & Offres Spéciales */}
            <article className={styles.menuCard} id="formules" aria-labelledby="formules-title">
              <div className={styles.cardHeader}>
                <h2 id="formules-title" className={styles.cardTitle}>
                  Nos Formules &amp; Offres Spéciales
                </h2>
                <span className={styles.pageBadge}>Bons Plans</span>
              </div>
              <div className={styles.formulesBody}>
                <div className={styles.formulesGrid}>
                  {/* Formule 33 Ø uniquement */}
                  <div className={styles.formuleGroup}>
                    <div className={styles.formuleGroupHeader}>
                      <span className={styles.formuleGroupTitle}>
                        <span aria-hidden="true">🍕</span>
                        <span>{formulesData.pizzas.title}</span>
                      </span>
                      <span className={styles.formuleBadge}>
                        {formulesData.pizzas.badge}
                      </span>
                    </div>
                    <p className={styles.formuleSubtext}>
                      {formulesData.pizzas.description}
                    </p>
                    <ul className={styles.formuleList}>
                      {formulesData.pizzas.items.map((item) => (
                        <li key={item.title} className={styles.formuleItem}>
                          <div className={styles.formuleItemMain}>
                            <span className={styles.formuleName}>{item.title}</span>
                            <span className={styles.formuleDots} aria-hidden="true" />
                            <span className={styles.formulePrice}>
                              {item.price.toFixed(2).replace('.', ',')} €
                            </span>
                          </div>
                          {item.description && (
                            <span className={styles.formuleDesc}>{item.description}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Formule Boissons */}
                  <div className={`${styles.formuleGroup} ${styles.formuleDrinkGroup}`}>
                    <div className={styles.formuleGroupHeader}>
                      <span className={styles.formuleGroupTitle}>
                        <span aria-hidden="true">🎁</span>
                        <span>{formulesData.boissons.title}</span>
                      </span>
                      <span className={`${styles.formuleBadge} ${styles.badgeFree}`}>
                        {formulesData.boissons.badge}
                      </span>
                    </div>
                    <p className={styles.formuleSubtext}>
                      Profitez d&apos;une bouteille offerte selon la taille et le nombre de pizzas :
                    </p>
                    <ul className={styles.promoConditionsList}>
                      {formulesData.boissons.conditions.map((condition) => (
                        <li key={condition} className={styles.promoConditionItem}>
                          <span className={styles.conditionCheck} aria-hidden="true">✓</span>
                          <span><strong>{condition}</strong></span>
                        </li>
                      ))}
                    </ul>
                    <div className={styles.rewardBanner}>
                      <span className={styles.rewardIcon} aria-hidden="true">🍾</span>
                      <div className={styles.rewardText}>
                        <span className={styles.rewardTitle}>= 1 bouteille OFFERTE</span>
                        <span className={styles.rewardChoices}>
                          Au choix : {formulesData.boissons.choices.join(', ')}
                        </span>
                      </div>
                    </div>
                    <p className={styles.formuleNotice}>
                      *{formulesData.boissons.note}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Carte des Boissons */}
            <article className={styles.menuCard} id="boissons" aria-labelledby="boissons-title">
              <div className={styles.cardHeader}>
                <h2 id="boissons-title" className={styles.cardTitle}>
                  Boissons &amp; Alcools
                </h2>
                <span className={styles.pageBadge}>Frais &amp; Prêts</span>
              </div>
              <div className={styles.drinksBody}>
                <div className={styles.drinksGrid}>
                  {drinksData.map((group) => (
                    <div key={group.category} className={styles.drinkGroup}>
                      <div className={styles.drinkGroupHeader}>
                        <span className={styles.drinkGroupTitle}>
                          <span aria-hidden="true">{group.icon}</span>
                          <span>{group.category}</span>
                        </span>
                        {group.uniformPrice !== undefined && (
                          <span className={styles.drinkUniformPrice}>
                            {group.uniformPrice.toFixed(2).replace('.', ',')} €
                          </span>
                        )}
                      </div>
                      <ul className={styles.drinkList}>
                        {group.items.map((item) => (
                          <li key={`${group.category}-${item.name}`} className={styles.drinkItem}>
                            <span className={styles.drinkName}>{item.name}</span>
                            <span className={styles.drinkDots} aria-hidden="true" />
                            <span className={styles.drinkPrice}>
                              {item.price % 1 === 0
                                ? `${item.price} €`
                                : `${item.price.toFixed(2).replace('.', ',')} €`}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className={styles.alcoholNotice}>
                  L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération.
                </p>
              </div>
            </article>
          </section>

          <section className={styles.bottomCta}>
            <Typography variant="h2" className={styles.bottomTitle}>Une envie de pizza ?</Typography>
            <p className={styles.bottomText}>
              Livraison 100% gratuite à <strong>Fabrègues</strong> et alentours, ou à emporter au <strong>1 Rue Guynemer</strong> !
            </p>
            <Button href="tel:0467853434" variant="primary">
              Commander au 04 67 85 34 34
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

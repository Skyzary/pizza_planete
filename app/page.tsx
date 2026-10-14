import { Header } from '../components/molecules/Header/Header';
import { Footer } from '../components/molecules/Footer/Footer';
import { Hero } from '../components/organisms/Hero/Hero';
import { Typography } from '../components/atoms/Typography/Typography';
import { Button } from '../components/atoms/Button/Button';
import { PaperCard } from '../components/atoms/PaperCard/PaperCard';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />

        {/* Section Engagements & Services Clés */}
        <section id="avantages" className={`${styles.section} ${styles.servicesSection}`}>
          <div className={styles.container}>
            <div className={styles.servicesHeader}>
              <span className={styles.servicesPill}>Vos Avantages Gourmands</span>
              <Typography variant="h2" className={styles.centerText}>Commandez en Toute Sérénité</Typography>
              <Typography variant="body" className={styles.servicesSubtitle}>
                Chez <strong>Pizza Planète</strong>, savourer une excellente pizza artisanale rime avec simplicité.
                Découvrez nos engagements pour un service sur-mesure et sans mauvaise surprise.
              </Typography>
            </div>

            <div className={styles.servicesGrid}>
              <PaperCard tilt="left" className={styles.serviceCard}>
                <div className={styles.serviceBadgeWrapper}>
                  <span className={`${styles.serviceBadge} ${styles.badgeDelivery}`}>0€ de frais</span>
                </div>
                <div className={styles.serviceIconCircle}>
                  <svg
                    className={styles.serviceSvg}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="5.5" cy="17.5" r="2.5" />
                    <circle cx="17.5" cy="17.5" r="2.5" />
                    <path d="M8 17.5h7" />
                    <path d="M12 17.5V11l4-3h3" />
                    <rect x="2" y="8" width="6" height="6" rx="1" />
                    <path d="M19 8l-2 4h-5" />
                  </svg>
                </div>
                <Typography variant="h3" className={styles.serviceTitle}>Livraison Gratuite</Typography>
                <Typography variant="body" className={styles.serviceDesc}>
                  Faites-vous livrer directement chez vous ou sur votre lieu de travail <strong>sans frais supplémentaires</strong>.
                  Vos pizzas arrivent rapidement dans des caissons isolants professionnels, bien chaudes et croustillantes !
                </Typography>
                <div className={styles.serviceHighlights}>
                  <div className={styles.serviceHighlightItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span><strong>100% Gratuite</strong> (0 € de frais de port)</span>
                  </div>
                  <div className={styles.serviceHighlightItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>Livraison rapide à domicile ou au travail</span>
                  </div>
                  <div className={styles.serviceHighlightItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>Pizzas chaudes et protégées</span>
                  </div>
                </div>
              </PaperCard>

              <PaperCard tilt="none" className={styles.serviceCard}>
                <div className={styles.serviceBadgeWrapper}>
                  <span className={`${styles.serviceBadge} ${styles.badgePayment}`}>Sans Contact &amp; TPE</span>
                </div>
                <div className={styles.serviceIconCircle}>
                  <svg
                    className={styles.serviceSvg}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                    <line x1="6" y1="15" x2="10" y2="15" strokeWidth="2.5" />
                    <path d="M16 14a2 2 0 0 1 0 3" />
                    <path d="M18 12.5a4 4 0 0 1 0 6" />
                  </svg>
                </div>
                <Typography variant="h3" className={styles.serviceTitle}>Paiement par CB</Typography>
                <Typography variant="body" className={styles.serviceDesc}>
                  Plus besoin de chercher des pièces ou de passer au distributeur ! Nos livreurs disposent d&apos;un <strong>terminal bancaire portable (TPE)</strong> sécurisé.
                  Réglez par carte, sans contact ou smartphone en un clin d&apos;œil.
                </Typography>
                <div className={styles.serviceHighlights}>
                  <div className={styles.serviceHighlightItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>Terminal CB mobile lors de la livraison</span>
                  </div>
                  <div className={styles.serviceHighlightItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>Paiement sans contact, Apple Pay &amp; Google Pay</span>
                  </div>
                  <div className={styles.serviceHighlightItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>Disponible aussi sur place</span>
                  </div>
                </div>
              </PaperCard>

              <PaperCard tilt="right" className={styles.serviceCard}>
                <div className={styles.serviceBadgeWrapper}>
                  <span className={`${styles.serviceBadge} ${styles.badgeTickets}`}>Cartes &amp; Chèques</span>
                </div>
                <div className={styles.serviceIconCircle}>
                  <svg
                    className={styles.serviceSvg}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z" />
                    <path d="M9 5v14" strokeDasharray="2 2" />
                    <path d="M13 10h5" />
                    <path d="M13 14h5" />
                  </svg>
                </div>
                <Typography variant="h3" className={styles.serviceTitle}>Tickets Resto</Typography>
                <Typography variant="body" className={styles.serviceDesc}>
                  Utilisez vos <strong>Titres-Restaurant</strong> pour régler vos commandes !
                  Nous acceptons avec plaisir les cartes dématérialisées (Swile, Edenred, Pluxee, Bimpli, Up...) ainsi que les chèques restaurant traditionnels.
                </Typography>
                <div className={styles.serviceHighlights}>
                  <div className={styles.serviceHighlightItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>Cartes titres-restaurant (Swile, Edenred, etc.)</span>
                  </div>
                  <div className={styles.serviceHighlightItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>Chèques papier restaurant acceptés</span>
                  </div>
                  <div className={styles.serviceHighlightItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>Valable 6j/7 midi et soir</span>
                  </div>
                </div>
              </PaperCard>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <div className={styles.container}>
            <Typography variant="h2" className={styles.centerText}>L&apos;Art de la Vraie Pizza</Typography>
            <Typography variant="body" className={styles.leadText}>
              Bienvenue chez <strong>Pizza Planète</strong>, l&apos;incontournable pizzeria où la tradition rencontre l&apos;exigence. 
              Parce que pour nous, une pizza n&apos;est pas juste un repas, c&apos;est une véritable expérience gustative, 
              nous mettons tout notre cœur pour vous préparer les meilleures pizzas de la ville.
            </Typography>
          </div>
        </section>

        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.container}>
            <Typography variant="h2" className={styles.centerText}>Pourquoi nous choisir ?</Typography>
            <div className={styles.features}>
              <PaperCard tilt="left" className={styles.feature}>
                <div className={styles.featureIcon}>🍅</div>
                <Typography variant="h3">Des Ingrédients Sélectionnés</Typography>
                <Typography variant="body">
                  Nous privilégions des produits frais, locaux et de première qualité. Notre sauce tomate est préparée 
                  selon une recette secrète, et notre mozzarella fondante est choisie avec soin pour un goût authentique.
                </Typography>
              </PaperCard>
              <PaperCard tilt="none" className={styles.feature}>
                <div className={styles.featureIcon}>🌾</div>
                <Typography variant="h3">Une Pâte Faite Maison</Typography>
                <Typography variant="body">
                  Pétrie chaque matin sur place par notre chef pizzaiolo, notre pâte mature lentement pour vous garantir 
                  une texture parfaite : croustillante à l&apos;extérieur et incroyablement moelleuse à l&apos;intérieur.
                </Typography>
              </PaperCard>
              <PaperCard tilt="right" className={styles.feature}>
                <div className={styles.featureIcon}>🔥</div>
                <Typography variant="h3">Une Cuisson Maîtrisée</Typography>
                <Typography variant="body">
                  Cuites à la perfection dans notre four traditionnel, nos pizzas développent des arômes uniques 
                  et une croûte irrésistible. Chaque bouchée est un voyage direct vers l&apos;Italie !
                </Typography>
              </PaperCard>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.gallerySection}`}>
          <div className={styles.galleryContainer}>
            <Typography variant="h2" className={styles.centerText}>Nos Pizzas Phares</Typography>
            <div className={styles.gallery}>
              <div className={styles.galleryItem}>
                <Image src="/margarita_white.jpg" alt="Pizza Margarita" width={400} height={400} className={styles.galleryImage} />
                <Typography variant="h3" className={styles.galleryTitle}>Margarita</Typography>
              </div>
              <div className={styles.galleryItem}>
                <Image src="/royale_white.jpg" alt="Pizza Royale" width={400} height={400} className={styles.galleryImage} />
                <Typography variant="h3" className={styles.galleryTitle}>Royale</Typography>
              </div>
              <div className={styles.galleryItem}>
                <Image src="/4_fromages_white.jpg" alt="Pizza 4 Fromages" width={400} height={400} className={styles.galleryImage} />
                <Typography variant="h3" className={styles.galleryTitle}>4 Fromages</Typography>
              </div>
              <div className={styles.galleryItem}>
                <Image src="/savoyarde_white.jpg" alt="Pizza Savoyarde" width={400} height={400} className={styles.galleryImage} />
                <Typography variant="h3" className={styles.galleryTitle}>Savoyarde</Typography>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <Typography variant="h2" className={styles.centerText}>Pour toutes les envies</Typography>
            <div className={styles.splitContent}>
              <PaperCard tilt="left" className={styles.textBlock}>
                <Typography variant="body">
                  Que vous soyez un amateur inconditionnel des <strong>Pizzas Rouges</strong> (base tomate) avec nos classiques 
                  comme la Royale, la Marguerita ou la Mexicaine, ou que vous préfériez la douceur des <strong>Pizzas Blanches</strong> 
                  (base crème) avec la Savoyarde ou la célèbre 4 Fromages, vous trouverez forcément la pizza qui vous fera craquer.
                </Typography>
                <Typography variant="body">
                  Et pour les plus gourmands, toutes nos pizzas sont disponibles en trois tailles différentes : 
                  Normale (1 personne), Grande (2 personnes) ou Familiale (pour partager... ou pas !).
                </Typography>
              </PaperCard>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.menuPreviewSection}`}>
          <div className={styles.container}>
            <Typography variant="h2" className={styles.centerText}>Un Aperçu de la Carte</Typography>
            
            <div className={styles.cardsRow}>
              <PaperCard tilt="left" className={styles.pizzaCard}>
                <Typography variant="h3" className={styles.pizzaName}>Royale</Typography>
                <Typography variant="caption" className={styles.pizzaDesc}>Tomate, jambon, champignons, œuf, fromage, olives</Typography>
                <div className={styles.pizzaPrice}>à partir de 9.50€</div>
              </PaperCard>
              
              <PaperCard tilt="none" className={styles.pizzaCard}>
                <Typography variant="h3" className={styles.pizzaName}>4 Fromages</Typography>
                <Typography variant="caption" className={styles.pizzaDesc}>Crème, chèvre, roquefort, mozzarella, fromage, olives</Typography>
                <div className={styles.pizzaPrice}>à partir de 10.00€</div>
              </PaperCard>

              <PaperCard tilt="right" className={styles.pizzaCard}>
                <Typography variant="h3" className={styles.pizzaName}>Méditerranéenne</Typography>
                <Typography variant="caption" className={styles.pizzaDesc}>Tomate, thon, câpres, oignons, fromage, olives</Typography>
                <div className={styles.pizzaPrice}>à partir de 9.50€</div>
              </PaperCard>
            </div>
            
            <div className={styles.showMoreContainer}>
              <Link href="/menu">
                <Button variant="primary">Voir tout le menu</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.ctaSection}`}>
          <div className={styles.container}>
            <Typography variant="h2" className={styles.ctaTitle}>Prêt à vous régaler ?</Typography>
            <Typography variant="body" className={styles.ctaText}>
              N&apos;attendez plus ! Consultez notre carte ou appelez-nous directement pour commander. 
              Votre prochaine pizza artisanale n&apos;est qu&apos;à un coup de téléphone.
            </Typography>
            <div className={styles.ctaPerks}>
              <div className={styles.ctaPerk}>
                <span className={styles.ctaPerkIcon} aria-hidden="true">🛵</span>
                <span>Livraison 100% Gratuite</span>
              </div>
              <div className={styles.ctaPerk}>
                <span className={styles.ctaPerkIcon} aria-hidden="true">💳</span>
                <span>Paiement par CB à domicile</span>
              </div>
              <div className={styles.ctaPerk}>
                <span className={styles.ctaPerkIcon} aria-hidden="true">🎫</span>
                <span>Titres-Restaurant acceptés</span>
              </div>
            </div>
            <div className={styles.ctaButtons}>
              <Link href="/menu">
                <Button variant="primary">Découvrir le Menu</Button>
              </Link>
              <a href="tel:0467853434">
                <Button variant="secondary">Commander au 04 67 85 34 34</Button>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

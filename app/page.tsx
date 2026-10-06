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
        
        <section className={styles.section}>
          <div className={styles.container}>
            <Typography variant="h2" className={styles.centerText}>L'Art de la Vraie Pizza</Typography>
            <Typography variant="body" className={styles.leadText}>
              Bienvenue chez <strong>Pizza Planète</strong>, l'incontournable pizzeria où la tradition rencontre l'exigence. 
              Parce que pour nous, une pizza n'est pas juste un repas, c'est une véritable expérience gustative, 
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
                  une texture parfaite : croustillante à l'extérieur et incroyablement moelleuse à l'intérieur.
                </Typography>
              </PaperCard>
              <PaperCard tilt="right" className={styles.feature}>
                <div className={styles.featureIcon}>🔥</div>
                <Typography variant="h3">Une Cuisson Maîtrisée</Typography>
                <Typography variant="body">
                  Cuites à la perfection dans notre four traditionnel, nos pizzas développent des arômes uniques 
                  et une croûte irrésistible. Chaque bouchée est un voyage direct vers l'Italie !
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
              N'attendez plus ! Consultez notre carte ou appelez-nous directement pour commander. 
              Votre prochaine pizza préférée n'est qu'à un coup de téléphone.
            </Typography>
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

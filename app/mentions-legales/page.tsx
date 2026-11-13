import { Header } from '../../components/molecules/Header/Header';
import { Footer } from '../../components/molecules/Footer/Footer';
import { Typography } from '../../components/atoms/Typography/Typography';
import { PaperCard } from '../../components/atoms/PaperCard/PaperCard';
import { Button } from '../../components/atoms/Button/Button';
import styles from './page.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales et politique de confidentialité de la pizzeria Pizza Planets à Fabrègues (34690).',
  alternates: {
    canonical: '/mentions-legales',
  },
};

export default function MentionsLegales() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <PaperCard tilt="none">
            <Typography variant="h1" className={styles.title}>Mentions Légales</Typography>
            
            <div className={styles.content}>
              <Typography variant="h3">1. Éditeur du site</Typography>
              <Typography variant="body">
                <strong>Pizza Planets</strong><br />
                Adresse : 1 Rue Guynemer, 34690 Fabrègues, France<br />
                Téléphone : <a href="tel:0467853434" className={styles.inlineLink}>04 67 85 34 34</a><br />
                Email : contact@pizza-planete.fr
              </Typography>

              <Typography variant="h3">2. Hébergement</Typography>
              <Typography variant="body">
                Ce site est hébergé par <strong>Cloudflare, Inc.</strong>, situé au 101 Townsend St, San Francisco, CA 94107, États-Unis (www.cloudflare.com).
              </Typography>

              <Typography variant="h3">3. Propriété intellectuelle</Typography>
              <Typography variant="body">
                L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
              </Typography>

              <Typography variant="h3">4. Protection des données personnelles (RGPD)</Typography>
              <Typography variant="body">
                Pizza Planets s&apos;engage à ce que la collecte et le traitement de vos données, effectués à partir 
                du site pizza-planete.fr, soient conformes au règlement général sur la protection des données (RGPD).
                Aucune information personnelle n&apos;est collectée à votre insu ni cédée à des tiers.
              </Typography>

              <div className={styles.actions}>
                <Button href="/menu" variant="primary">
                  Voir le Menu
                </Button>
                <Button href="/" variant="secondary">
                  Retour à l&apos;Accueil
                </Button>
              </div>
            </div>
          </PaperCard>
        </div>
      </main>
      <Footer />
    </div>
  );
}

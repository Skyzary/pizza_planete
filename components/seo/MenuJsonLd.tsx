import { pizzaData } from '../../pizza_data';

export const MenuJsonLd = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Carte Pizza Planète Fabrègues',
    description: 'Menu complet des pizzas artisanales de Pizza Planète à Fabrègues.',
    inLanguage: 'fr',
    hasMenuSection: pizzaData.map((category) => ({
      '@type': 'MenuSection',
      name: category.category,
      hasMenuItem: category.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.ingredients,
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: item.prices[0].toFixed(2),
          highPrice: item.prices[item.prices.length - 1].toFixed(2),
          offerCount: item.prices.length,
        },
      })),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

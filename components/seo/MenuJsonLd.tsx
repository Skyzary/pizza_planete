import { pizzaData, drinksData, formulesData } from '../../pizza_data';

export const MenuJsonLd = () => {
  const pizzaSections = pizzaData.map((category) => ({
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
  }));

  const formuleSection = {
    '@type': 'MenuSection',
    name: 'Formules Spéciales',
    description: 'Formules pizzas 33 cm et offres boissons',
    hasMenuItem: formulesData.pizzas.items.map((formule) => ({
      '@type': 'MenuItem',
      name: formule.title,
      description: formule.description,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: formule.price.toFixed(2),
      },
    })),
  };

  const drinkSections = drinksData.map((category) => ({
    '@type': 'MenuSection',
    name: category.category,
    hasMenuItem: category.items.map((item) => ({
      '@type': 'MenuItem',
      name: item.name,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: item.price.toFixed(2),
      },
    })),
  }));

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Carte Pizza Planets Fabrègues',
    description: 'Menu complet des pizzas artisanales, formules et boissons de Pizza Planets à Fabrègues.',
    inLanguage: 'fr',
    hasMenuSection: [...pizzaSections, formuleSection, ...drinkSections],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

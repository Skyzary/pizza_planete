export const RestaurantJsonLd = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FastFoodRestaurant',
    '@id': 'https://pizza-planete.fr/#restaurant',
    name: 'Pizza Planète',
    alternateName: ['Pizza Planets', 'Pizza Planete Fabrègues'],
    description:
      'Pizzeria artisanale à Fabrègues. Plus de 50 recettes de pizzas rouges, blanches et panachées. Livraison 100% gratuite, paiement par CB et titres-restaurant acceptés.',
    url: 'https://pizza-planete.fr',
    telephone: '+33467853434',
    image: 'https://pizza-planete.fr/banner.jpg',
    logo: 'https://pizza-planete.fr/icon.svg',
    priceRange: '€€',
    servesCuisine: ['Pizza', 'Italienne', 'Artisanale'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 Rue Guynemer',
      addressLocality: 'Fabrègues',
      postalCode: '34690',
      addressRegion: 'Hérault',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.5498,
      longitude: 3.7789,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '18:00',
        closes: '21:30',
      },
    ],
    hasMenu: 'https://pizza-planete.fr/menu',
    paymentAccepted: 'Cash, Credit Card, Titres-Restaurant',
    currenciesAccepted: 'EUR',
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Fabrègues',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Cournonterral',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Saussan',
      },
    ],
    hasDeliveryMethod: true,
    acceptsReservations: false,
    sameAs: [
      'https://www.facebook.com/pizzaplanetsfabregues/?locale=fr_FR',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

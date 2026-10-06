'use client';

import { useState } from 'react';
import { Header } from '../../components/molecules/Header/Header';
import { Footer } from '../../components/molecules/Footer/Footer';
import { Typography } from '../../components/atoms/Typography/Typography';
import { SearchBar } from '../../components/molecules/SearchBar/SearchBar';
import { MenuSection } from '../../components/organisms/MenuSection/MenuSection';
import styles from './page.module.scss';

const pizzaData = [
  {
    category: 'Nos pizzas rouges',
    items: [
      { name: 'Margarita', ingredients: 'Tomate, fromage, olives', prices: [7.00, 9.50, 11.50] },
      { name: 'Romana', ingredients: 'Tomate, jambon, fromage, olives', prices: [8.00, 10.50, 12.50] },
      { name: 'Reine', ingredients: 'Tomate, jambon, champignons, fromage, olives', prices: [9.00, 11.50, 13.50] },
      { name: 'Royale', ingredients: 'Tomate, jambon, champignons, œuf, fromage, olives', prices: [9.50, 12.00, 14.00] },
      { name: 'Méditerranéenne', ingredients: 'Tomate, thon, câpres, oignons, fromage, olives', prices: [9.50, 12.00, 14.00] },
      { name: 'Catalane', ingredients: 'Tomate, thon, poivron, maïs, oignons, fromage, olives', prices: [9.50, 12.00, 14.00] },
    ]
  },
  {
    category: 'Nos pizzas blanches',
    items: [
      { name: '4 Fromages', ingredients: 'Crème, chèvre, roquefort, mozzarella, fromage, olives', prices: [10.00, 12.50, 15.50] },
      { name: 'Savoyarde', ingredients: 'Crème, lardons, pommes de terre, reblochon, fromage, olives', prices: [10.50, 13.00, 16.00] },
      { name: 'Chèvre Miel', ingredients: 'Crème, chèvre, miel, noix, fromage, olives', prices: [10.00, 12.50, 15.50] },
    ]
  }
];

export default function Menu() {
  const [search, setSearch] = useState('');

  const filteredData = pizzaData.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) || 
      item.ingredients.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Typography variant="h1" className={styles.pageTitle}>Notre Menu</Typography>
          <SearchBar 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Chercher une pizza, un ingrédient..."
          />
          
          {filteredData.length > 0 ? (
            filteredData.map((section, idx) => (
              <MenuSection key={idx} title={section.category} items={section.items} />
            ))
          ) : (
            <Typography variant="body" className={styles.noResults}>
              Aucune pizza trouvée pour votre recherche.
            </Typography>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

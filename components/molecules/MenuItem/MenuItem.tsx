import { Typography } from '../../atoms/Typography/Typography';
import styles from './MenuItem.module.scss';

export interface MenuItemProps {
  name: string;
  ingredients: string;
  prices: number[]; // e.g. [7.00, 9.50, 11.50]
}

export const MenuItem = ({ name, ingredients, prices }: MenuItemProps) => {
  return (
    <div className={styles.menuItem}>
      <div className={styles.headerRow}>
        <Typography variant="h3" className={styles.name}>{name}</Typography>
        <div className={styles.dots}></div>
        <div className={styles.prices}>
          {prices.map((price, index) => (
            <span key={index} className={styles.price}>{price.toFixed(2)}€</span>
          ))}
        </div>
      </div>
      <Typography variant="caption" className={styles.ingredients}>{ingredients}</Typography>
    </div>
  );
};

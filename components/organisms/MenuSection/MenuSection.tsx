import { Typography } from '../../atoms/Typography/Typography';
import { MenuItem, MenuItemProps } from '../../molecules/MenuItem/MenuItem';
import { PaperCard } from '../../atoms/PaperCard/PaperCard';
import styles from './MenuSection.module.scss';

interface MenuSectionProps {
  title: string;
  items: MenuItemProps[];
}

export const MenuSection = ({ title, items }: MenuSectionProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <PaperCard tilt="none">
        <div className={styles.header}>
          <Typography variant="h2" className={styles.title}>{title}</Typography>
        </div>
        <div className={styles.list}>
          {items.map((item, idx) => (
            <MenuItem key={idx} {...item} />
          ))}
        </div>
      </PaperCard>
    </section>
  );
};

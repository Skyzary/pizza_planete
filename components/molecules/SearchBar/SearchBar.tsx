import { ChangeEvent } from 'react';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const SearchBar = ({ value, onChange, placeholder = 'Rechercher une pizza...' }: SearchBarProps) => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputWrapper}>
        <span className={styles.icon}>🔍</span>
        <input
          type="search"
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-label="Rechercher une pizza"
        />
      </div>
    </div>
  );
};

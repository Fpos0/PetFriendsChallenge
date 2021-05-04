import { ChangeEvent, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './styles.module.scss';

export function SearchBar() {
  const [searchText, setSearchText] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="search-input">
          <input
            type="text"
            value={searchText}
            placeholder="O que você procura?"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <BsSearch size={15} />
      </div>
    </div>
  );
}

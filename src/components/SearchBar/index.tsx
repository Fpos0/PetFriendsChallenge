import { ChangeEvent, useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { ProductsContext } from '../../context/ProductsContext';
import styles from './styles.module.scss';

export function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const { setProductsByInput, setProductsByCategory } = useContext(
    ProductsContext,
  );
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const searchInput = e.target.value;
    setSearchText(searchInput);
    if (searchInput) {
      setProductsByInput(searchInput);
    } else {
      setProductsByCategory('Sugestao do Vendedor');
    }
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
        <BsSearch size={20} />
      </div>
    </div>
  );
}

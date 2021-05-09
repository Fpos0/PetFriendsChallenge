import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import styles from './styles.module.scss';
// const { productsDisplay, LoadData } = useContext(ProductsContext);

export function CategoryMenu() {
  const { setProductsByCategory } = useContext(ProductsContext);
  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={() => setProductsByCategory('Sugestao do Vendedor')}
      >
        Sugestão do Vendedor
      </button>

      <button type="button" onClick={() => setProductsByCategory('Brinquedos')}>
        Brinquedos
      </button>

      <button
        type="button"
        onClick={() => setProductsByCategory('Camas e Casinhas')}
      >
        Camas e Casinhas
      </button>

      <button type="button" onClick={() => setProductsByCategory('Coleiras')}>
        Coleiras
      </button>

      <button
        type="button"
        onClick={() => setProductsByCategory('Ossos e Petiscos')}
      >
        Ossos e Petiscos
      </button>

      <button
        type="button"
        onClick={() => setProductsByCategory('Ossos e Petiscos')}
      >
        Saúde
      </button>
    </div>
  );
}

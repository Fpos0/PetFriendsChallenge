import { FiClock } from 'react-icons/fi';
import { RiMotorbikeFill } from 'react-icons/ri';
import { HiShoppingCart } from 'react-icons/hi';
import { useContext } from 'react';
import styles from './styles.module.scss';
import { ProductsContext } from '../../context/ProductsContext';
// const { productsDisplay, LoadData } = useContext(ProductsContext);

export function Header() {
  const { cartInfo } = useContext(ProductsContext);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerAll}>
        <div className={styles.logo}>
          <img src="/headerLogo.svg" alt="PetFriends logo" />
        </div>

        <div className={styles.headerInfo}>
          <div className={styles.topInfo}>
            <h2>Pet Friends Acessories</h2>
            <p>
              <FiClock size={12} />
              ABERTO AGORA
            </p>
          </div>

          <div className={styles.midInfo}>
            <p>
              Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa
              - PB{' '}
            </p>
          </div>

          <div className={styles.botInfo}>
            <p>
              <span>
                <RiMotorbikeFill size={15} /> Delivery:
              </span>
              35m - 1h:40m
            </p>
            <p>
              <span>Entrega:</span>À partir de R$ 3,00
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cartContainer}>
        <div>
          <p>
            <HiShoppingCart size={25} />
            <span>{cartInfo.totalProducts} Produtos no Carrinho</span>
          </p>
          <p>R$ {cartInfo.totalValue}</p>
        </div>
      </div>
    </div>
  );
}

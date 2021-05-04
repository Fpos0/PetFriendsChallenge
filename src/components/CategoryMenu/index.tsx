import styles from './styles.module.scss';

export function CategoryMenu() {
  return (
    <div className={styles.container}>
      <button type="button">Sugestão do Vendedor</button>

      <button type="button">Brinquedos</button>

      <button type="button">Camas e Casinhas</button>

      <button type="button">Coleiras</button>

      <button type="button">Ossos e Petiscos</button>
    </div>
  );
}

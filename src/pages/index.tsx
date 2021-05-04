// import Head from 'next/head';
// import Image from 'next/image';
import { CategoryMenu } from '../components/CategoryMenu';
import { SearchBar } from '../components/SearchBar';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <CategoryMenu />
      <div className={styles.container}>
        <div>
          <SearchBar />
        </div>
        -tabela de proicurar -listagem de produtos (sugestao do vendedor)
        (FaCartPlus)
      </div>
    </>
  );
}

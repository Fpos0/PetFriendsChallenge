/* eslint-disable react/no-unused-prop-types */
// import Head from 'next/head';
// import Image from 'next/image';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import { CategoryMenu } from '../components/CategoryMenu';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { ProductsContext } from '../context/ProductsContext';
import { api } from '../services/api';
import styles from './home.module.scss';

interface ProductData {
  id: string;
  title: string;
  subtitle: string;
  about: string;
  imgURL: string;
  price: number;
  category: string;
}

interface HomeProps {
  data: ProductData[];
}
export default function Home({ data }: HomeProps) {
  const { productsDisplay, LoadData, categoryDisplay } = useContext(
    ProductsContext,
  );
  const [dataSent, setDataSent] = useState(false);
  useEffect(() => {
    if (!dataSent) {
      LoadData(data);
      setDataSent(true);
    }
  }, [LoadData, data, dataSent]);

  function makeCardJSX({
    id,
    title,
    subtitle,
    imgURL,
    price,
    about,
  }: ProductData) {
    return (
      <ProductCard
        key={id}
        title={title}
        subtitle={subtitle}
        imgURL={imgURL}
        price={price}
        about={about}
      />
    );
  }
  // console.log(productsDisplay);
  return (
    <div className={styles.FullContainer}>
      <Head>
        <title>Pet Friends</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.topMiddle}>
          <div className={styles.categoryMenu}>
            <CategoryMenu />
          </div>

          <div className={styles.searchBar}>
            <SearchBar />
          </div>
        </div>
        <h2>{categoryDisplay}</h2>
        <div className={styles.productsDisplayStyle}>
          {productsDisplay.map(product => {
            return makeCardJSX(product);
          })}
        </div>
      </div>
    </div>
  );
}
// {productsDisplay.map(product => {
//   return (

//   )
// })}
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('products');

  return {
    props: {
      data,
    },
  };
};

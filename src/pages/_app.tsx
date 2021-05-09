/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProductsProvider } from '../context/ProductsContext';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <ProductsProvider>
          <main>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </main>
        </ProductsProvider>
      </div>
    </>
  );
}

export default MyApp;

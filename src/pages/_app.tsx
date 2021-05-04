/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Header } from '../components/Header';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;

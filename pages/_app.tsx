import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

import { store } from '@store/index';
import { Provider } from 'react-redux';
// import 'react-toastify/dist/ReactToastify.css';

// import '@splidejs/react-splide/css/skyblue';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
}

export default MyApp;

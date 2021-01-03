import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import { AppProps } from 'next/app';

import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="flex flex-col min-h-screen w-full max-w-6xl p-4 mx-auto">
    <AppHeader />
    <main className="flex-1">
      <Component {...pageProps} />
    </main>
    <AppFooter />
  </div>
);

export default MyApp;

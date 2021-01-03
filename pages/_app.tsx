import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <main>
      <Component {...pageProps} />
    </main>
  </div>
);

export default MyApp;

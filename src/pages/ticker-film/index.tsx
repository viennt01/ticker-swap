import TickerFilmPage from '@/components/ticker-film-page';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function TickerFilm() {
  return (
    <>
      <Head>
        <title>Ticker Swap | Film</title>
      </Head>
      <main className={inter.className}>
        <TickerFilmPage />
      </main>
    </>
  );
}

export default TickerFilm;

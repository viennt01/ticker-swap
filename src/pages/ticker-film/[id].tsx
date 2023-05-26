import DetailTickerFilmPage from '@/components/detail-film-page';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function DetailFilm() {
  return (
    <>
      <Head>
        <title>Ticker Swap | Film</title>
      </Head>
      <main className={inter.className}>
        <DetailTickerFilmPage />
      </main>
    </>
  );
}

export default DetailFilm;

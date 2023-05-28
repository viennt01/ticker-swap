import DetailTickerFilmPage from '@/components/detail-page';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function DetailFilm() {
  return (
    <>
      <Head>
        <title>Ticker Swap | Detail</title>
      </Head>
      <main className={inter.className}>
        <DetailTickerFilmPage />
      </main>
    </>
  );
}

export default DetailFilm;

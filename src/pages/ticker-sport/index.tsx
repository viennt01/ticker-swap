import TicketSportPage from '@/components/ticker-sport-page';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function TickerSport() {
  return (
    <>
      <Head>
        <title>Ticket Swap | Sport</title>
      </Head>
      <main className={inter.className}>
        <TicketSportPage />
      </main>
    </>
  );
}

export default TickerSport;

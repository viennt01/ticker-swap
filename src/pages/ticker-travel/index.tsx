import TicketTravelPage from '@/components/ticker-travel-page';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function TickerTravel() {
  return (
    <>
      <Head>
        <title>Ticket Swap | Sport</title>
      </Head>
      <main className={inter.className}>
        <TicketTravelPage />
      </main>
    </>
  );
}

export default TickerTravel;

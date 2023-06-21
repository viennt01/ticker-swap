import MyTicketBuyerPage from '@/components/my-ticket-buyer-page';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function MyTicket() {
  return (
    <>
      <Head>
        <title>Ticker Swap | My ticket buyer</title>
      </Head>
      <main className={inter.className}>
        <MyTicketBuyerPage />
      </main>
    </>
  );
}

export default MyTicket;

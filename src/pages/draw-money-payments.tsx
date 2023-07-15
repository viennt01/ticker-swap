import DrawMoneyPaymentsPage from '@/components/draw-money-payments-page';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function MyTicket() {
  return (
    <>
      <Head>
        <title>Ticket Swap | Draw Money Payment</title>
      </Head>
      <main className={inter.className}>
        <DrawMoneyPaymentsPage />
      </main>
    </>
  );
}

export default MyTicket;

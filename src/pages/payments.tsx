import PaymentPage from '@/components/payments';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function MyTicket() {
  return (
    <>
      <Head>
        <title>Ticket Swap | Payments</title>
      </Head>
      <main className={inter.className}>
        <PaymentPage />
      </main>
    </>
  );
}

export default MyTicket;

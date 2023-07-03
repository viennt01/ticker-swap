import CartPage from '@/components/cart';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function MyTicket() {
  return (
    <>
      <Head>
        <title>Ticket Swap | Cart</title>
      </Head>
      <main className={inter.className}>
        <CartPage />
      </main>
    </>
  );
}

export default MyTicket;

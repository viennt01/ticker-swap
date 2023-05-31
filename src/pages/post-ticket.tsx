import PostTicketPage from '@/components/post-ticket-page';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function Transaction() {
  return (
    <>
      <Head>
        <title>Ticker Swap | Transaction</title>
      </Head>
      <main className={inter.className}>
        <PostTicketPage />
      </main>
    </>
  );
}

export default Transaction;

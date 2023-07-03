import MyTicketPage from '@/components/my-ticket-page';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function MyTicket() {
  return (
    <>
      <Head>
        <title>Ticket Swap | My ticket</title>
      </Head>
      <main className={inter.className}>
        <MyTicketPage />
      </main>
    </>
  );
}

export default MyTicket;

import InformationPage from '@/components/information';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function MyTicket() {
  return (
    <>
      <Head>
        <title>Ticket Swap | Information</title>
      </Head>
      <main className={inter.className}>
        <InformationPage />
      </main>
    </>
  );
}

export default MyTicket;

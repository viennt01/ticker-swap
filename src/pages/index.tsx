import HomePage from '@/components/home';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function Home() {
  return (
    <>
      <Head>
        <title>Ticket Swap | Home</title>
      </Head>
      <main className={inter.className}>
        <HomePage />
      </main>
    </>
  );
}

export default Home;

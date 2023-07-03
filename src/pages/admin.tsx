import AdminPage from '@/components/admin';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function Admin() {
  return (
    <>
      <Head>
        <title>Ticket Swap | Admin</title>
      </Head>
      <main className={inter.className}>
        <AdminPage />
      </main>
    </>
  );
}

export default Admin;

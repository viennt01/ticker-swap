import L from '@/components/login-page/login-page';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function Login() {
  return (
    <>
      <Head>
        <title>Ticket Swap | Login</title>
      </Head>
      <main className={inter.className}>
        <L />
      </main>
    </>
  );
}

const LoginPage = Login;

export default LoginPage;

import RegisterPage from '@/components/register-page';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function Login() {
  return (
    <>
      <Head>
        <title>Ticker Swap | Register</title>
      </Head>
      <main className={inter.className}>
        <RegisterPage />
      </main>
    </>
  );
}

const LoginPage = Login;

export default LoginPage;

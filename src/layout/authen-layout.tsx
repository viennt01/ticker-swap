import React from 'react';
import { Layout } from 'antd';
import style from './authen-layout.module.scss';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import Head from 'next/head';

interface Props {
  children: React.ReactNode;
}

export function AppLayout(props: Props) {
  return (
    <Layout className="app-layout">
      <Head>
        <link rel="favicon" href="/images/logo.png" />
        <link rel="shortcut icon" href="/images/logo.png" />
      </Head>
      <AppHeader />
      <Layout>
        <Layout>
          <main className={style.contentContainer}>{props.children}</main>
        </Layout>
      </Layout>
      <AppFooter />
    </Layout>
  );
}

import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

const Home: NextPage = function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello World!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Hello World!</h1>
    </div>
  );
};

export default Home;

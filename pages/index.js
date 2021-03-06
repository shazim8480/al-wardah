import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Al-Wardah</title>
        <meta name="description" content="The Best Perfume Shop in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

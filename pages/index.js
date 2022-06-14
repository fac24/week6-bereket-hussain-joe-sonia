import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "../src/database/model";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={"/products/" + product.name}>
                <a>
                  <h2>{product.name}</h2>
                </a>
              </Link>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

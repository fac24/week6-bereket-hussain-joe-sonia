// import Layout from "../../components/layout";
import { getProduct } from "../../src/database/model";
import Head from "next/head";

export async function getServerSideProps({ params }) {
  const productData = await getProduct(params.name);
  return {
    props: {
      productData,
    },
  };
}

export default function Product({ productData }) {
  return (
    <>
      <Head>
        <title>{productData.name}</title>
      </Head>
      <section>
        <h1>{productData.name}</h1>
        <p>
          Price: <b>{productData.price}</b>
        </p>
        <p>{productData.description}</p>
      </section>
    </>
  );
}

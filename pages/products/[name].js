// import Layout from "../../components/layout";
import { getProduct } from "../../src/database/model";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export async function getServerSideProps({ params }) {
  const productData = await getProduct(params.name);
  return {
    props: {
      productData,
    },
  };
}
// export let basket = [];

export default function Product({ productData }) {
  const [quantityState, setQuantity] = useState(1);

  return (
    <>
      <Head>
        <title>{productData.name}</title>
      </Head>
      <Link href="/">
        <a className="back-to-all">&larr; Back to all products</a>
      </Link>
      <section>
        <h2>{productData.name}</h2>
        <p>
          Price: <b>{productData.price}</b> per unit
        </p>
        <form action="../api/form" method="post">
          <input
            id="productId"
            name="productId"
            type="hidden"
            value={productData.id}
          />

          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            value={quantityState}
            min="1"
            max="1000"
            required
            onChange={(event) => setQuantity(event.target.value)}
          />
          <input type="submit" value="Add to basket" />
        </form>
        <p>{productData.description}</p>
      </section>
    </>
  );
}

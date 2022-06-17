import Link from "next/link";
import { useState, useEffect } from "react";
import { getProductBasedOnId } from "../../src/database/model";

export async function getServerSideProps() {
  const myFunction = async () => {
    let itemIds = [];
    let quantity = [];
    const response = await fetch(`${process.env.BASE_URL}/api/form`);
    const data = await response.json();

    let items = data;

    // Sort the products-in-basket array by product id (ascending)
    items.sort((a, b) => a.product_id - b.product_id);

    items.map((items) => {
      itemIds.push(items.product_id);
      quantity.push(items.quantity);
    });
    const products = await getProductBasedOnId(itemIds);

    return {
      props: {
        products: products,
        quantity: quantity,
      },
    };
  };

  return await myFunction();
}

export default function Basket({ products, quantity }) {
  return (
    <>
      <h2>My basket</h2>
      <Link href="/">
        <a>Continue Shopping</a>
      </Link>

      <div>
        {products.map((product, index) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>quantity: {quantity[index]}</p>
          </div>
        ))}
      </div>
    </>
  );
}

//break basket into smaller components
//basket ARRay
//basket icon
//basket table
//add function (for the sum?)/ logic
// multiply also? for the quantity

// map to render selected/stored items in the basket
//use ID from  basket array to grab product info from the databse

// SELECT * FROM products WHERE id=$1

//map =>{ inject into the table databse }

//

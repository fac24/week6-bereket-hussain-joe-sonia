import Link from "next/link";
import { useState, useEffect } from "react";
import { getProductBasedOnId } from "../../src/database/model";

let itemIds = [];
let quantity = [];

let items = [];

const fetchItems = async () => {
  const response = await fetch("/api/form");
  const data = await response.json();
  console.log(data);
  items = data;
};

items.map((items) => {
  itemIds.push(items.product_id);
  quantity.push(items.quantity);
});

export async function getServerSideProps() {
  const products = await getProductBasedOnId(itemIds);
  return {
    props: {
      products,
    },
  };
}

export default function Basket({ products }) {
  return (
    <>
      <button onClick={fetchItems}>fetch</button>
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

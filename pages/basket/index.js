import Link from "next/link";
import { getProductBasedOnId } from "../../src/database/model";

const basketArray = [
  { product_id: 1, quantity: 2 },
  { product_id: 3, quantity: 1 },
  { product_id: 4, quantity: 1 },
  { product_id: 5, quantity: 2 },
];

export async function getServerSideProps() {
  const productsInBasket = basketArray.map(async (product) => {
    // console.log(`product id: ${product.product_id}`);
    // return await getProductBasedOnId(product.product_id);
    return "hiyaa";
  });

  // const productsInBasket = "hello";

  return {
    props: {
      productsInBasket,
    },
  };
}

export default function Basket({ productsInBasket }) {
  console.log(productsInBasket);

  return (
    <>
      <h2>My basket</h2>
      <Link href="/">
        <a>Continue Shopping</a>
      </Link>
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

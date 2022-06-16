import Link from "next/link";
import { getProductBasedOnId } from "../../src/database/model";

// await getProductBasedOnId(id)

// export async function getServerSideProps() {
//   const products = basketArray.map(async (item) => {
//     let itemID = item.product_id;
//     return await getProductBasedOnId(itemID);
//   });
//   console.log(products);
//   return {
//     props: {
//       products,
//     },
//   };
// }

const basketArray = [
  { product_id: 1, quantity: 2 },
  { product_id: 3, quantity: 1 },
  { product_id: 4, quantity: 1 },
  { product_id: 5, quantity: 3 },
];
let itemIds = [];
let quantity = [];

basketArray.map((items) => {
  itemIds.push(items.product_id);
  quantity.push(items.quantity);

  // console.log(itemIds);
});

export async function getServerSideProps() {
  // console.log(itemIds);

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

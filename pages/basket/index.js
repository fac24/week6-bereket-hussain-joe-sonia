import Link from "next/link";
import { getProductBasedOnId } from "../../src/database/model";

const basketArray = [
  { product_id: 1, quantity: 2 },
  { product_id: 3, quantity: 1 },
  { product_id: 4, quantity: 1 },
  { product_id: 5, quantity: 2 },
];

export async function getServerSideProps() {
  // There are lots of ways of doing this.
  // This is just one, and maybe not the best one! :B

  // Make an array of promises for each DB query.
  // (Note that the arrow callback function for map is async.)
  const productsInBasket = basketArray.map(async (product) => {
    return await getProductBasedOnId(product.product_id);
  });

  // Use Promise.all to resolve each promise in above array.
  // Return what Promise.all returns, which is the required props obj.
  return Promise.all(productsInBasket).then((resolve) => {
    return {
      props: {
        productsInBasket: resolve,
      },
    };
  });
}

export default function Basket({ productsInBasket }) {
  return (
    <>
      <h2>My basket</h2>
      <Link href="/">
        <a>Continue Shopping</a>
      </Link>
      <table>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Sub-total</td>
        </tr>
        {productsInBasket.map((productInBasket, index) => (
          <tr key={productInBasket.id}>
            <td>{productInBasket.name}</td>
            <td>£{productInBasket.price.substring(1)}</td>
            <td>{basketArray[index].quantity}</td>
            <td>
              £
              {Number(basketArray[index].quantity) *
                Number(productInBasket.price.substring(1))}
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

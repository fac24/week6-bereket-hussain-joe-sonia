import { basketItems } from "../../data/basketItems";

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // console.log(`\n\nmy log\n\n`);
  // console.log(req);
  // console.log(req.method);
  // console.log(`\n\nend of my log\n\n`);

  if (req.method === "GET") {
    res.status(200).json(basketItems);
  } else if (req.method === "POST") {
    // console.log("hello world");

    // basketItems.map((item) => {
    //   if (item.product_id === Number(body.productId)) {
    //     item.quantity = item.quantity + Number(body.quantity);
    //   }
    // });

    let updateExistingItem = false;

    for (let i = 0; i < basketItems.length; i++) {
      if (basketItems[i].product_id === Number(body.productId)) {
        basketItems[i].quantity =
          basketItems[i].quantity + Number(body.quantity);
        updateExistingItem = true;
        break;
      }
    }

    if (updateExistingItem === false) {
      basketItems.push({
        product_id: Number(body.productId),
        quantity: Number(body.quantity),
      });
    }

    res.redirect("/basket");
  }
}

//

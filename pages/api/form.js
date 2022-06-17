import { basketItems } from "../../data/basketItems";

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  if (req.method === "GET") {
    res.status(200).json(basketItems);
  } else if (req.method === "POST") {
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

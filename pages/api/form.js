import { basketItems } from "../../data/basketItems";

export default function handler(req, res) {
  // Get data submitted in request's body.
  //   const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  //   console.log("body: ", body);

  //   // Guard clause checks for first and last name,
  //   // and returns early if they are not found
  //   if (!body.productId || !body.quantity) {
  //     // Sends a HTTP bad request error code
  //     return res
  //       .status(400)
  //       .json({ id: body.productId, quantity: body.quantity });
  //   }
  // Found the name.
  // Sends a HTTP success code
  res.status(200).json(basketItems);
}

//{ id: body.productId, quantity: body.quantity }

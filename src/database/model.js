const db = require("./connection.js");

async function getProducts() {
  const SELECT_PRODUCTS = `
    SELECT id, name, description, price, image FROM 
    products;
    `;
  const products = await db.query(SELECT_PRODUCTS);
  return products.rows;
}

async function getProduct(name) {
  const SELECT_PRODUCT = `SELECT id, name, description, price, image FROM products WHERE name = $1`;
  const product = await db.query(SELECT_PRODUCT, [name]);
  return product.rows[0];
}

async function getProductBasedOnId(id) {
  const SELECT_PRODUCT = `SELECT * FROM products WHERE id = $1`;
  const product = await db.query(SELECT_PRODUCT, [id]);
  return product.rows[0];
}

module.exports = {
  getProducts,
  getProduct,
  getProductBasedOnId,
};

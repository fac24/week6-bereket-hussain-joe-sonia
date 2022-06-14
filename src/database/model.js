const db = require("./connection.js");

async function getProducts() {
    const SELECT_PRODUCTS= `
    SELECT id, name, description, price FROM 
    products;
    `
    const products = await db.query(SELECT_PRODUCTS);
    return products.rows; 
}

module.exports = {
    getProducts
}

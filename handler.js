'use strict';

const products = require('./productList.json');

module.exports.getProductsList = async (event, context) => {
  return products;
};

module.exports.getProductsById = async (event, context) => {
  const { id } = event.pathParameters;
  const product = products.find((p) => p.id === id);

  return product
    ? product
    : {
        statusCode: 404,
        message: 'Product not found',
      };
};

import products from "../data/productList.json";

export const getProductsById = async (event) => {
  const { id } = event.pathParameters;
  const product = products.find((p) => p.id === id);

  if (!product) {
    throw new Error(JSON.stringify({
      statusCode: 404,
      message: 'Product not found',
    }));
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(product),
  };
};

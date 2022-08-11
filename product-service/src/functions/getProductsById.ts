import pool from "../db/pool"
import { getByIdQuery } from "../constants/queries"

export const handler = async (event) => {
  const { id } = event.pathParameters;
  const { rows } = await pool.query(getByIdQuery(id))

  if (!rows.length) {
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
    body: JSON.stringify(rows[0]),
  };
};

import pool from "../db/pool"
import { joinQuery } from "../constants/queries"

export const getProductsList = async (event) => {
  const response = await pool.query(joinQuery)
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(response.rows),
  };
};

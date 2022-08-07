import pool from "../db/pool"
import { insertProductQuery, insertStockQuery } from "../constants/queries"

export const handler = async (event) => {
    try {
        const body = JSON.parse(event.body)
        const { rows } = await pool.query(insertProductQuery(body))
        const { id } = rows.pop()
        await pool.query(insertStockQuery(id))

        return {
            statusCode: 201,
            message: "Product created successfully ✅"
        }
    } catch (error) {
        return {
            statusCode: 500,
            message: "Something went wrong creating your product."
        }
    }

}
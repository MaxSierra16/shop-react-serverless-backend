import pool from "./pool"
import { insertProductQuery, insertStockQuery } from "../constants/queries"
import type { Product } from "../types"


export const saveProduct = async (body: Product): Promise<void> => {
    try {
        const { rows } = await pool.query(insertProductQuery(body))
        const { id } = rows.pop()
        await pool.query(insertStockQuery(id))
    } catch (error) {
        console.log(error)
    }

}
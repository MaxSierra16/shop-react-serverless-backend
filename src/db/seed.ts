
import { resolve } from 'path'
import { readFile, appendFile } from 'fs/promises'
import pool from "./pool"

import products from '../data/productList.json'
const file = resolve(process.env.PWD, "seed.sql")

const writeInserts = async (file) => {
    let queries = ''
    products.forEach(prod => {
        const ranNum = Math.floor(Math.random() * (10 - 2) + 2);
        const insertProduct = `INSERT INTO product (id, title, description, price) VALUES ('${prod.id}', '${prod.title}', '${prod.description}', ${prod.price});\n`
        const insertStock = `INSERT INTO stock(product_id, count) VALUES ('${prod.id}', ${ranNum});\n \n`
        queries += insertProduct
        queries += insertStock
    })
    await appendFile(file, queries)
}

(async () => {
    if (process.env.NODE_ENV !== 'production') {
        const queryFromFile = await readFile(file, { encoding: 'utf8' })

        try {
            // await writeInserts(file)
            await pool.query(queryFromFile)
            console.log("Successfully seeded DB 🌱")
        } catch (error) {
            console.log(error)
        }

    }
})()


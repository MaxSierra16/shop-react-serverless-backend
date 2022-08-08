export const getByIdQuery = id => `SELECT
    prod.id, prod.title, prod.description, prod.price, s.count
    FROM
    product as prod
    INNER JOIN
    stock as s
    ON prod.id=s.product_id
    WHERE prod.id='${id}';`

export const joinQuery = `SELECT
    prod.id, prod.title, prod.description, prod.price, s.count
    FROM
    product as prod
    INNER JOIN
    stock as s
    ON prod.id=s.product_id;`

export const insertProductQuery = (event) => {
    const { title, description, price } = event

    return `INSERT INTO product 
        (title, description, price)
        VALUES ('${title}', '${description}', ${price})
        RETURNING id;`
}

export const insertStockQuery = (id) => {

    const ranNum = Math.floor(Math.random() * (10 - 2) + 2);
    return `INSERT INTO stock (product_id, count) VALUES ('${id}', ${ranNum});`
}

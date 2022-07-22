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
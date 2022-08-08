-- Delete tables
DROP TABLE IF EXISTS stock;
DROP TABLE IF EXISTS product;

-- Recreate tables
CREATE TABLE
IF NOT EXISTS product
(
    id uuid NOT NULL DEFAULT gen_random_uuid
(),
    title text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    price double precision,
    CONSTRAINT product_pkey PRIMARY KEY
(id)
)
TABLESPACE pg_default;
ALTER TABLE
IF EXISTS product
OWNER to postgres;

CREATE TABLE stock
(
    id serial,
    product_id uuid,
    count integer,
    PRIMARY KEY (id),
    UNIQUE (product_id),
    FOREIGN KEY (product_id)
        REFERENCES product (id)
    MATCH SIMPLE
        ON
    UPDATE NO ACTION
        ON
    DELETE NO ACTION
        NOT VALID
    );
    ALTER TABLE
    IF EXISTS stock
OWNER to postgres;


    -- Insert sample data
    INSERT INTO product
        (id, title, description, price)
    VALUES
        ('7567ec4b-b10c-48c5-9345-fc73c48a80aa', 'ProductOne', 'Short Product Description1', 2.4);
    INSERT INTO stock
        (product_id, count)
    VALUES
        ('7567ec4b-b10c-48c5-9345-fc73c48a80aa', 3);

    INSERT INTO product
        (id, title, description, price)
    VALUES
        ('7567ec4b-b10c-48c5-9345-fc73c48a80a0', 'ProductNew', 'Short Product Description3', 10);
    INSERT INTO stock
        (product_id, count)
    VALUES
        ('7567ec4b-b10c-48c5-9345-fc73c48a80a0', 6);

    INSERT INTO product
        (id, title, description, price)
    VALUES
        ('7567ec4b-b10c-48c5-9345-fc73c48a80a2', 'ProductTop', 'Short Product Description2', 23);
    INSERT INTO stock
        (product_id, count)
    VALUES
        ('7567ec4b-b10c-48c5-9345-fc73c48a80a2', 7);

    INSERT INTO product
        (id, title, description, price)
    VALUES
        ('7567ec4b-b10c-48c5-9345-fc73c48a80a1', 'ProductTitle', 'Short Product Description7', 15);
    INSERT INTO stock
        (product_id, count)
    VALUES
        ('7567ec4b-b10c-48c5-9345-fc73c48a80a1', 2);

    INSERT INTO product
        (id, title, description, price)
    VALUES
        ('7567ec4b-b10c-48c5-9345-fc73c48a80a3', 'Product', 'Short Product Description2', 23);
    INSERT INTO stock
        (product_id, count)
    VALUES
        ('7567ec4b-b10c-48c5-9345-fc73c48a80a3', 7);

    INSERT INTO product
        (id, title, description, price)
    VALUES
        ('7567ec4b-b10c-48c5-9345-fc73348a80a1', 'ProductTest', 'Short Product Description4', 15);
    INSERT INTO stock
        (product_id, count)
    VALUES
        ('7567ec4b-b10c-48c5-9345-fc73348a80a1', 5);

    INSERT INTO product
        (id, title, description, price)
    VALUES
        ('7567ec4b-b10c-48c5-9445-fc73c48a80a2', 'Product2', 'Short Product Descriptio1', 23);
    INSERT INTO stock
        (product_id, count)
    VALUES
        ('7567ec4b-b10c-48c5-9445-fc73c48a80a2', 6);

    INSERT INTO product
        (id, title, description, price)
    VALUES
        ('7567ec4b-b10c-45c5-9345-fc73c48a80a1', 'ProductName', 'Short Product Description7', 15);
    INSERT INTO stock
        (product_id, count)
    VALUES
        ('7567ec4b-b10c-45c5-9345-fc73c48a80a1', 7);
 

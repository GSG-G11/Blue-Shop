BEGIN;
DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  price INTEGER NOT NULL
);

-- INSERT INTO products (id,name,description,image,category,price) VALUES (1,'Product 1','This is a product','https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','catagory1',100);
-- INSERT INTO products (id,name,description,image,category,price) VALUES (2,'Product 1','This is a product','https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','catagory1',100);
-- INSERT INTO products (id,name,description,image,category,price) VALUES (3,'Product 1','This is a product','https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','catagory1',100);
-- INSERT INTO products (id,name,description,image,category,price) VALUES (4,'Product 1','This is a product','https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','catagory1',100);
-- INSERT INTO products (id,name,description,image,category,price) VALUES (5,'Product 1','This is a product','https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','catagory1',100);
-- INSERT INTO products (id,name,description,image,category,price) VALUES (6,'Product 1','This is a product','https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','catagory1',100);
-- INSERT INTO products (id,name,description,image,category,price) VALUES (7,'Product 1','This is a product','https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','catagory1',100);
-- INSERT INTO products (id,name,description,image,category,price) VALUES (8,'Product 1','This is a product','https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','catagory1',100);

COMMIT;
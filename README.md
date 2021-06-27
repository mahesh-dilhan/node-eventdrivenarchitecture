### Node - Event Driven Architecture ###

```
For MySQL 8
npm un mysql && npm i mysql2

npm i cors express
npm i @types/express @types/node nodemon typescripts

install typeorm https://github.com/typeorm/typeorm
```

```sql
query: SELECT * FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA` = 'r_node_admin' AND `TABLE_NAME` = 'typeorm_metadata'
query: SELECT SCHEMA() AS `schema_name`
query: CREATE TABLE `product` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `image` varchar(255) NOT NULL, `likes` int NOT NULL DEFAULT '0', PRIMARY KEY (`id`)) ENGINE=InnoDB
query: COMMIT

```
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

```sql
Product { title: 'Microservices', image: 'ms.png' }
query: START TRANSACTION
query: INSERT INTO `product`(`id`, `title`, `image`, `likes`) VALUES (DEFAULT, ?, ?, DEFAULT) -- PARAMETERS: ["Microservices","ms.png"]
query: SELECT `Product`.`id` AS `Product_id`, `Product`.`likes` AS `Product_likes` FROM `product` `Product` WHERE `Product`.`id` = ? -- PARAMETERS: [1]
query: COMMIT

```

```
Maheshs-MacBook-Pro:app1 mahesh$ echo '{"title":"DDD","image":"ddd.png"}' | http :8080/api/products  
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 50
Content-Type: application/json; charset=utf-8
Date: Sun, 27 Jun 2021 11:01:12 GMT
ETag: W/"32-l9axtuisoPYrRjN6/w38/T0dHe8"
Keep-Alive: timeout=5
Vary: Origin
X-Powered-By: Express

{
    "id": 2,
    "image": "ddd.png",
    "likes": 0,
    "title": "DDD"
}

```
import * as express from 'express'
import * as cors from 'cors'
import {createConnection}  from 'typeorm'
import {Product} from "./entity/product";
import {json, Request, Response} from "express";

createConnection().then(db=> {
    const prodcutRepository = db.getRepository(Product)
    const app = express()

    app.use(cors({
            origin: ['http://localhost:4200', 'http://localhost:3000', 'http://localhost:8080']
        }
    ))

    app.use(express.json())

    app.get('/api/products', async (req: Request, res: Response) => {
        const products = await prodcutRepository.find()
        res.json(products);
    });
    
    console.log("listen 8080")

    app.listen(8080)

})

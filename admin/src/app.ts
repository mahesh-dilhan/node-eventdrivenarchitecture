import * as express from 'express'
import * as cors from 'cors'
import {createConnection}  from 'typeorm'
import {Product} from "./entity/product";
import {json, Request, Response} from "express";
import {Kafka} from "kafkajs";


createConnection().then(db=> {
    const prodcutRepository = db.getRepository(Product)
    const app = express()

    const kafka = new Kafka({
        clientId: 'node-admin',
        brokers: ['localhost:9092']
    })


    app.use(cors({
            origin: ['http://localhost:4200', 'http://localhost:3000', 'http://localhost:8080']
        }
    ))

    app.use(express.json())

    app.get('/api/products', async (req: Request, res: Response) => {
        const products = await prodcutRepository.find();
        res.json(products);
    });

    app.post('/api/products', async (req: Request, res: Response) => {
        const product = await prodcutRepository.create(req.body);
        console.log(product);
       const results = await prodcutRepository.save(product);

        const producer = kafka.producer()

        await producer.connect()
        await producer.send({
            topic: 'node-order',
            messages: [
                { value: results.toString() },
            ],
        })

        await producer.disconnect()

        const consumer = kafka.consumer({ groupId: 'node-client-group' })

        await consumer.connect()
        await consumer.subscribe({ topic: 'node-order', fromBeginning: true })

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log({
                    value: message.value.toString(),
                })
            },
        })

       // await consumer.disconnect();

        return res.json(results);

    });
    console.log("listen 8080")

    app.listen(8080)

})

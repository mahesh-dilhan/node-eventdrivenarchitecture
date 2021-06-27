import * as express from 'express'
import * as cors from 'cors'
import {createConnection}  from 'typeorm'

createConnection().then(db=> {
    const app = express()

    app.use(cors({
            origin: ['http://localhost:4200', 'http://localhost:3000', 'http://localhost:8080']
        }
    ))

    app.use(express.json())

    console.log("listen 8080")

    app.listen(8080)

})

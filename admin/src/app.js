"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var typeorm_1 = require("typeorm");
typeorm_1.createConnection().then(function (db) {
    var app = express();
    app.use(cors({
        origin: ['http://localhost:4200', 'http://localhost:3000', 'http://localhost:8080']
    }));
    app.use(express.json());
    console.log("listen 8080");
    app.listen(8080);
});

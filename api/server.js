const express = require("express");

const db = require("../data/dbConfig.js");
const accountsRouter = require("../data/seeds/accountsRouter");

const server = express();

server.use(express.json());

server.use("/api/accounts", accountsRouter);

server.get("/", (request, response) => {
    response.status(200).json({Frankenstein: "It's alive"})
})

module.exports = server;

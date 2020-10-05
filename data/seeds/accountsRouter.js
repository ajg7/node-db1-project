const express = require("express");
const db = require("../../data/dbConfig");
const router = express.Router();

//Get

router.get("/", (request, response) => {
    db.select("*").from("accounts")
        .then(accounts => {
            response.status(200).json({data: accounts})
        })
        .catch(error => {
            console.log(error)
            response.status(500).json({error: error.message})
        })
})

router.get("/:id", (request, response) => {
    db("accounts").where("id", "=", request.params.id)
        .then(accounts => {
            response.status(200).json({data: accounts});
        })
        .catch(error => {
            console.log(error);
            response.status(500).json({error: error.message});
        })
})

//Post

//Put

//Delete

module.exports = router;
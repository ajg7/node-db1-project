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

router.post("/", (request, response) => {
    db("accounts").insert(request.body, "id")
        .then(ids => {
            response.status(201).json({data: ids});
        })
        .catch(error => {
            console.log(error);
            response.status(500).json({error: error.message});
        })
})

//Put

router.put("/:id", (request, response) => {
    const changes = request.body;
    db("accounts").where({id: request.params.id}).update(changes)
        .then(count => {
            response.status(200).json({ data: count })
        })
        .catch(error => {
            response.status(500).json({ error: error.message })
        })
})

//Delete

module.exports = router;
const express = require('express');
const router1 = new express.Router();

const MenRanking = require("../models/mens")

router1.post("/mens", async (req, res) => {
    try {
        const men = new MenRanking(req.body)
        console.log(req.body)
        const result = await men.save();
        res.status(201).send(result);
    }
    catch (err) {
        res.status(400).send(err);
    }
})

router1.get("/mens", async (req, res) => {
    try {
        const result = await MenRanking.find();
        res.status(201).send(result);
    }
    catch (err) {
        res.status(400).send(err);
    }
})

router1.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await MenRanking.findById({ _id: _id });
        res.status(201).send(result);
    }
    catch (err) {
        res.status(400).send(err);
    }
})

router1.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await MenRanking.findByIdAndUpdate({ _id: _id }, req.body, { new: true });
        res.status(201).send(result);
    }
    catch (err) {
        res.status(400).send(err);
    }
})

router1.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await MenRanking.findByIdAndDelete({ _id: _id });
        res.status(201).send(result);
    }
    catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router1
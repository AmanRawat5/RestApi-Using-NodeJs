const express = require('express');
const router2 = new express.Router();

const commentModel = require("../models/comments")

router2.post("/comment", async (req, res) => {
    try {
        const comment = new commentModel(req.body);
        console.log(req.body)
        const result = await comment.save(req.body)
        res.status(200).send(result);
    }
    catch (err) {
        res.status("401").json({ message: err })
    }
})

router2.get("/comment", async (req, res) => {
    try {
        const Comments = await commentModel.find();
        res.status(200).send(Comments);
    }
    catch (err) {
        res.status(401).json({ message: err })
    }
})

module.exports = router2
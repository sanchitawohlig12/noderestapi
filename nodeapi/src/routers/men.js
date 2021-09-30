const express = require("express")
const router = new express.Router();

const MensRanking = require("../models/mens")
// we will handle post request
router.post("/mens", async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);

    } catch (e) {
        res.status(400).send(e);

    }

})

// we will handle get request
router.get("/mens", async (req, res) => {
    try {
        const getMens = await MensRanking.find({}).sort({ "ranking": 1 });
        res.send(getMens);

    } catch (e) {
        res.status(400).send(e);

    }

})

// we will handle getone request
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findById({ _id });
        res.send(getMen);

    } catch (e) {
        res.status(400).send(e);

    }

})


// we will patch request of individual
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body);
        res.send(getMen);

    } catch (e) {
        res.status(500).send(e);

    }

})


// we will delete request of individual
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(_id);
        res.send(getMen);

    } catch (e) {
        res.status(500).send(e);

    }

})


module.exports = router;



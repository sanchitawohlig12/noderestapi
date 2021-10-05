const express = require("express")
const router = new express.Router();

const UsersRecords = require("../models/user")
// we will handle post request
router.post("/users", async (req, res) => {
    try {
        const addingUsersRecords = new UsersRecords(req.body)
        console.log(req.body);
        const insertUsers = await addingUsersRecords.save();
        res.status(201).send(insertUsers);

    } catch (e) {
        res.status(400).send(e);

    }

})

// we will handle get request
router.get("/users", async (req, res) => {
    try {
        const getUsers = await UsersRecords.find({}).sort({ "ranking": 1 });
        res.send(getUsers);

    } catch (e) {
        res.status(400).send(e);

    }

})

// we will handle getone request
router.get("/users/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getUser = await UsersRecords.findById({ _id });
        res.send(getUser);

    } catch (e) {
        res.status(400).send(e);

    }

})


// we will patch request of individual
router.patch("/users/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getUser = await UsersRecords.findByIdAndUpdate(_id, req.body);
        res.send(getUser);

    } catch (e) {
        res.status(500).send(e);

    }

})


// we will delete request of individual
router.delete("/users/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getUser = await UsersRecords.findByIdAndDelete(_id);
        res.send(getUser);

    } catch (e) {
        res.status(500).send(e);

    }

})


module.exports = router;



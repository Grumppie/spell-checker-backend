import express from 'express'
import { Object } from '../models/object.js'
const router = express.Router()

router.post('/', async (req, res) => {
    const Id = req.body.Id
    const Log = req.body.Log
    try {
        const object = await Object.findOneAndUpdate(
            { Id: Id },
            { $push: { Logs: Log } },
            { new: true }
        )
        res.json(object)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

export default router
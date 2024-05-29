const Journal = require('../models/journalModel')
const mongoose = require('mongoose')

// get all journals
const getJournals = async (req, res) => {
    const user_id = req.user_id

    const journals = await Journal.find({ user_id }).sort({ createdAt: -1 })

    res.status(200).json(journals)
}    


// get a journal entry by id



// create a journal entry



// delete a journal entry by id


// update a journal entry by id
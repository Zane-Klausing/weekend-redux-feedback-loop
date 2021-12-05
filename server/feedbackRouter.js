const express = require('express');
const router = express.Router();
const pool = require('./modules/pool.js');


router.post('/', (req, res) => {
    console.log('IN POST ROUTE')
    const info = req.body;
    console.log(info)
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, [info.feeling, info.understanding, info.supported, info.comments])
        .then((result) => {
            console.log(`Added feedback to database`, info);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

module.exports = router;
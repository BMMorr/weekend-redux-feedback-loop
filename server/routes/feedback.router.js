const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    const sqlText = `
      INSERT INTO feedback
      (feeling, understanding, support, comments)
        VALUES
        ($1, $2, $3, $4)
    `;
    const sqlValues = [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
    ]
    console.log('---------------------------', sqlValues);
    pool.query(sqlText, sqlValues)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('POST /feedback fail:', error);

            res.sendStatus(500);
        })
})

module.exports = router;
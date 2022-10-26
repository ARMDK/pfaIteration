const path = require('path;');
const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameController');

router.post('/savescore', gameController,
    (req, res) => {
        res.status(200).send('updated score')
    }
)


module.exports = router;
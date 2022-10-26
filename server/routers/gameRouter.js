const path = require('path');
const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameController');

router.get('scores')

router.post('/scores', gameController.updateGameScore,
    (req, res) => {
        res.status(200).send('updated score')
    }
)


module.exports = router;
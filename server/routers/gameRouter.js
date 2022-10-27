const path = require('path');
const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameController');

router.get('/scores', gameController.getScores, 
    (req, res) => {
        res.status(200).json(res.locals.scores)
    }
)

router.post('/scores', gameController.updateGameScore,
    (req, res) => {
        res.status(200).send('updated score')
    }
)


module.exports = router;
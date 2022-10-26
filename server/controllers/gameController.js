const db = require('../models/capableHumanModels');

const gameController = {};


//user is playing a game (game id) - we'll also have access to the user_id & score
    
//when user completes playing game
    //send information through a post request
        //user id,
        //score 
        //game id
    //query the scores table
        //select any score from the scoreboard with the current game ID and the current user ID 
            //to see if user has played
        //either update or add row to the score database 
            //query score table to get history of scores - check existing highest score for this game ID
                //store in constant, compare with current score using Math.max
                //if it's higher, query to UPDATE new high score to that game ID in games table
    //query the games tables
    

gameController.updateGameScore = async (req, res, next) => {
  const { username, score } = req.body;
  try {
    console.log('hello, you made it to updateGameScore')
    console.log('username, score', username, score)
    next();
  }
  catch(err) {
    next ( {
      message: { err: 'this is an error in updateGameScore', } 
    });
  }
}


CapableController.updateReactionGameScore = async (req, res, next) => {
    const { username, score } = req.body;
  
    //first check if the user's score is defined in the table already w/ a query
    const accountsQuery = {
      name: 'reactionGameUserExists',
      text: 'SELECT * FROM public.accounts WHERE username = $1',
      values: [`${req.body.username}`],
    }
    const userObj = await db.query(accountsQuery);
    if (userObj['rows'].length === 0) throw new Error('Please input a valid username in the system');
    const reactionGameId = userObj['rows'][0]['reactiongame_id'];
    const currUserId = userObj['rows'][0]['_id'];
  
    //Case 1: reactionGameId is null, this is the user's first time playing
    if (!reactionGameId) {
      //(1) Insert the currently passed in score as the value in the parent table (reactionGame)
      const reactGameQueryStr = "INSERT INTO reactiongame VALUES($1, $2)"
      const values = [currUserId, score];
      db.query(reactGameQueryStr, values);
  
      //(2) Update the foreign key in the parent table (accounts)
      const fkUpdateQuery = {
        name: 'foreign key query',
        text: "UPDATE accounts SET reactiongame_id = $1 WHERE _id = $2",
        values: [currUserId, currUserId],
      }
      db.query(fkUpdateQuery);
      res.locals.userHighScore = score;
    } 
    //Case 2: reactionGameId is not null
    //return new high score or their previous score if their time is greater than the one in the db
    else {
      //(1) check if the current score is less than the stored score in the database
      let scoreQuery = "SELECT highscore FROM reactiongame WHERE _id = $1"
      const values = [currUserId];
      const user = await db.query(scoreQuery, values);
      const dbScore = user['rows'][0]['highscore'];
      if (Number(score) < Number(dbScore)) {
        scoreQuery = "UPDATE reactiongame SET highscore = $1 WHERE _id = $2"
        const values = [score, currUserId];
        db.query(scoreQuery, values);
        res.locals.userHighScore = score;
      } 
      //if score in DB is lower, then we want to just return that score back to the user
      else if (dbScore <= score) {
        res.locals.userHighScore = dbScore;
      }
    }
    
    //return top score among all scores in the table reactionGame
    let topScoreQuery = 'SELECT highscore FROM reactiongame WHERE highscore=(SELECT min(highscore) FROM reactiongame)'
    const topScores = await db.query(topScoreQuery);
    res.locals.overallTopScore = topScores['rows'][0]['highscore'];
    return next();
  }
  
  //Number Memory Game Method
CapableController.updateNumberGameScore = async (req, res, next) => {
    const { username, score } = req.body;
  
    //first check if the user's score is defined in the table already w/ a query
    const accountsQuery = {
      name: 'numberGameUserExists',
      text: 'SELECT * FROM public.accounts WHERE username = $1',
      values: [`${req.body.username}`],
    }
    const userObj = await db.query(accountsQuery);
    if (userObj['rows'].length === 0) throw new Error('Please input a valid username in the system');
    const numberGameId = userObj['rows'][0]['numbergame_id'];
    const currUserId = userObj['rows'][0]['_id'];
  
    //Case 1: numberGameId is null, this is the user's first time playing
    if (!numberGameId) {
      //(1) Insert the currently passed in score as the value in the parent table (numberGame)
      const numberGameQueryStr = "INSERT INTO numbergame VALUES($1, $2)"
      const values = [currUserId, score];
      db.query(numberGameQueryStr, values);
  
      //(2) Update the foreign key in the parent table (accounts)
      const fkUpdateQuery = {
        name: 'foreign key query',
        text: "UPDATE accounts SET numbergame_id = $1 WHERE _id = $2",
        values: [currUserId, currUserId],
      }
      db.query(fkUpdateQuery);
      res.locals.userHighLevel = score;
    } 
    //Case 2: reactionGameId is not null
    //return new high score or their previous score if the entry in the db is higher //IN THE DB - LEVEL 2 //CURR SCORE - LEVEL 5 
    else {
      //(1) check if the current score is higher than the score in the database
      let scoreQuery = "SELECT highscore FROM numbergame WHERE _id = $1"
      const values = [currUserId];
      const user = await db.query(scoreQuery, values);
      const dbScore = user['rows'][0]['highscore'];
  
      if (Number(score) > Number(dbScore)) {
        scoreQuery = "UPDATE numbergame SET highscore = $1 WHERE _id = $2"
        const values = [score, currUserId];
        db.query(scoreQuery, values);
        res.locals.userHighLevel = score;
      } 
      //if score in DB is lower, then we want to just return that score back to the user
      else if (Number(dbScore) >= Number(score)) {
        res.locals.userHighLevel = dbScore;
      }
    }
    
    //return top score among all scores in the table numberGame
    let topScoreQuery = 'SELECT highscore FROM numbergame WHERE highscore=(SELECT max(highscore) FROM numbergame)'
    const topScores = await db.query(topScoreQuery);
    res.locals.overallHighLevel = topScores['rows'][0]['highscore'];
    return next();
  }

module.exports = gameController;
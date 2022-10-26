const db = require('../models/capableHumanModels');
const gameController = {};


gameController.updateGameScore = async (req, res, next) => {
  const { username, top_score, game_id } = req.body;
  const getUser = await db.query(`SELECT user_id FROM test.users WHERE username='${username}'`)
  const user_id = getUser.rows[0].user_id;
  let query;
  try {
    query = `SELECT * FROM test.scoreboard WHERE game_id='${game_id}' AND user_id='${user_id}';`
    const result = await db.query(query);
    console.log(result)
    if (result.rows.length) {
      let userScore = await db.query(`UPDATE test.scoreboard SET top_score='${Math.max(top_score, result.rows[0].top_score)}' WHERE game_id='${game_id}' AND user_id='${user_id}' RETURNING test.scoreboard.*;`);
      res.locals.userHighScore = userScore.rows[0].top_score;
      const newResult = await db.query(`SELECT top_score from test.scoreboard WHERE game_id='${game_id}'`);
      const newTopScore = Math.max(...newResult.rows.map((el) => el.top_score));
      let overall = await db.query(`UPDATE test.games SET top_score='${newTopScore}' WHERE game_id='${game_id}' RETURNING test.games.*;`);
      res.locals.overallHighScore = overall.rows[0].top_score;
    } else {
      let insertNew = `INSERT INTO test.scoreboard VALUES (6, ${game_id}, ${user_id}, ${top_score}) RETURNING test.scoreboard.*;`
      let test = await db.query(insertNew);
      console.log(insertNew);
      res.locals.newScoreboard = insertNew.rows[0].top_score;
    }
    return next();
  }
  catch(err) {
    next({
      log: `error ${err} occurs in the updateGameScore`,
      status: 400,
      message: {err: 'an error occured'}
    });
  }
}

module.exports = gameController;

// gameController.updateReactionGameScore = async (req, res, next) => {
//     const { username, score } = req.body;
  
//     //first check if the user's score is defined in the table already w/ a query
//     const accountsQuery = {
//       name: 'reactionGameUserExists',
//       text: 'SELECT * FROM public.accounts WHERE username = $1',
//       values: [`${req.body.username}`],
//     }
//     const userObj = await db.query(accountsQuery);
//     if (userObj['rows'].length === 0) throw new Error('Please input a valid username in the system');
//     const reactionGameId = userObj['rows'][0]['reactiongame_id'];
//     const currUserId = userObj['rows'][0]['_id'];
  
//     //Case 1: reactionGameId is null, this is the user's first time playing
//     if (!reactionGameId) {
//       //(1) Insert the currently passed in score as the value in the parent table (reactionGame)
//       const reactGameQueryStr = "INSERT INTO reactiongame VALUES($1, $2)"
//       const values = [currUserId, score];
//       db.query(reactGameQueryStr, values);
  
//       //(2) Update the foreign key in the parent table (accounts)
//       const fkUpdateQuery = {
//         name: 'foreign key query',
//         text: "UPDATE accounts SET reactiongame_id = $1 WHERE _id = $2",
//         values: [currUserId, currUserId],
//       }
//       db.query(fkUpdateQuery);
//       res.locals.userHighScore = score;
//     } 
//     //Case 2: reactionGameId is not null
//     //return new high score or their previous score if their time is greater than the one in the db
//     else {
//       //(1) check if the current score is less than the stored score in the database
//       let scoreQuery = "SELECT highscore FROM reactiongame WHERE _id = $1"
//       const values = [currUserId];
//       const user = await db.query(scoreQuery, values);
//       const dbScore = user['rows'][0]['highscore'];
//       if (Number(score) < Number(dbScore)) {
//         scoreQuery = "UPDATE reactiongame SET highscore = $1 WHERE _id = $2"
//         const values = [score, currUserId];
//         db.query(scoreQuery, values);
//         res.locals.userHighScore = score;
//       } 
//       //if score in DB is lower, then we want to just return that score back to the user
//       else if (dbScore <= score) {
//         res.locals.userHighScore = dbScore;
//       }
//     }
    
//     //return top score among all scores in the table reactionGame
//     let topScoreQuery = 'SELECT highscore FROM reactiongame WHERE highscore=(SELECT min(highscore) FROM reactiongame)'
//     const topScores = await db.query(topScoreQuery);
//     res.locals.overallTopScore = topScores['rows'][0]['highscore'];
//     return next();
//   }
  
//   //Number Memory Game Method
// gameController.updateNumberGameScore = async (req, res, next) => {
//     const { username, score } = req.body;
  
//     //first check if the user's score is defined in the table already w/ a query
//     const accountsQuery = {
//       name: 'numberGameUserExists',
//       text: 'SELECT * FROM public.accounts WHERE username = $1',
//       values: [`${req.body.username}`],
//     }
//     const userObj = await db.query(accountsQuery);
//     if (userObj['rows'].length === 0) throw new Error('Please input a valid username in the system');
//     const numberGameId = userObj['rows'][0]['numbergame_id'];
//     const currUserId = userObj['rows'][0]['_id'];
  
//     //Case 1: numberGameId is null, this is the user's first time playing
//     if (!numberGameId) {
//       //(1) Insert the currently passed in score as the value in the parent table (numberGame)
//       const numberGameQueryStr = "INSERT INTO numbergame VALUES($1, $2)"
//       const values = [currUserId, score];
//       db.query(numberGameQueryStr, values);
  
//       //(2) Update the foreign key in the parent table (accounts)
//       const fkUpdateQuery = {
//         name: 'foreign key query',
//         text: "UPDATE accounts SET numbergame_id = $1 WHERE _id = $2",
//         values: [currUserId, currUserId],
//       }
//       db.query(fkUpdateQuery);
//       res.locals.userHighLevel = score;
//     } 
//     //Case 2: reactionGameId is not null
//     //return new high score or their previous score if the entry in the db is higher //IN THE DB - LEVEL 2 //CURR SCORE - LEVEL 5 
//     else {
//       //(1) check if the current score is higher than the score in the database
//       let scoreQuery = "SELECT highscore FROM numbergame WHERE _id = $1"
//       const values = [currUserId];
//       const user = await db.query(scoreQuery, values);
//       const dbScore = user['rows'][0]['highscore'];
  
//       if (Number(score) > Number(dbScore)) {
//         scoreQuery = "UPDATE numbergame SET highscore = $1 WHERE _id = $2"
//         const values = [score, currUserId];
//         db.query(scoreQuery, values);
//         res.locals.userHighLevel = score;
//       } 
//       //if score in DB is lower, then we want to just return that score back to the user
//       else if (Number(dbScore) >= Number(score)) {
//         res.locals.userHighLevel = dbScore;
//       }
//     }
    
//     //return top score among all scores in the table numberGame
//     let topScoreQuery = 'SELECT highscore FROM numbergame WHERE highscore=(SELECT max(highscore) FROM numbergame)'
//     const topScores = await db.query(topScoreQuery);
//     res.locals.overallHighLevel = topScores['rows'][0]['highscore'];
//     return next();
//   }


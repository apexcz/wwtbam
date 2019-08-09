const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./db.json');
const db = low(adapter);
const defaultDB = require('./DefaultDB.json');

const initDb = () =>{
    db.defaults(defaultDB).write();
};

const addPlayer = (player) => {
    db.get('players').push(player).write();
    console.log(`New player - ${player.name} added`);
};

const getAllPlayers = () => db.get('players').value();

const getPlayer = uuid => db.get('players').find({uuid : uuid}).value();

const playerExists = uuid => db.get('players').findIndex(player => player.uuid === uuid) > -1;

const addQuestion = (question) => {
    db.get('questions').push(question).write();
    console.log(`New question - ${question.id} added`);
};

const getAllQuestions = () => db.get('questions').value();
const getQuestion = questionId => db.get('questions').find({ id : questionId }).value();
const questionCount = () => db.get('questions').size().value();

const scorePlayer = (uuid, choice, question) => {

    let awardedPoint = (choice === question.answer) ? question.point : 0;
    db.get('players')
        .find({ uuid })
        .update('score', i => i + awardedPoint)
        .update('questions', q => {
            console.log(q);
            return  [question.id].concat(q) ;})
        .write();

    console.log(`Updated player ${uuid} score by ${awardedPoint} for attempting question ${question.id} `);
    return awardedPoint;
};

const playerAttemptedQuestion = (player, questionId) => {
    return  db.get('players').find({uuid: player.uuid}).get('questions').find({id: questionId}).value();
};

module.exports = {
  initDb,
  addPlayer,
  getAllPlayers,
  getPlayer,
  playerExists,
  addQuestion,
  getAllQuestions,
  getQuestion,
  questionCount,
  scorePlayer,
  playerAttemptedQuestion
};
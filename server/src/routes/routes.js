const {listAllPlayers,getPlayerByUUID,savePlayer,markPlayer } = require('../controllers/PlayerController');
const {listAllQuestions,getQuestionById,saveQuestions } = require('../controllers/QuestionController');

module.exports = function (app) {

    app.route('/players')
        .get(listAllPlayers)
        .post(savePlayer);

    app.route('/players/:uuid')
        .get(getPlayerByUUID);

    app.route('/players/mark')
        .post(markPlayer);

    app.route('/questions')
        .get(listAllQuestions)
        .post(saveQuestions);

    app.route('/questions/:id')
        .get(getQuestionById);
}
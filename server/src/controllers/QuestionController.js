const {addQuestion, getAllQuestions, getQuestion,questionCount} = require('../models/DataStore');

const listAllQuestions = (req, res) => {
  res.send(getAllQuestions());
};

const getQuestionById = (req, res) => {
    const question = getQuestion(parseInt(req.params.id));
    if(question == null) return res.status(404).send();
    res.send(question);
};

const saveQuestions = (req, res) => {
  let lastCount = questionCount();
  req.body.forEach(newQuestion => {
      newQuestion.id = ++lastCount;
      addQuestion(newQuestion);
  });
  res.send();
};

module.exports = {
    listAllQuestions,
    getQuestionById,
    saveQuestions
}


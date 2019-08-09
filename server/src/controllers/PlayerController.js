const uuidv4 = require('uuid/v4');
const {getAllPlayers,getPlayer,addPlayer,playerExists, scorePlayer } = require('../models/DataStore');

const listAllPlayers = (req, res) => {
    res.send(getAllPlayers());
};

const getPlayerByUUID = (req, res) => {
    const player = getPlayer(req.params.uuid);

    if(player == null) return res.status(404).send();

    res.send(player);
};

const savePlayer = (req, res) => {
    const playerName = req.body.name;
    if(!playerName) return res.status(400).json('Invalid name field');

    const newPlayer = {
        name : playerName,
        uuid : uuidv4(),
        score : 0,
        questions : []
    };
    addPlayer(newPlayer);
    res.send(newPlayer);
};

const markPlayer = (req, res) => {
    const uuid = req.body.uuid;
    const choice = req.body.choice;
    const question = req.body.question;

    if(!playerExists(uuid)) return res.status(400).json('Unauthenticated user');
    else if(!choice) return res.status(400).json('Invalid choice');
    else if(!question.id) return res.status(400).json('Invalid question');

    const scoredPoint = scorePlayer(uuid,choice,question);

    res.status(200).json({point : scoredPoint});
};

module.exports = {
    listAllPlayers,
    getPlayerByUUID,
    savePlayer,
    markPlayer
};
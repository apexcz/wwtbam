const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const {initDb } = require('./models/DataStore');
const routes = require('./routes/routes');

const app = express(),
    port = process.env.PORT || 8083;


// enhance the app security with Helmet
app.use(helmet());

//use bodyparser to parse application/json content-type
app.use(bodyParser.json());

app.use(cors());

//log HTTP requests
app.use(morgan('combined'));

initDb();

app.get('/', (req,res) => {
    res.send("Welcome to Who wants to be a millionaire.");
});

routes(app);

app.listen(port, () => {
    console.log(`Server has started running on port ${port}`);
});
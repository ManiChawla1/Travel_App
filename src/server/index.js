const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const port =9081;
app.use(express.static('dist'));
app.listen(port, listening);

export function listening(){
    console.log(`Running on port: ${port}`);
}
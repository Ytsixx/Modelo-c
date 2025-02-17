require('module-alias/register')

_path = process.cwd()
var express = require('express');
var cors = require('cors');
//var secure = require('ssl-express-www');

const { sms } = require("./lib/consola/mensagem.js")

var app = express();
var main_router = require("./main.js");
app.enable('trust proxy');
app.set('json spoaces', 2);
app.use(cors());
//app.use(secure);
app.use(express.static('public'));

app.use('/', main_router);

app.listen(8080, () => {
    sms('app rodando na porta 8080');
});
import express = require('express');
import bodyParser = require("body-parser");

import { Apostador } from '../gui/src/app/apostador';
import { CadastroDeApostadores } from './cadastroDeApostadores';

import { fabricaDeApostas } from './fabricaDeApostas';

var app = express();

var cadastro: CadastroDeApostadores = new CadastroDeApostadores();

var cheerio: any = require('cheerio');

var request: any = require('request-promise');

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);
app.use(bodyParser.json());

let fabricaApostas = new fabricaDeApostas();
var options = getCrawler('https://www.gazetaesportiva.com/loteca/#futebol');
var apostas: any;

app.get('/apostadores', function (req, res) {
    res.send(JSON.stringify(cadastro.getApostadores()));
  });

app.post('/apostador', function (req: express.Request, res: express.Response){
    var apostador: Apostador = <Apostador> req.body;
    apostador = cadastro.cadastrar(apostador);
    if(apostador) {
        res.send({"success": "O apostador foi cadastrado com sucesso!"});
    }else{
        res.send({"failure": "O apostador não pode ser cadastrado!"});
    }
});

app.get('/apostas', function(req, res) {
    request(options)
    .then($ => apostas = fabricaApostas.crawlConcurso($))
    .catch(e => console.log(e));
    res.send(JSON.stringify(apostas));       
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

function getCrawler(url: String) {
    return {
        uri: url,
        transform: function (body) {
            return cheerio.load(body);
        }
    };
}

export { app }

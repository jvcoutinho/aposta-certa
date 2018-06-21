const express = require('express')
const app = express()
import bodyParser = require("body-parser");
var cheerio: any = require('cheerio');
import { fabricaDeApostas } from './fabricaDeApostas';
var request: any = require('request-promise');

const apostadores = [{nome:'Alexandre', email:'acm@cin.ufpe.br', senha:'python'}]

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(bodyParser.json());

let fabricaApostas = new fabricaDeApostas();
var options = getCrawler('https://www.gazetaesportiva.com/loteca/#futebol');
var probs = getCrawler('http://www.chancedegol.com.br/copa18.htm');
var apostas: any;
var probabilidade: any;

app.get('/', function (req, res) {
    res.send(apostadores)
})

app.get('/apostas', function(req, res) {
    request(options)
    .then($ => apostas = fabricaApostas.crawlConcurso($))
    .catch(e => console.log(e));
    res.send(JSON.stringify(apostas));       
});

app.get('/probs', function(req, res){
    request(probs)
    .then($ => probabilidade = fabricaApostas.crawlChanceDeGol($))
    .catch(e => console.log(e));
    res.send(JSON.stringify(probabilidade));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function getCrawler(url: String) {
    return {
        uri: url,
        transform: function (body) {
            return cheerio.load(body);
        }
    };
}



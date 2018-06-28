const express = require('express')
const app = express()
import bodyParser = require("body-parser");
var cheerio: any = require('cheerio');
import { fabricaDeApostas } from './fabricaDeApostas';
var request: any = require('request-promise');
import { fabricaDePropostas } from './fabricaDePropostas';
import { Apostador } from '../gui/src/app/apostador';
import { CadastroDeApostadores } from './cadastroDeApostadores';


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
let fabricaPropostas = new fabricaDePropostas();
var cadastro: CadastroDeApostadores = new CadastroDeApostadores();
var apostas: any;
getApostas(getCrawler('https://www.gazetaesportiva.com/loteca/#futebol'));
var acumulo: any;
getAcumulo(getCrawler('https://g1.globo.com/loterias/loteca.ghtml'));
var probabilidades: any;
getProbabilidades(getCrawler('http://romers.com.br/'));
var propostas: any;
getPropostas(getCrawler('http://romers.com.br/'));

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
    res.send(JSON.stringify(apostas));       
});

app.get('/acumulo', function(req, res) {
    res.send(acumulo);
});

app.get('/probabilidades', function(req, res) {
    res.send(JSON.stringify(probabilidades));
});

app.get('/propostas', function(req, res) {
    res.send(JSON.stringify(propostas));       
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

function getApostas(options) {
    request(options)
    .then($ => apostas = fabricaApostas.crawlConcurso($))
    .catch(e => console.log(e));
}

function getAcumulo(options) {
    request(options)
    .then($ => acumulo = fabricaApostas.crawlAcumulo($))
    .catch(e => console.log(e));
}

function getProbabilidades(options) {
    request(options)
    .then($ => probabilidades = fabricaApostas.crawlProbabilidades($))
    .catch(e => console.log(e));
}

function getPropostas(options){
    request(options)
    .then($ => propostas = fabricaPropostas.Propor(fabricaApostas.crawlProbabilidades($)))
    .catch(e => console.log(e));
}



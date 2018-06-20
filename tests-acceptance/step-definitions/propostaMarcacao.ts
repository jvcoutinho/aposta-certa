import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import { when, async } from 'q';
import { NOMEM } from 'dns';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

var time1, time2;
var prob1, prob2, probEmpate;
defineSupportCode(function ({ Given, When, Then }) {

    Given(/^Eu estou na página "([^\"]*)"$/, async (pagina) => {
        await browser.get("http://localhost:4200/concurso");
        await expect(browser.getTitle()).to.eventually.equal('ApostaCerta');
    });
 
    Given(/^Terá o jogo "([^\"]*)" contra "([^\"]*)"$/, async (mandante, visitante) => {
        await expect(time1 = mandante);
        
        await expect(time2 = visitante);
        
        await expect(mandante != visitante).to.equal(true);
    });
 

    Given(/^A probabilidade de vitória do mandante "([^\"]*)" é "([^\"]*)%"$/, async(timeM, probM)=>{
         await expect(timeM != null).to.equal(true);
            
            await expect(prob1 = probM);
    });
 

    Given(/^A probabilidade de vitória do visitante "([^\"]*)" é "([^\"]*)%"$/, async (timeV, probV) => {
         await expect(timeV != null).to.equal(true);
            await expect(prob2 = probV);
    });
 
    Given(/^A probabilidade de empate é "([^\"]*)%"$/, async (probabilidade) => {
        await expect(probEmpate = probabilidade);
    });

    When(/^Eu solicito para "([^\"]*)"$/, async(nome) =>{
        //await element(by.buttonText(nome.toString())).click();
    });
    
    Then(/^Eu vejo a proposta de aposta "simples" para "vitória do ([^\"]*)"$/,async(time)=>{
        if(prob1>prob2 && prob1>probEmpate){
            await expect(time==time1).to.equal(true);
        }else if(prob2>prob1 && prob2>probEmpate){
            await expect(time==time2).to.equal(true);
        }else{
            await expect(false).to.equal(true);
        }
    });
    
    Then(/^Eu vejo a proposta de aposta "simples" para "empate"$/,async()=>{
        if(probEmpate>prob1 && probEmpate>prob2){
            expect(true).to.equal(true);
        }else{
            expect(false).to.equal(true);
        }
    });

})
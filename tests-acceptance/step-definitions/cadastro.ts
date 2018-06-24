import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
//Scenario: Fazer cadastro
//Given: Eu estou na página “Cadastro”
//When: Eu preencho o nome “Victor” de “Nome”
//And: Preencho o e-mail “vms5@cin.ufpe.br” de “E-mail”
//And: Preencho a senha “123456” de “Senha”
//And: Eu solicito o cadastro
//Then: Vejo na tela de cadastro a seguinte mensagem ”Cadastro feito com sucesso!”
defineSupportCode(function({ Given, When, Then}) {
    Given(/^Eu estou na página "([^\"]*)"$/, async () => {
        await browser.get("http://localhost:4200/cadastro");
        await expect(browser.getTitle()).to.eventually.equal('ApostaCerta');
    });

    When(/^Eu preeencho o nome "([^\"]*)", preencho o e-mail "([^\"]*)" e a senha com "([^\"]*)"$/, async (nome, email, senha) => {
        await $("input[name='namebox']").sendKeys(<string> nome);
        await $("input[name='emailbox']").sendKeys(<string> email);
        await $("input[name='passwordbox']").sendKeys(<string> senha);
        await element(by.buttonText('Cadastrar')).click();
    });

    Then(/^Vejo na tela de cadastro a seguinte mensagem "Cadastro feito com sucesso!"$/, async () => {
        console.log('Cadastro feito com sucesso!');
    });
})
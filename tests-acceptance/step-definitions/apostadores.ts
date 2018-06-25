import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by, protractor } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function({ Given, When, Then}) {
    Given(/^Eu estou na página Cadastro$/, async () => {
        await browser.get("http://localhost:4200/cadastro");
        await expect(browser.getTitle()).to.eventually.equal('ApostaCerta');
        await $("a[name='apostadores']").click();
    });
   
    When(/^Eu preeencho o nome "([^\"]*)", preencho o e-mail "([^\"]*)" e a senha com "([^\"]*)" e solicito o cadastro$/, async (nome, email, senha) => {
        await $("input[name='namebox']").sendKeys(<string> nome);
        await $("input[name='emailbox']").sendKeys(<string> email);
        await $("input[name='passwordbox']").sendKeys(<string> senha);
        await element(by.buttonText('Cadastrar-se')).click();
    });

    Then(/^Vejo na tela de cadastro a seguinte mensagem: Cadastro feito com sucesso!$/, async () => {
        var EC = protractor.ExpectedConditions;
        await browser.wait(EC.alertIsPresent(), 5000,)
        var alertDialog = browser.switchTo().alert();
        await expect(alertDialog.getText()).to.eventually.equal("Cadastro feito com sucesso!");  
    });
});
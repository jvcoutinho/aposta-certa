import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by, protractor } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function({ Given, When, Then}) {
    Given(/^Eu estou na pagina "([^\"]*)" e já fiz o cadastro com nome "([^\"]*)", e-mail "([^\"]*)" e senha "([^\"]*)"$/, async (page, nome, email, senha) => {
        await browser.get("http://localhost:4200/login");
        await expect(browser.getTitle()).to.eventually.equal('ApostaCerta');
        //await $("a[name='apostadores']").click();
    });
   
    When(/^Eu preencho o e-mail "([^\"]*)" e a senha com "([^\"]*)" e solicito o login$/, async (email, senha) => {
        await $("input[name='email']").sendKeys(<string> email);
        await $("input[name='password']").sendKeys(<string> senha);
        await element(by.buttonText('Entrar')).click();
        await element(by.buttonText('Entrar')).click();
    });

    Then(/^Vejo na tela de login a seguinte mensagem: "([^\"]*)"$/, async (mensagem) => {
        var EC = protractor.ExpectedConditions;
        await browser.wait(EC.alertIsPresent(), 5000,)
        var alertDialog = browser.switchTo().alert();
        
        if(mensagem == "O usuario entrou!"){
            await expect(alertDialog.getText()).to.eventually.equal("O usuario entrou!"); 
            alertDialog.dismiss();
        }else if(mensagem == "Senha incorreta!"){
            await expect(alertDialog.getText()).to.eventually.equal("Senha incorreta!");
            alertDialog.dismiss();
        }
    });
});
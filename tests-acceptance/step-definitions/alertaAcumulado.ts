import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

var accumulated;

defineSupportCode(function ({ Given, When, Then }) {

    Given(/^The prize has not accumulated for more than R\$ 1.000.000,00$/, async() => {
        var estimatedPrize = element(by.name('prize'));
        var premio;
        await estimatedPrize.getText().then(text => premio = text.length);
        await expect(premio).lessThan(15);
    });

    When(/^I see the estimated prize section$/, () => {
        accumulated = element(by.name('accumulated'));
    });

    Then(/^I don't see an "([^\"]*)" alert$/, async(alert) => {
        var alerta = accumulated.getText();
        await expect(alerta).to.eventually.not.equal(alert);
    });

});
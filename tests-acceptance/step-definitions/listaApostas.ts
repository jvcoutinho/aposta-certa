import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

var indexMandante = -1, indexVisitante = -1;

defineSupportCode(function ({ Given, When, Then }) {

    Given(/^I\'m at "([^\"]*)" page$/, async(page) => {
        await browser.get("http://localhost:4200/concurso");
        await expect(browser.getTitle()).to.eventually.equal('ApostaCerta');           
    });

    Given(/^"([^\"]*)" versus "([^\"]*)" is on the list of bets$/, async (mandante, visitante) => {
        var allMandantes: ElementArrayFinder = element.all(by.className('mandante'));
        await allMandantes;
        var allVisitantes: ElementArrayFinder = element.all(by.className('visitante'));
        await allVisitantes;
        await allMandantes.each((item, index) => item.getText().then(text => { 
            if(text === mandante) 
                indexMandante = index; 
            }));
        await allVisitantes.each((item, index) => item.getText().then(text => { 
            if(text === visitante) 
                indexVisitante = index; 
            }));
        await expect(Promise.resolve(indexMandante)).to.eventually.not.equal(-1);
        await expect(Promise.resolve(indexMandante)).to.eventually.equal(indexVisitante);
    })

    Given(/^"([^\"]*)" versus "([^\"]*)" will happen "([^\"]*)"$/, async (mandante, visitante, data) => {
        var allDatas: ElementArrayFinder = element.all(by.className('data'));
        var indexData = -1;
        
        await allDatas.get(indexMandante).getText().then(text => {
            if(text === data)
                indexData = indexMandante;
        });
        await expect(Promise.resolve(indexData)).to.eventually.not.equal(-1);
    });

    When(/^I sort the list by date$/, async () => {
        
    });

    Then(/^I see "([^\"]*)" versus "([^\"]*)" before "([^\"]*)" versus "([^\"]*)" on the list$/, async (mandante1, visitante1, mandante2, visitante2) => {
        var allMandantes: ElementArrayFinder = element.all(by.className('mandante'));
        await allMandantes;
        var allVisitantes: ElementArrayFinder = element.all(by.className('visitante'));
        await allVisitantes;

        var indexMandante1, indexMandante2;
        var indexVisitante1, indexVisitante2;

        await allMandantes.each((item, index) => item.getText().then(text => { 
            if(text === mandante1) 
                indexMandante1 = index;
            else if(text === mandante2)
                indexMandante2 = index; 
            }));
        await allVisitantes.each((item, index) => item.getText().then(text => { 
            if(text === visitante1) 
                indexVisitante1 = index;
            else if(text === visitante2)
                indexVisitante2 = index; 
            }));
        await expect(Promise.resolve(indexMandante1)).to.eventually.lessThan(indexMandante2); 
        await expect(Promise.resolve(indexVisitante1)).to.eventually.lessThan(indexVisitante2); 
    });
})
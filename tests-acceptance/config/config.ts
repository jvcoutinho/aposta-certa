import { browser, Config } from 'protractor';

export let config: Config = {

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    SELENIUM_PROMISE_MANAGER: true,

    capabilities: {
        browserName: 'chrome',
        version: "67.0.3396.87", 
        chromeOptions: {binary: '/home/CIN/jva/.local/opt/google/chrome/google-chrome'} 
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        '../../features/*.feature'
    ],

    onPrepare: () => {

        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();

    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['pretty'],
        require: ['../../step-definitions/*.ts'],
    }
};
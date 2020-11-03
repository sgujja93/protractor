

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./*.spec.js'],
  multiCapabilities: [
    {'browserName': 'chrome'},
    {'browserName': 'firefox'},
  ],
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
  },
  exclude: ['./example.spec.js', './facebook.spec.js'],
  
 
}

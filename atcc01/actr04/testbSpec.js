/**
 * Created by anonymoussc on 6/30/15 7:47 PM.
 */
describe('Username', function () {
    it('Should bind to input', function () {
        browser.get('http://0.0.0.0:8000/atcc01/actr04/');
        var emceeInput = element(by.model('emcee'));
        var emceeOutput = element(by.binding('emcee'));

        expect(emceeOutput.getText()).toBe('homie');

        emceeInput.clear();
        emceeInput.sendKeys('dexter');

        expect(emceeOutput.getText()).toBe('dexter');
    })
});
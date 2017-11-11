const {assert} = require('chai');

describe('User visits root', () => {
  describe('to post an order', () => {
    describe('with a customer name', () => {
      it('starts with a blank order', () => {
        browser.url('/');

        assert.equal(browser.getText('#deliver-to'), '');
        assert.equal(browser.getText('#cake-type'), '');
        assert.equal(browser.getText('#fillings'), '');
      });

      it('can edit the customer name', () => {
        const name = 'Hungry Person';

        browser.url('/');
        browser.setValue('#name', name);
        browser.click('#submit-name');
        browser.url('/');

        assert.include(browser.getText('#deliver-to'), name);
      });
    });

    it('accepts the cake type', () => {
      const cakeType = 'Whole wheat';

      browser.url('/');
      browser.click('#whole-wheat');
      browser.click('#submit-cake-type');
      browser.url('/');

      assert.include(browser.getText('#cake-type'), cakeType);
    });

    it('accepts multiple fillings', () => {
      const firstChoice = 'Strawberries';
      const secondChoice = 'Banana';

      browser.url('/');
      browser.click('#strawberries');
      browser.click('#banana');
      browser.click('#submit-fillings');
      browser.url('/');

      assert.include(browser.getText('#fillings'), firstChoice);
      assert.include(browser.getText('#fillings'), secondChoice);
    });
  });
});

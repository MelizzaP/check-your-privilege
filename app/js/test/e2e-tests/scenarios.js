'use strict';

describe('my app', function() {


  it('should automatically redirect to /spent when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/spent");
  });


  describe('spent', function() {

    beforeEach(function() {
      browser.get('index.html#/spent');
    });


    it('has an input attribute that accepts values', function () {
      var input = element(by.model('money'));
      input.sendKeys('123');
      expect(input.getAttribute('value')).toBe('123');
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});

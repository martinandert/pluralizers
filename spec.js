var assert  = require('assert');

testEn();
testDe();
testPtBr();

function testEn() {
  describe('the pluralizer for the "en" locale', function() {
    var pluralize = require('./en');

    it('should be a function', function() {
      assert.isFunction(pluralize);
    });

    it('should output the correct pluralizations', function() {
      var entry = { zero: 'no items', one: 'one item', other: '%(count)s items' };

      assert.equal(pluralize(entry, 0),   'no items');
      assert.equal(pluralize(entry, 1),   'one item');
      assert.equal(pluralize(entry, 2),   '%(count)s items');
      assert.equal(pluralize(entry, 42),  '%(count)s items');
    });
  });
}

function testDe() {
  describe('the pluralizer for the "de" locale', function() {
    var pluralize = require('./de');

    it('should be a function', function() {
      assert.isFunction(pluralize);
    });

    it('should output the correct pluralizations', function() {
      var entry = { zero: 'keine Einträge', one: 'ein Eintrag', other: '%(count)s Einträge' };

      assert.equal(pluralize(entry, 0),   'keine Einträge');
      assert.equal(pluralize(entry, 1),   'ein Eintrag');
      assert.equal(pluralize(entry, 2),   '%(count)s Einträge');
      assert.equal(pluralize(entry, 42),  '%(count)s Einträge');
    });
  });
}

function testPtBr() {
  describe('the pluralizer for the "pt-br" locale', function() {
    var pluralize = require('./pt-br');

    it('should be a function', function() {
      assert.isFunction(pluralize);
    });

    it('should output the correct pluralizations', function() {
      var entry = { zero: 'nenhuma entrada', one: 'uma entrada', other: '%(count)s entradas' };

      assert.equal(pluralize(entry, 0),   'nenhuma entrada');
      assert.equal(pluralize(entry, 1),   'uma entrada');
      assert.equal(pluralize(entry, 2),   '%(count)s entradas');
      assert.equal(pluralize(entry, 42),  '%(count)s entradas');
    });
  });
}


/* Helper Functions */

assert.isFunction = function(value, message) {
  assert.equal(Object.prototype.toString.call(value), '[object Function]', message || (value + ' is not a function'));
};

(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#sample_with_custom', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.sample_with_custom(), this.elems, 'should be chainable');
  });

  test('is awesome', function() {
    expect(1);
    strictEqual(this.elems.sample_with_custom().text(), 'awesome0awesome1awesome2', 'should be awesome');
  });

  module('jQuery#sample_with_custom("increment")', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children().sample_with_custom();
    }
  });

  test('is awesome', function() {
    expect(1);
    strictEqual(
      this.elems.sample_with_custom('increment').text(),
      'awesome1awesome2awesome3',
      'should be incremented awesome');
  });

  module('jQuery#sample_with_custom("destroy")', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children().sample_with_custom();
    }
  });

  test('is awesome', function() {
    expect(1);
    strictEqual(this.elems.sample_with_custom('destroy').text(), '', 'should be empty');
  });

  module('jQuery#sample_with_custom("notAllowd")', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
      this.elems.sample_with_custom();
    }
  });

  test('throws', function() {
    expect(1);
    throws(
      function() { this.elems.sample_with_custom('notAllowd'); },
      Error,
      'raised error is an instance of Error'
    );
  });

  module('jQuery.sample_with_custom');

  test('is awesome', function() {
    expect(2);
    strictEqual($.sample_with_custom(), 'awesome.', 'should be awesome');
    strictEqual($.sample_with_custom({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
  });

  module(':sample_with_custom selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is awesome', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':sample_with_custom').get(), this.elems.last().get(), 'knows awesome when it sees it');
  });

}(jQuery));

describe('filter', function() {

  beforeEach(module('privilegeFilters'));

  describe('check', function() {

    it('should convert boolean values to a check or x',
      inject(function(checkFilter) {
        expect(checkFilter(true).toBe('\u2713');
        expect(checkFilter(false).toBe('\u2718');
      }));
  });
});


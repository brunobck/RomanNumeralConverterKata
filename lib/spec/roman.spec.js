(function() {
  var convertFromRomaner;

  convertFromRomaner = require('../roman.js');

  describe("Roman Numeral Converter", function() {
    beforeEach(function() {
      return this.conv = new convertFromRomaner.Converter;
    });
    return describe("Converting from Roman Numerals", function() {
      describe("Subtracting Values", function() {
        it("Handles 'IV' as 4", function() {
          var actual, expected;
          expected = 4;
          actual = this.conv.convertFromRoman('IV');
          return expect(actual).toEqual(expected);
        });
        it("Handles 'IIV' as 3", function() {
          var actual, expected;
          expected = 3;
          actual = this.conv.convertFromRoman('IIV');
          return expect(actual).toEqual(expected);
        });
        it("Handles 'MCMXC' as 1990", function() {
          var actual, expected;
          expected = 1990;
          actual = this.conv.convertFromRoman('MCMXC');
          return expect(actual).toEqual(expected);
        });
        return it("Handles 'MMVIII' as 2008", function() {
          var actual, expected;
          expected = 2008;
          actual = this.conv.convertFromRoman('MMVIII');
          return expect(actual).toEqual(expected);
        });
      });
      describe("Combined Values", function() {
        it("Handles 'II' as 2", function() {
          var actual, expected;
          expected = 2;
          actual = this.conv.convertFromRoman('II');
          return expect(actual).toEqual(expected);
        });
        it("Handles 'VI' as 6", function() {
          var actual, expected;
          expected = 6;
          actual = this.conv.convertFromRoman('VI');
          return expect(actual).toEqual(expected);
        });
        return it("Handles 'VII' as 7", function() {
          var actual, expected;
          expected = 7;
          actual = this.conv.convertFromRoman('VII');
          return expect(actual).toEqual(expected);
        });
      });
      return describe("Basic values", function() {
        it("Handles '' as 0", function() {
          var actual, expected;
          expected = 0;
          actual = this.conv.convertFromRoman('');
          return expect(actual).toEqual(expected);
        });
        it("Handles 'I' as 1", function() {
          var actual, expected;
          expected = 1;
          actual = this.conv.convertFromRoman('I');
          return expect(actual).toEqual(expected);
        });
        it("Handles 'V' as 5", function() {
          var actual, expected;
          expected = 5;
          actual = this.conv.convertFromRoman('V');
          return expect(actual).toEqual(expected);
        });
        it("Handles 'X' as 10", function() {
          var actual, expected;
          expected = 10;
          actual = this.conv.convertFromRoman('X');
          return expect(actual).toEqual(expected);
        });
        it("Handles 'L' as 50", function() {
          var actual, expected;
          expected = 50;
          actual = this.conv.convertFromRoman('L');
          return expect(actual).toEqual(expected);
        });
        it("Handles 'C' as 100", function() {
          var actual, expected;
          expected = 100;
          actual = this.conv.convertFromRoman('C');
          return expect(actual).toEqual(expected);
        });
        it("Handles 'D' as 500", function() {
          var actual, expected;
          expected = 500;
          actual = this.conv.convertFromRoman('D');
          return expect(actual).toEqual(expected);
        });
        return it("Handles 'M' as 1000", function() {
          var actual, expected;
          expected = 1000;
          actual = this.conv.convertFromRoman('M');
          return expect(actual).toEqual(expected);
        });
      });
    });
  });

}).call(this);

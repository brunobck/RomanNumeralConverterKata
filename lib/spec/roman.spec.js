(function() {
  var converter;

  converter = require('../roman.js');

  describe("Roman Numeral Converter", function() {
    beforeEach(function() {
      return this.conv = new converter.RomanConverter;
    });
    afterEach(function() {
      return delete this.conv;
    });
    describe("Converting from Decimal to Roman Numerals", function() {
      describe("Subtracting Values", function() {
        it("Converts 4 to 'IV'", function() {
          var actual, expected;
          expected = 'IV';
          actual = this.conv.convertFromDecimal(4);
          return expect(actual).toEqual(expected);
        });
        it("Converts 9 to 'IX'", function() {
          var actual, expected;
          expected = 'IX';
          actual = this.conv.convertFromDecimal(9);
          return expect(actual).toEqual(expected);
        });
        it("Converts 990 to 'CMXC'", function() {
          var actual, expected;
          expected = 'CMXC';
          actual = this.conv.convertFromDecimal(990);
          return expect(actual).toEqual(expected);
        });
        it("Handles 1990 as 'MCMXC'", function() {
          var actual, expected;
          expected = 'MCMXC';
          actual = this.conv.convertFromDecimal(1990);
          return expect(actual).toEqual(expected);
        });
        it("Converts 1998 to 'MCMXCVIII'", function() {
          var actual, expected;
          expected = 'MCMXCVIII';
          actual = this.conv.convertFromDecimal(1998);
          return expect(actual).toEqual(expected);
        });
        return it("Converts 1999 to 'MCMXCIX'", function() {
          var actual, expected;
          expected = 'MCMXCIX';
          actual = this.conv.convertFromDecimal(1999);
          return expect(actual).toEqual(expected);
        });
      });
      describe("Combined Values", function() {
        it("Converts 7 to 'VII'", function() {
          var actual, expected;
          expected = 'VII';
          actual = this.conv.convertFromDecimal(7);
          return expect(actual).toEqual(expected);
        });
        it("Converts 2 to 'II'", function() {
          var actual, expected;
          expected = 'II';
          actual = this.conv.convertFromDecimal(2);
          return expect(actual).toEqual(expected);
        });
        return it("Converts 11 to 'XI'", function() {
          var actual, expected;
          expected = 'XI';
          actual = this.conv.convertFromDecimal(11);
          return expect(actual).toEqual(expected);
        });
      });
      return describe("Basic Values", function() {
        it("Converts 0 to ''", function() {
          var actual, expected;
          expected = '';
          actual = this.conv.convertFromDecimal(0);
          return expect(actual).toEqual(expected);
        });
        it("Converts 1 to 'I'", function() {
          var actual, expected;
          expected = 'I';
          actual = this.conv.convertFromDecimal(1);
          return expect(actual).toEqual(expected);
        });
        it("Converts 5 to 'V'", function() {
          var actual, expected;
          expected = 'V';
          actual = this.conv.convertFromDecimal(5);
          return expect(actual).toEqual(expected);
        });
        it("Converts 10 to 'X'", function() {
          var actual, expected;
          expected = 'X';
          actual = this.conv.convertFromDecimal(10);
          return expect(actual).toEqual(expected);
        });
        it("Converts 50 to 'L'", function() {
          var actual, expected;
          expected = 'L';
          actual = this.conv.convertFromDecimal(50);
          return expect(actual).toEqual(expected);
        });
        it("Converts 100 to 'C'", function() {
          var actual, expected;
          expected = 'C';
          actual = this.conv.convertFromDecimal(100);
          return expect(actual).toEqual(expected);
        });
        it("Converts 500 to 'D'", function() {
          var actual, expected;
          expected = 'D';
          actual = this.conv.convertFromDecimal(500);
          return expect(actual).toEqual(expected);
        });
        return it("Converts 1000 to 'M'", function() {
          var actual, expected;
          expected = 'M';
          actual = this.conv.convertFromDecimal(1000);
          return expect(actual).toEqual(expected);
        });
      });
    });
    return describe("Converting from Roman Numerals to Decimal", function() {
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

(function() {
  var Converter;

  Converter = (function() {

    function Converter() {}

    Converter.prototype.convertFromRoman = function(input) {
      var current, index, nextValue, numeral, previous, result, value, _i, _len, _ref;
      result = 0;
      current = 0;
      previous = 1000;
      _ref = input.split('');
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        numeral = _ref[index];
        value = this.convertNumeral(numeral);
        nextValue = this.convertNumeral(input.charAt(index + 1));
        if (value > previous) {
          current = value - current;
        } else {
          current += value;
        }
        if (value > nextValue) {
          result += current;
          current = 0;
        }
        previous = value;
      }
      return result;
    };

    Converter.prototype.convertNumeral = function(numeral) {
      var value;
      value = 0;
      switch (numeral) {
        case 'I':
          value = 1;
          break;
        case 'V':
          value = 5;
          break;
        case 'X':
          value = 10;
          break;
        case 'L':
          value = 50;
          break;
        case 'C':
          value = 100;
          break;
        case 'D':
          value = 500;
          break;
        case 'M':
          value = 1000;
      }
      return value;
    };

    return Converter;

  })();

  module.exports = {
    Converter: Converter
  };

}).call(this);

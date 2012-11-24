(function() {
  var Converter;

  Converter = (function() {

    function Converter() {
      var decValues, index, romanValues, val, _i, _len;
      decValues = ['1000', '500', '100', '50', '10', '5', '1'];
      romanValues = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
      this.decHash = {};
      this.romHash = {};
      for (index = _i = 0, _len = decValues.length; _i < _len; index = ++_i) {
        val = decValues[index];
        this.decHash[val] = romanValues[index];
        this.romHash[romanValues[index]] = val;
      }
    }

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
      value = this.romHash[numeral] != null ? this.romHash[numeral] : 0;
      value = parseInt(value);
      return value;
    };

    Converter.prototype.convertFromDecimal = function(input) {
      return this.convertDecimal(input);
    };

    Converter.prototype.convertDecimal = function(number) {
      var value;
      value = this.decHash[number] != null ? this.decHash[number] : '';
      return value;
    };

    return Converter;

  })();

  module.exports = {
    Converter: Converter
  };

}).call(this);

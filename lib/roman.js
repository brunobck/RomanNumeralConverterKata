(function() {
  var RomanConverter;

  RomanConverter = (function() {

    function RomanConverter() {
      var index, romanValues, val, _i, _len, _ref;
      this.decValues = [1000, 500, 100, 50, 10, 5, 1];
      romanValues = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
      this.decHash = {};
      this.romHash = {};
      _ref = this.decValues;
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        val = _ref[index];
        this.decHash[val.toString()] = romanValues[index];
        this.romHash[romanValues[index]] = val;
      }
    }

    RomanConverter.prototype.convertFromRoman = function(input) {
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

    RomanConverter.prototype.convertNumeral = function(numeral) {
      var value;
      value = this.romHash[numeral] != null ? this.romHash[numeral] : 0;
      return value;
    };

    RomanConverter.prototype.getNextDecrementer = function(value, index) {
      var indexMod, result, _ref;
      indexMod = index + 1;
      if ((_ref = this.decValues[indexMod]) === 500 || _ref === 50 || _ref === 5) {
        indexMod++;
      }
      result = this.decValues[indexMod];
      if (result == null) {
        result = 0;
      }
      return result;
    };

    RomanConverter.prototype.convertFromDecimal = function(input) {
      var index, nextNum, result, value, _i, _len, _ref;
      result = '';
      _ref = this.decValues;
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        value = _ref[index];
        nextNum = this.getNextDecrementer(value, index);
        if (input === value) {
          input -= value;
          result += this.convertDecimal(value);
          break;
        }
        while (input >= value - nextNum) {
          if (input < value) {
            result += this.convertDecimal(nextNum);
            result += this.convertDecimal(value);
            input -= value - nextNum;
            continue;
          }
          input -= value;
          result += this.convertDecimal(value);
        }
      }
      return result;
    };

    RomanConverter.prototype.convertDecimal = function(number) {
      var value;
      value = this.decHash[number] != null ? this.decHash[number] : '';
      return value;
    };

    return RomanConverter;

  })();

  module.exports = {
    RomanConverter: RomanConverter
  };

}).call(this);

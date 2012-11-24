class Converter
    constructor: ->
        decValues = ['1000', '500', '100', '50', '10', '5', '1']
        romanValues = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
        @decHash = {}
        @romHash = {}
        for val, index in decValues
            @decHash[val] = romanValues[index]
            @romHash[romanValues[index]] = val

    convertFromRoman: (input) ->
        result = 0
        current = 0
        previous = 1000
        for numeral, index in input.split ''
            value = @convertNumeral numeral

            nextValue = @convertNumeral input.charAt(index + 1)

            if value > previous
                current = value - current
            else
                current += value

            if value > nextValue
                result += current
                current = 0

            previous = value

        result

    convertNumeral: (numeral) ->
        value = if @romHash[numeral]? then @romHash[numeral] else 0
        value = parseInt value

        value

    convertFromDecimal: (input) ->
        @convertDecimal input

    convertDecimal: (number) ->
        value = if @decHash[number]? then @decHash[number] else ''
        value

module.exports = {
    Converter
}

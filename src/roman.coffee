class Converter
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
        value = 0
        switch numeral
            when 'I' then value = 1
            when 'V' then value = 5
            when 'X' then value = 10
            when 'L' then value = 50
            when 'C' then value = 100
            when 'D' then value = 500
            when 'M' then value = 1000
        value

module.exports = {
    Converter
}

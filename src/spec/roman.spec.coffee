convertFromRomaner = require('../roman.js')

describe "Roman Numeral Converter", ->
    beforeEach ->
        @conv = new convertFromRomaner.RomanConverter
    afterEach ->
        delete @conv

    describe "Converting from Decimal to Roman Numerals", ->
        describe "Subtracting Values", ->
            it "Converts 4 to 'IV'", ->
                expected = 'IV'
                actual = @conv.convertFromDecimal 4
                expect(actual).toEqual expected

            it "Converts 9 to 'IX'", ->
                expected = 'IX'
                actual = @conv.convertFromDecimal 9
                expect(actual).toEqual expected

            it "Converts 990 to 'CMXC'", ->
                expected = 'CMXC'
                actual = @conv.convertFromDecimal 990
                expect(actual).toEqual expected

            it "Handles 1990 as 'MCMXC'", ->
                expected = 'MCMXC'
                actual = @conv.convertFromDecimal 1990
                expect(actual).toEqual expected

            it "Converts 1998 to 'MCMXCVIII'", ->
                expected = 'MCMXCVIII'
                actual = @conv.convertFromDecimal 1998
                expect(actual).toEqual expected
        describe "Combined Values", ->
            it "Converts 7 to 'VII'", ->
                expected = 'VII'
                actual = @conv.convertFromDecimal 7
                expect(actual).toEqual expected
            it "Converts 2 to 'II'", ->
                expected = 'II'
                actual = @conv.convertFromDecimal 2
                expect(actual).toEqual expected
            it "Converts 11 to 'XI'", ->
                expected = 'XI'
                actual = @conv.convertFromDecimal 11
                expect(actual).toEqual expected
        describe "Basic Values", ->
            it "Converts 0 to ''", ->
                expected = ''
                actual = @conv.convertFromDecimal 0
                expect(actual).toEqual expected
            it "Converts 1 to 'I'", ->
                expected = 'I'
                actual = @conv.convertFromDecimal 1
                expect(actual).toEqual expected
            it "Converts 5 to 'V'", ->
                expected = 'V'
                actual = @conv.convertFromDecimal 5
                expect(actual).toEqual expected
            it "Converts 10 to 'X'", ->
                expected = 'X'
                actual = @conv.convertFromDecimal 10
                expect(actual).toEqual expected
            it "Converts 50 to 'L'", ->
                expected = 'L'
                actual = @conv.convertFromDecimal 50
                expect(actual).toEqual expected
            it "Converts 100 to 'C'", ->
                expected = 'C'
                actual = @conv.convertFromDecimal 100
                expect(actual).toEqual expected
            it "Converts 500 to 'D'", ->
                expected = 'D'
                actual = @conv.convertFromDecimal 500
                expect(actual).toEqual expected
            it "Converts 1000 to 'M'", ->
                expected = 'M'
                actual = @conv.convertFromDecimal 1000
                expect(actual).toEqual expected

    describe "Converting from Roman Numerals to Decimal", ->
        describe "Subtracting Values", ->
            it "Handles 'IV' as 4", ->
                expected = 4
                actual = @conv.convertFromRoman 'IV'
                expect(actual).toEqual expected

            it "Handles 'IIV' as 3", ->
                expected = 3
                actual = @conv.convertFromRoman 'IIV'
                expect(actual).toEqual expected

            it "Handles 'MCMXC' as 1990", ->
                expected = 1990
                actual = @conv.convertFromRoman 'MCMXC'
                expect(actual).toEqual expected

            it "Handles 'MMVIII' as 2008", ->
                expected = 2008
                actual = @conv.convertFromRoman 'MMVIII'
                expect(actual).toEqual expected

        describe "Combined Values", ->
            it "Handles 'II' as 2", ->
                expected = 2
                actual = @conv.convertFromRoman 'II'
                expect(actual).toEqual expected
            it "Handles 'VI' as 6", ->
                expected = 6
                actual = @conv.convertFromRoman 'VI'
                expect(actual).toEqual expected
            it "Handles 'VII' as 7", ->
                expected = 7
                actual = @conv.convertFromRoman 'VII'
                expect(actual).toEqual expected

        describe "Basic values", ->
            it "Handles '' as 0", ->
                expected = 0
                actual = @conv.convertFromRoman ''
                expect(actual).toEqual expected
            it "Handles 'I' as 1", ->
                expected = 1
                actual = @conv.convertFromRoman 'I'
                expect(actual).toEqual expected
            it "Handles 'V' as 5", ->
                expected = 5
                actual = @conv.convertFromRoman 'V'
                expect(actual).toEqual expected
            it "Handles 'X' as 10", ->
                expected = 10
                actual = @conv.convertFromRoman 'X'
                expect(actual).toEqual expected
            it "Handles 'L' as 50", ->
                expected = 50
                actual = @conv.convertFromRoman 'L'
                expect(actual).toEqual expected
            it "Handles 'C' as 100", ->
                expected = 100
                actual = @conv.convertFromRoman 'C'
                expect(actual).toEqual expected
            it "Handles 'D' as 500", ->
                expected = 500
                actual = @conv.convertFromRoman 'D'
                expect(actual).toEqual expected
            it "Handles 'M' as 1000", ->
                expected = 1000
                actual = @conv.convertFromRoman 'M'
                expect(actual).toEqual expected

converter = require('../roman.js')

describe "Roman Numeral Converter", ->
    beforeEach ->
        @conv = new converter.Converter

    describe "Subtracting Values", ->
        it "Handles 'IV' as 4", ->
            expected = 4
            actual = @conv.convert 'IV'
            expect(actual).toEqual expected

        it "Handles 'IIV' as 3", ->
            expected = 3
            actual = @conv.convert 'IIV'
            expect(actual).toEqual expected

        it "Handles 'MCMXC' as 1990", ->
            expected = 1990
            actual = @conv.convert 'MCMXC'
            expect(actual).toEqual expected

        it "Handles 'MMVIII' as 2008", ->
            expected = 2008
            actual = @conv.convert 'MMVIII'
            expect(actual).toEqual expected

    describe "Combined Values", ->
        it "Handles 'II' as 2", ->
            expected = 2
            actual = @conv.convert 'II'
            expect(actual).toEqual expected
        it "Handles 'VI' as 6", ->
            expected = 6
            actual = @conv.convert 'VI'
            expect(actual).toEqual expected
        it "Handles 'VII' as 7", ->
            expected = 7
            actual = @conv.convert 'VII'
            expect(actual).toEqual expected

    describe "Basic values", ->
        it "Handles '' as 0", ->
            expected = 0
            actual = @conv.convert ''
            expect(actual).toEqual expected
        it "Handles 'I' as 1", ->
            expected = 1
            actual = @conv.convert 'I'
            expect(actual).toEqual expected
        it "Handles 'V' as 5", ->
            expected = 5
            actual = @conv.convert 'V'
            expect(actual).toEqual expected
        it "Handles 'X' as 10", ->
            expected = 10
            actual = @conv.convert 'X'
            expect(actual).toEqual expected
        it "Handles 'L' as 50", ->
            expected = 50
            actual = @conv.convert 'L'
            expect(actual).toEqual expected
        it "Handles 'C' as 100", ->
            expected = 100
            actual = @conv.convert 'C'
            expect(actual).toEqual expected
        it "Handles 'D' as 500", ->
            expected = 500
            actual = @conv.convert 'D'
            expect(actual).toEqual expected
        it "Handles 'M' as 1000", ->
            expected = 1000
            actual = @conv.convert 'M'
            expect(actual).toEqual expected

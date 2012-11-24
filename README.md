RomanNumeralConverterKata
=========================
Basic Kata for Converting Roman Numerals [![Build Status](https://secure.travis-ci.org/tebriel/RomanNumeralConverterKata.png?branch=master)](https://travis-ci.org/tebriel/RomanNumeralConverterKata)

This kata idea was taken from [CodingDoJo] (http://codingdojo.org/cgi-bin/wiki.pl?KataRomanNumerals), but the code is all my own

## Getting Started
~~Install the module with: `npm install roman_numeral_kata`~~

## Documentation
It's a kata, what do you want?!

## Examples
```coffeescript
conv = new converter.RomanConverter
resultDec = conv.convertFromDecimal 4

resultRom = conv.convertFromRoman 'IV'
console.log "Success!" if resultDec == resultRom
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## Release History
1.0 First Try

## License
Copyright (c) 2012 Chris Moultrie  
Licensed under the MIT license.

//Uses markdownpdf
//https://www.npmjs.com/package/markdown-pdf
//https://github.com/alanshaw/markdown-pdf

// You MIGHT need to run the following first to install phantomjs (especially on mac?):
// node node_modules/phantomjs-prebuilt/install.js
// if so we can include this in the package.json for the future.
// see:
//   https://www.bountysource.com/issues/40330704-typeerror-bad-argument
//   https://github.com/Medium/phantomjs/issues/533


var convert = require("./convert");

var inputFiles = [
    "./workbook/workbook-title-page.md",
    "./workbook/technical-debt.md",
    "./workbook/quality-payoff.md",
    "./workbook/stories.md",
    "./workbook/3cs.md",
    "./workbook/invest.md",
    "./workbook/dodgy-stories.md",
    "./workbook/story-splitting.md",
    "./workbook/elephant.md",
    "./workbook/xp-practices.md",
    "./workbook/agile-testing.md",
    "./workbook/testing-pyramid.md",

    "./katas/fizzbuzz_bonus.md",
    "./katas/roman_numeral_calculator.md",
    "./katas/bowling.md",
    "./katas/gilded_rose.md"
];

var outputName = "workbook.pdf";

convert(inputFiles, outputName);




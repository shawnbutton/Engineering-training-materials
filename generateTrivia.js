// You MIGHT need to run the following first to install phantomjs (especially on mac?):
// node node_modules/phantomjs-prebuilt/install.js
// if so we can include this in the package.json for the future.
// see:
//   https://www.bountysource.com/issues/40330704-typeerror-bad-argument
//   https://github.com/Medium/phantomjs/issues/533

const convert = require('./convert');

const inputFiles = [
  './katas/trivia_scorer_all.md'
];

convert(inputFiles, 'trivia.pdf');

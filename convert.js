const markdownpdf = require("markdown-pdf"),
      through     = require('through'),
      path        = require('path'),
      cheerio     = require('cheerio');

function preProcessMd () {
  return through(function(data) {
    const pageBreak = '\n\n<div style="page-break-before: always;"></div>\n\n';

    this.queue(data + pageBreak);
  })
}

const preProcessHtml = basePath => {
  return () => {
    return through(function(chunk) {
      const $ = cheerio.load(chunk);

      $('img[src]').each(function() {
        let imagePath = $(this).attr('src');
        imagePath = path.resolve(basePath, imagePath);
        const newImageTag = imagePath;
        $(this).attr('src', newImageTag);
      });

      this.push($.html());
    });
  }
};


var basePath = path.resolve(__dirname, 'workbook');

var options = {
    preProcessHtml: preProcessHtml(basePath),
    preProcessMd: preProcessMd,
    runningsPath: 'runnings.js'

};

var Convert = function(inputName, outputName) {

    console.log('Converting', inputName, 'to', outputName);

    markdownpdf(options).concat.from(inputName).to(outputName, function () {
        console.log('Created', outputName);
    });

};

module.exports = Convert;




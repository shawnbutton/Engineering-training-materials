var markdownpdf = require("markdown-pdf"),
    through = require('through'),
    path = require('path'),
    cheerio = require('cheerio');


function preProcessMd () {
    return through(function(data) {
        pageBreak = '\n\n<div style="page-break-before: always;"></div>\n\n';

        this.queue(data + pageBreak);
    })
}

var preProcessHtml = function(basePath) {
    return function() {
        return through(function(chunk) {
            var $ = cheerio.load(chunk);

            $('img[src]').each(function() {
                var imagePath = $(this).attr('src');
                imagePath = path.resolve(basePath, imagePath);
                var newImageTag = imagePath;
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
    runningsPath: "."

};

var Convert = function(inputName, outputName) {

    console.log("Converting " + inputName + " to " + outputName);

    markdownpdf(options).concat.from(inputName).to(outputName, function () {
        console.log("Created", outputName);
    });

};

module.exports = Convert;




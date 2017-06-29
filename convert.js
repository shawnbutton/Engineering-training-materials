var markdownpdf = require("markdown-pdf");
var through = require('through');


function preProcessMd () {
    return through(function(data) {
        pageBreak = '\n\n<div style="page-break-before: always;"></div>\n\n';

        this.queue(data + pageBreak);
    })
}

var options = {
    preProcessMd: preProcessMd
};

var Convert = function(inputName, outputName) {

    console.log("Converting " + inputName + " to " + outputName);

    markdownpdf(options).concat.from(inputName).to(outputName, function () {
        console.log("Created", outputName);
    });

};

module.exports = Convert;




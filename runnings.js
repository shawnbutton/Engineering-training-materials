exports.header = null;

/**
 * header and footer might be of format specified in http://phantomjs.org/api/webpage/property/paper-size.html
 *
 * Example:
 *  {
 *    height: "1cm",
 *    contents: function(pageNum, numPages) {
 *      return "<h1>Header <span style='float:right'>" + pageNum + " / " + numPages + "</span></h1>"
 *    }
 *  }
 */


exports.footer =
    {
        height: ".5cm",
        contents: function (pageNum, numPages) {
            // no footer on page 1
            if (pageNum === 1) return "";

            return "<span style='font-size: 8pt'>Leanintuit - Agile Engineering Workbook <span style='float:right'>" +
                pageNum + " / " + numPages + "</span></span>";
        }
    };


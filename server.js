const fs = require('fs');
const zlib = require('zlib');
const lineReader = require('line-reader');

const inputFile = './gzipfolder/891067072053_elasticloadbalancing_us-west-2_app.ExternalALB-main.dd9d633405d384fa_20200107T0000Z_35.160.197.191_655wuf83.log.gz';
const outputFile = './gzipfolder/891067072053_elasticloadbalancing_us-west-2_app.ExternalALB-main.dd9d633405d384fa_20200107T0000Z_35.160.197.191_655wuf83.log';
var arrayObj = [];
const fileContents = fs.createReadStream(inputFile);
const writeStream = fs.createWriteStream(outputFile);
const unzip = zlib.createGunzip();

fileContents.pipe(unzip).pipe(writeStream).on('finish', function () {
    fs.readFile(outputFile, function (err, data) {
        if (err) throw err;
        var array = data.toString().split("\n");
        if (array.length > 1) {
            for (i in array) {
                if (array[i].length !== 0) {
                    //JSON ARRAY
                    console.log(array[i].split(" "));
                    //JSON OBJECT
                    console.log(JSON.stringify(Object.assign({}, array[i].split(" "))));
                }
            }
        } else {
            //JSON ARRAY
            console.log(array[0].split(" "));
            //JSON OBJECT
            console.log(JSON.stringify(Object.assign({}, array[i])));
        }

    });
});




// Read the file after unzip




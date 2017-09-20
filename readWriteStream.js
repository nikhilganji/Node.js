var http = require('http');
var fs = require('fs');

var myReadStream =  fs.createReadStream(__dirname + '/sample.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/sampleWrite.txt');


myReadStream.pipe(myWriteStream); // Efficient way to stream data from read to write!!

/* //Alternate to using "pipe"
myReadStream.on('data', function(chunk){
    console.log('new chunk received');
    myWriteStream.write(chunk);
});*/

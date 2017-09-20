var fs = require('fs');

/*
//Synchronous Reading and writing(Blocking the further code till this execute)
var readMe = fs.readFileSync('sample.txt', 'utf8');


 fs.writeFileSync('writeMe.txt', readMe); // Writing the data from sample.txt to new doc writeMe.txt

 var writtenFile = fs.readFileSync('writeMe.txt', 'utf8');
console.log(writtenFile);

console.log('Hello There!');
*/


//Asynchronous code:

fs.readFile('sample.txt', 'utf8', function(error, data){
    fs.writeFile('writable2.txt', data);


});
fs.readFile('writable2.txt', 'utf8', function(err, data){
    console.log(data);

});

//fs.unlink('writable2.txt'); //for deleting the file from directory!
fs.mkdir('folder', function(){   //mkdir is creating a new folder in the existing directory
    fs.readFile('sample.txt', 'utf8', function(err, data){
        fs.writeFile('./folder/file2.txt', data); //writes file into this particular director mentioned
    });
});


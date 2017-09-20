var http = require('http');
var fs = require('fs');



var server = http.createServer(function(req, res){
    console.log('request was made: '+ req.url);
    if(req.url === '/spidy') {   //spidy is just any random name to check the match and forward to index.html
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);


    }
    else if(req.url === '/dude'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/dude.html').pipe(res);
    }
    else if(req.url ==='/jsonObject'){
        var holder = [{name: 'nikhil', age: 23, sex: 'male'}, {name: 'naina', age:24, sex: 'female'}]
        res.writeHead(200, {'Content-Type': 'application/JSON'});
        res.end(JSON.stringify(holder));
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/errorPage.html').pipe(res);
    }
});

server.listen(3000, '172.16.0.159'); // Mention your own port number and ip address to broadcast.
console.log('Listening to port 3000');
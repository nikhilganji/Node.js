var events = require('events');
var util = require('util');

var person = function(name){
    this.name = name;
};

util.inherits(person, events.EventEmitter);

var nik = new person('Nikhil Ganji');
var ben = new person('Benjamin Tennyson');
var gwen = new person('Gwentelon');

var people = [nik,ben,gwen];

people.forEach(function(dude){
    dude.on('speak', function(msg){
        console.log(dude.name + ' said ' + msg );
    });
});

nik.emit('speak', 'Hello There!', 3000);
ben.emit('speak', 'Hey Nikhil. What\'s up?');
gwen.emit('speak', 'Hello Guys..!!');


/*var time=0;
setInterval(function (){
    time++;
    console.log(time +' seconds passed');
}, 1000);
*/

var nik =function(word){
    return word + ' is the word you have passed!';
};

var ben = function(doed){
    return doed + ' is cartoon character';
};


module.exports= {
  nik : nik,
    ben: ben
};


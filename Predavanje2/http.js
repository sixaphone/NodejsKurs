var http = require('http');
var util = require('util');
var io = require('socket.io-client');
var scanner = require('readline');


//creating sockets
io.connect('http://172.25.23.21:55664');
var socket = io('http://172.25.23.21:55664');

//do no make a emit call untill the connection is done
socket.on('connect',function(){
    console.log('connected');
  
    var input = scanner.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // input.question('What do you think of Node.js? ', (answer) => {
            // socket.emit('hello',answer)
            // input.close();
    // });

    input.question("Whats your user?", (answer) => {
        socket.emit('user',answer);
        rl.on('line', function (data) {
            socket.emit('userInput',data);
        });
        //  input.close();
    });
    
   
  

});

socket.on('serverResponse', function(data){console.log(data);});

socket.on('chatData',function(data){
    console.log(data);
});

//   socket.emit('hello',null);
//   socket.on('error', function(data){console.log(err);});

// http.createServer(function (req, res) {
//     //get vanjsku data
//         // http.get('http://output.jsbin.com/pirazumuve.json',function(data){
//         //     res.end();
//         // });
//     //dozvoli ako je http request method post ali ne ako je get
//         // if(req.method == 'POST')
//         //     console.log("Proslo");
//         // else
//         //     console.log("METHOD NOT ALLOWED");

    
// }).listen(3000); 
        

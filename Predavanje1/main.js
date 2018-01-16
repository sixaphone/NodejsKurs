const os = require('os');
const fs = require('fs');
var colors = require('colors');
var moment = require('moment');
var auto = require('./auto');

////logging sistem info
// console.log(os.cpus());
// console.log(os.arch());

////writing to file sistem
// fs.writeFile('mojfajl3.txt',"Podatak",function(){console.log('sad tek upisano');});
// console.log('Upisujem sync');
// fs.writeFileSync('mojfajl2.txt',"Ovaj sistem ima arhitekturu " + os.arch()+'\n');

////writing text in different color
// console.log('hello'.green); // outputs green text 
// console.log('i like cake and pies'.underline.red) // outputs red underlined text 
// console.log('inverse the color'.inverse); // inverses the color 
// console.log('OMG Rainbows!'.rainbow); // rainbow 
// console.log('Run the trap'.trap); // Drops the bass 


// ////moment used to manipulate with dates
// var currentTime = new Date();
// var endTime = new Date('01.01.2019.');
// var diffdays = (moment(endTime).diff(currentTime,'days'));
// // console.log(Math.abs(moment(currentTime).diff(endTime,'days')));

// module.exports.today = currentTime;
// module.exports.end = endTime;
// module.exports.diff = diffdays;
// module.exports.colors = colors;

console.log(auto.stanje);
auto.start();
console.log(auto.stanje);
auto.stop();
console.log(auto.stanje);

var expect = require('chai').expect;
var fs = require('fs');

// function divide(a,b){
//         console.log(typeof a);
//         console.log(typeof b);
//     if(!a)
//         throw new Error("One number is undefined");
//     if(b===0)
//         throw new Error("Can't divide with zero");
//     if(typeof a == "string" || typeof b == "string")
//         throw new Error("Can't divide string");

//     return Math.round((a/b)*100)/100;
// }

// it('test divide function to be greater than 0',function(){
//     var result = divide(1,2);
//     expect(result).to.be.greaterThan(0);
// });

// it('test divide function to be equal to 0.5',function(){
//     var result = divide(1,2);
//     expect(result).to.be.equal(0.5);
// });

// it('test divide function to not throw exception',function(){
//     expect(divide(1,2)).to.not.throw;
// });

// it('test divide function to throw divide by zero exception',function(){
//     expect(function(){divide(1,0)}).to.throw("Can't divide with zero");
// });

// it('test divide function to throw undefined number exception',function(){
//     expect(divide).to.throw("One number is undefined");
// });

// it('test divide function with strings',function(){
//     expect(divide.bind(null,"1","2")).to.throw("Can't divide string");
// });

// function asyncFunction(callback){
//     setTimeout(function(){
//         return callback("OK");
//     },10    );
// }

// it("test an async function call",function(done){
//     asyncFunction(function(data){
//         expect(data).to.be.equal("OK");
//         done();
//     });
// });


// function stringClear(text){
//     if(!(typeof text =="string"))
//         throw new Error("Param is not string");
//     if(text.match(/[$+-?&/]/g) != null)
//         throw new Error("Special chars +,-,?,&,/ and $ forbidden");
//     return text.toLowerCase();    
// }

// function stringClear2(text){
//     if(!(typeof text =="string"))
//         throw new Error("Param is not string");
//     return text.replace(/[$+-?&/]/g,'').toLowerCase();    
// }

// it('test string format function to lower chars',function(){
//     expect(stringClear("JEDAN")).to.be.equal("jedan");
// });

// it('test string format function to throw non string exception',function(){
//     expect(function(){
//         stringClear(1);
//     }).to.throw("Param is not string");
// });

// it('test string format function to throw non string exception',function(){
//     expect(function(){
//         stringClear("jed+an");
//     }).to.throw("Special chars +,-,?,&,/ and $ forbidden");
// });


// it('test string format function to lower chars and clear specials',function(){
//     expect(stringClear2("JED+-AN")).to.be.equal("jedan");
// });

// it('test string format function to throw non string exception',function(){
//     expect(function(){
//         stringClear2(1);
//     }).to.throw("Param is not string");
// });

var fajl=null;
function writeToFile(filename,content,callback){
    var file = fajl = "./"+filename;
    fs.writeFile(file, content,function(){
        callback();
    });
}

it('write to file',function(done){
    writeToFile("test.txt","Hello world",function(data){
        fs.exists("./test.txt",function(exits){
            expect(exits).to.be.equal(true);
            done();
        });
    });
});

it('write to file',function(done){
    writeToFile("test.txt","Hello world",function(data){
        fs.exists("./test.txt",function(exits){
            expect(exits).to.be.equal(true);
            done();
        });
    });
});

 after(function() {
     if(fajl!=null)
        fs.unlink(fajl);
  });

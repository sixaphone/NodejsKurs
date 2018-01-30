var http = require('http');
var qs = require('querystring');
var mongo = require('mongodb').MongoClient;
var url = "mongodb://172.25.23.21:27017/mirsad_halicevic";
var parser = require('url');

http.createServer(function (req, res) {


    mongo.connect(url, function(err, db) {   
        var dbo = db.db('mirsad_halicevic');
        var query = {};
        var cleanUrl = parser.parse(req.url,true).query;

            if(cleanUrl.account_number)
                query.account_number = parseInt(cleanUrl.account_number);
            if(cleanUrl.balance)
                query.balance = parseInt(cleanUrl.balance);
            if(cleanUrl.age)
                query.age = parseInt(cleanUrl.age);     

    // dbo.collection("accounts").find(query).toArray(function(err, result) {
    //         res.write(JSON.stringify(result));
    //         db.close();
    //         res.end();
    //     });
        // dbo.collection("accounts").aggregate([{"$group":{_id:null,total:{"$sum":"$balance"}}}])
        //             .toArray(function(err, data){
        //     console.log(data[0].total);
        //     db.close();
        //     res.end();
        // });

        var post;
        var body;
       req.on('data', function (data) {
            body += data;
        });

        req.on('end', function () {
             post = qs.parse(body);
            // use post['foo'], etc.\
            var newAcc = { account_number: parseInt(post.undefinedaccount_number),balance:parseInt(post.balance),
                            firstname:post.firstname,lastname:post.lastname,age:parseInt(post.age),gender:post.gender,
                            address:post['address'],employer:post['employer'],email:post['email'],
                            city:post['city'],state:post['state']};

            console.log(post);
            console.log(newAcc);
            dbo.collection("accounts").insert(newAcc, function(err, result) {
                if (err) {
                    res.write("<h1>Data no Inserted 500</h1>");
                }
                else{
                    res.write("<h1>Success 200</h1>");
                }
            db.close();
            res.end();
        });
        });
        
    });
}).listen(4000); 
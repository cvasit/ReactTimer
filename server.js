var express =require('express');

//create your app
var app=express();
//
// app.use(function (req,res,next) {
//     if(req.headers['x-forwarded-proto']=='http')
//         next();
//     else
//         res.redirect('http://' + req.hostname + req.url)
// });

//tell express which folder to server exposing the folder to webserver
app.use(express.static('public'));

var portnumber=3000;

app.listen(portnumber,function () {

    //var port=process.env.PORT || portnumber;

    var port= portnumber;

    console.log(`Express server is up on port:${port}`);
});

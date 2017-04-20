var express = require('express');
var app = express();
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'uploads/'})

app.use(express.static(__dirname+'/public'));

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.post("/getFileSize", upload.single('file'), function(req, res){
    if(req.file){
        var size = req.file.size;
        var data = {"size": size};
        res.end(JSON.stringify(data));
    }
});

app.listen(port, () => {
    console.log("Server is running at "+port);
});
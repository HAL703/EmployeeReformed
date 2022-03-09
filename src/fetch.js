var express = require('express');
var hierarchyData = require('./hierarchyData.json');
var app = express();

app.get('/' , (req, res) => {
    var file = hierarchyData.json
    jsonfile.readFile(file, (err, obj) => {
       console.log("Done");
    });
});
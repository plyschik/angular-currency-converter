const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/angular-currency-converter'));

app.get('/*', function(request, response) {
    response.sendFile(path.join(__dirname+'/dist/angular-currency-converter/index.html'));
});

app.listen(process.env.PORT || 8080);
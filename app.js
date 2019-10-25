const { Pool, Client } = require('pg');
var express = require('express');
var app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
app.use(express.static('public'));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', function (req, res) {
    res.sendfile("index.html");
});

app.post('/clients/create', function(req, res) {
    console.log(req.body);
});

app.get('/clients/create', function(req, res) {
    res.sendfile("public/pages/cadastro.html");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


const connectionString = 'postgresql://postgres:123456789@localhost:5432/lp';
const pool = new Pool({
    connectionString: connectionString,
});

pool.query('SELECT NOW()', (err, res) => {
    pool.end();
});

const client = new Client({
    connectionString: connectionString,
});

client.connect();
client.query('SELECT NOW()', (err, res) => {

    client.end();
});
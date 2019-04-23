const express = require('express')
const { Client } = require('pg')
var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const port = 8080

// const username = 'dwh';
// const pwd = 'dwh';
// const dbip = '127.0.0.1';
// const dbport = '5432';
// const db = 'dwh';
// const connectionString = "postgres://userName:password@serverName/ip:port/nameOfDatabase";
const connectionString = `postgresql://dwh:dwh@127.0.0.1:5432/dwh?sslmode=disable`;



let pgClient = new Client(connectionString);

app.get('/helloworld', async (req, res) => {
    console.log('get request');
    let query = await pgClient.query(
        "select id, masterid, createdts, dealid, type, status, authorid, counterpartyid, duration, price, netflags, identitylevel, blacklist, tag, frozensum creatoridentitylevel, creatorname, creatorcountry from orders");
    console.log(query);
    res.status(200).jsonp({data: query.rows, errno: 0, msg: 'ok'});
});

app.all('/test', async (req, res) => {
    console.log('/test');
    res.status(200).jsonp( { msg: 'ok' });
});

app.post('/ip', async (req, res) => {
    console.log(`/ip GET ${req.body.ip}`);
    let query = pgClient.query(`
        INSERT INTO ip values($1, 1)
        ON CONFLICT (address) DO
        UPDATE SET times = ip.times + 1;
    `, [req.body.ip]);
    res.status(200).jsonp({msg: 'ok'});
});

app.listen(port, async () => {
    await pgClient.connect();
    let query = await pgClient.query(`
        CREATE TABLE IF NOT EXISTS if (
            address varchar(20) primary key,
            times integer)
    `);
    console.log(query);

    console.log(`Example app listening on port ${port}!`)
});

process.on('exit', async () => {
    await pgClient.end();
})

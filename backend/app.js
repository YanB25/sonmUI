const express = require('express')
const { Client } = require('pg')

const app = express()
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
    await pgClient.connect();
    console.log('get request');
    let query = await pgClient.query(
        "select id, masterid, createdts, dealid, type, status, authorid, counterpartyid, duration, price, netflags, identitylevel, blacklist, tag, frozensum creatoridentitylevel, creatorname, creatorcountry from orders;");
    console.log(query);
    res.status(200).jsonp({data: query.rows, errno: 0, msg: 'ok'});
    await pgClient.end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

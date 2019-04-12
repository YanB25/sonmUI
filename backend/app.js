const express = require('express')
const app = express()
const port = 8080

app.get('/helloworld', (req, res) => {
    console.log('get request!!')
    res.status(200).jsonp({msg: "success!"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
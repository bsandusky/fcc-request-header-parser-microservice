'use strict'
const express = require("express")
const app = express()

app.get('/api/whoami', (req, res) => {

    let output = {  
                    ipaddress: req.get("x-forwarded-for") || req.ip || req.socket.remoteAddress ||req.connection.socket.remoteAddress,
                    language: req.get("accept-language").split(",")[0],
                    software: req.get("user-agent").split(') ')[0].split(' (')[1]
                }
    res.send(output)
})

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT)
})
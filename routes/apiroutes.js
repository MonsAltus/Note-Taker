// var db = require('../db/db.json')
// const path = require('path')
const fs = require('fs')
var dataBase = []

module.exports = (app) => {
    app.get('/api/notes', (req,res) =>  {
        fs.readFile('./db/db.json', (err,data) => {
            if (err) throw err
            dataBase = JSON.parse(data);
            res.json(dataBase)
        })
    })

    app.post('/api/notes', (req,res) => {
        dataBase.push(req.body)
        fs.writeFile('./db/db.json', JSON.stringify(dataBase), function (err)  {
            if (err) {
                return console.log(err)
            } else {
                console.log('Note Saved')
            }
            })
            res.json(req.body);
        });
}
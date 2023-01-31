// import express from "express"
// import postgres from "postgres"
// import dotenv from "dotenv"
const express = require("express")
const postgres = require("postgres")
const dotenv = require("dotenv")
dotenv.config()

const app = express()
app.use(express.static("public"));

const sql = postgres(process.env.DATABASE_URL)

// module.exports = sql


app.get("/tickets" , (req,res) =>{
    sql.query(`SELECT * FROM ticketInfo`).then((data) =>{
        res.json(data)
    })
})
/*
app crud will go here
postgres://mvp_5scq_user:SodjLzP6sISUGdqQu8XaBr76WLY1eJlW@dpg-cfcl1gpgp3jokp2uauh0-a.oregon-postgres.render.com/mvp_5scq
*/

app.listen(process.env.PORT,() =>{
    console.log(`listening on port ${process.env.PORT}`)
})


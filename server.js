import express from "express"
import postgres from "postgres"
import dotenv from "dotenv"

module.exports = sql

dotenv.config()
app.use(express.static("public"));

const app = express()
const sql = postgres(process.env.DATABASE_URL)

/*
app crud will go here
*/

app.listen(process.env.PORT,() =>{
    console.log(`listening on port ${3000}`)
})


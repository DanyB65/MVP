import express from "express"
import postgres from "postgres"
import dotenv from "dotenv"

module.exports = sql

dotenv.config()
app.use(express.static("public"));

const app = express()
const sql = postgres(process.env.DATABASE_URL)
app.get("/tickets" , (req,res) =>{
    sql `SELECT * FROM ticketInfo`.then((data) =>{
        res.json(data)
    })
})
/*
app crud will go here
postgres://mvp_5scq_user:SodjLzP6sISUGdqQu8XaBr76WLY1eJlW@dpg-cfcl1gpgp3jokp2uauh0-a.oregon-postgres.render.com/mvp_5scq
*/

app.listen(process.env.PORT,() =>{
    console.log(`listening on port ${3000}`)
})


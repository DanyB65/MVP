const express = require("express")
const postgres = require("postgres")
const dotenv = require("dotenv")
const { error } = require("console")
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.static("public"))

const sql = postgres(process.env.DATABASE_URL)

app.get("/tickets" , (req,res) =>{
    sql.query(`SELECT * FROM ticketInfo`).then((data) =>{
        res.json(data)
    })
})
app.post("/tickets",(req,res)=>{
    const inputData = req.body

    sql.query(`INSERT INTO ticketInfo(input1, input2, input3,input4) VALUES ($1, $2, $3, $4)`,[inputData.input1,inputData.input2,inputData.input3,inputData.input4])
    .then(data =>{
        res.json({ status: "success", message: "Ticket sumbited successfully"})
    })
    .catch(error =>{
        res.json({ status:"error", message: error.message})
    })
})
/*
app crud will go here
postgres://mvp_5scq_user:SodjLzP6sISUGdqQu8XaBr76WLY1eJlW@dpg-cfcl1gpgp3jokp2uauh0-a.oregon-postgres.render.com/mvp_5scq
*/

app.listen(process.env.PORT,() =>{
    console.log(`listening on port ${process.env.PORT}`)
})


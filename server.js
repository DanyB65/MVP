const express = require("express")
const postgres = require("postgres")
const dotenv = require("dotenv")
const cors = require('cors')
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

const sql = postgres(process.env.DATABASE_URL)

app.get ("/tickets" , async(req,res) =>{
    try {
        await sql `SELECT * FROM ticketInfo`.then((data) =>{
            res.json(data)
        })
    } catch (error) {
        console.log(error.message)
    }
})

app.post("/tickets",async(req,res)=>{
    const {name,date,location,ticketproblem} = req.body 
    try {
     await sql `INSERT INTO ticketInfo(name, date, location, ticketproblem) VALUES (${name}, ${date}, ${location}, ${ticketproblem}) RETURNING *`
        .then(data =>{
            res.json(data)
        })
    } catch (error) {
     res.json({ status:"error", message: error.message})
    }
})

app.get('/tickets/:id',async(req,res)=>{
    let id = req.params.id
    try{
          await sql`SELECT * FROM ticketInfo WHERE id =${id}`
        .then(data =>{
            res.json(data)
        })
        }catch(error){
        console.log(error.message)  
    }
})
    
/*
app crud will go here
postgres://mvp_5scq_user:SodjLzP6sISUGdqQu8XaBr76WLY1eJlW@dpg-cfcl1gpgp3jokp2uauh0-a.oregon-postgres.render.com/mvp_5scq
*/
app.listen(process.env.PORT,() =>{
    console.log(`listening on port ${process.env.PORT}`)
})


import express from "express";
import mysql from "mysql";


const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"salanova"
});

app.get("/", (req, res) => {
    res.json("Oi, este é o backend!")
})

app.get("/sala1", (req, res)=>{
    const q = "SELECT * FROM alunos"
    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log("Backend conectado!!!")
})
const express = require('express');
const app = express();
const cors =require("cors");
const router = require('./routes/MailServer');
 


const port = process.env.PORT || 5000;

app.use (express.json());
app.use (express.urlencoded({extended : true}));

app.use(cors());
app.use("/api/mail",router);



app.get("/", (req, res)=>{
    res.send("pagina principal");
})

app.listen(port, ()=>{

    console.log("servidor corriendo en el puerto", port);
})
const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = 3000;
 
const process_data = () => {
   let x = 1;
   return{
       resultado: x
   }
}
 
app.use(express.json());
 
app.post('/', (req, res) => {
 
    console.log(req.body);
    var cartones = [];
    let random  = () => { 
        return  Math.floor(Math.random() * (max - min + 1) + min);
    }
    max = [...req.body];
    for(let i = 0; i<max; i++){
        cartones[i] ={
            numeros:[],
            numero : random(),
        }
        cartones[i].numeros[i].push(random());
    }
    res.send([cartones]);

});

app.get("/mi_endpoint", (req,res)=>{
    res.send("respuesta");
})
 
app.listen (port, () => {
   
    console.log(`servidor en port ${port}`)
})

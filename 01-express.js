const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

    function NumeroAleatorio(max){
        return Math.floor(Math.random() * (max - 1)) + 1;
    }

    let cartones = [];

    function crearCarton(){
        let carton = {
            nombre: null,
            valores: [],      
        }
        for (let index = 0; index < 10; index++) {
            carton.valores.push(NumeroAleatorio(10))
        
        }
        return carton;
    }

    function crearCartones(num){

        for (let index = 0; index < num; index++) {
            cartones.push(crearCarton(10))
        
        }
        return cartones;
    }


    function iniciarJuego(num){
        return crearCartones(num);
    }

    let nombres = [];
    function obtenerCarton(nombre){
        nombres.push(nombre);
        for (let index = 0; index < cartones.length; index++) {
            if (cartones[index].carton.nombre = nombres[index]){
                return cartones[index].carton.valores;
            } 
            else{
                return -1; 
            }
            
        }

    }

    function devolverCartones(nombre){
        if(nombre == ""){
            return cartones;
        }
        else{
            return obtenerCarton(nombre);
        }
    }
    let numerosSacados = [];

    function sacarNumero(num){
        let numeroRandom = NumeroAleatorio(num);
        numerosSacados.push(numeroRandom);
        cartones.forEach(c => {
             for (let i = 0; i > c.valores; i++) {
                 if (c.carton.valores[i] = numerosSacados[i]){
                     c.carton.valores[i].pop;
                     return numerosSacados;
                 }
                 else {
                     return -1;
                 }
             } 
         })
    }

       

    app.post('/numero_aleatorio', (req, res)=>{
    
        console.log(req.body.numero);
        let x = NumeroAleatorio(req.body.numero);
        res.send([x]);
        
        })
        
        
        
    app.post('/iniciar_Juego', (req, res)=>{
        
        console.log(req.body.cartones);    
        let y = iniciarJuego(req.body.cartones);    
        res.send([y]);
        
        
    })

    app.get('/obtener_Carton', (req, res)=>{
        console.log(req.body.nombre); 
         let s = obtenerCarton(req.body.nombre);    
         res.send(s);
       
     
    })

    app.get('/cartones', (req, res)=>{
        console.log(req.body.nombre);
        let cartonesAMostrar = devolverCartones(req.body.nombre);
        res.send(cartonesAMostrar);
    })

    app.get('/sacar_numero', (req, res)=> {
        console.log(req.body.numero);
        let sacarNumeros = sacarNumero(req.body.numero);
        res.send(sacarNumeros);
    })
    app.listen(port, () => {
        console.log(`example app listening on port ${port}`);
    });
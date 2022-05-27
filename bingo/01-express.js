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
        for (let i = 0; i < 10; i++) {
            carton.valores.push(NumeroAleatorio(10))
        
        }
        return carton;
    }

    function crearCartones(num){

        for (let i = 0; i < num; i++) {
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
        for (let i = 0; i < cartones.length; i++) {
            if (cartones[i].carton.nombre = nombres[i]){
                return cartones[i].carton.valores;
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
    function numeroCentena(){
    const in_tenth = (number) => MessagePort.floor(number/10) +1;
    for (let i=1; i<100; i++) {
        console.log(i, in_tenth(i));
    }}
    
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
        console.log(req.query.nombre); 
         let s = obtenerCarton(req.query.nombre);    
         res.send(s);
       
     
    })

    app.get('/cartones', (req, res)=>{
        console.log(req.query.nombre);
        let cartonesAMostrar = devolverCartones(req.query.nombre);
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
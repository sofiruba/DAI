const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

const random = (max) => {
    return Math.floor(Math.random() * (max - 1)) + 1;
}

let cartones = [];

function crear_carton() {
    let carton = []
    for (let i = 0; i < 10; i++) {
        carton.push(random(10))

    }
    return carton;
}

function crear_cartones(num) {

    for (let i = 0; i < num; i++) {
        cartones.push(crear_carton(10))

    }
    return cartones;
}

let nombres = [];
function obtener_carton(nombre) {
    nombres.push(nombre);
    return cartones[nombres.length - 1]

}

function devolver_cartones(nombre) {
    if (nombre === undefined) {
        return cartones;
    }
    else {
        return obtener_carton(nombre);
    }
}

let numeros_sacados = [];

const verificar_ganador = (carton) => {
    let aciertos = 0;
    for (let i = 0; i < carton.length; i++) {
        const numero = carton[i];
        if (numeros_sacados.includes(numero)) {
            aciertos++;
        }
    }
    return (aciertos === carton.length);
}

const ganadores = [];

app.post('/numero_aleatorio', (req, res) => {
    res.send(random(req.body.numero));
})



app.post('/iniciar_Juego', (req, res) => {
    cartones = crear_cartones(req.body.cartones);
    res.send(cartones);
})

app.get('/obtener_Carton:nombre', (req, res) => {
    res.send(obtener_carton(req.query.nombre));

})

app.get('/cartones:nombre?', (req, res) => {
    let cartones_a_mostrar = devolver_cartones(req.query.nombre);
    res.send(cartones_a_mostrar);
})

app.get('/sacar_numero', (req, res) => {
    let numero = random(90);
    numeros_sacados.push(numero);
    for (let i = 0; i < cartones.length; i++) {
        let carton = cartones[i];
        let ganador = verificar_ganador(carton);
        if (ganador) {
            ganadores.push(carton);
        }
    }
    res.send(ganadores);
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});
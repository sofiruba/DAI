import {suma, resta, promedio, diametro} from './src/modules/matematica.js'
import {alumnos} from './src/models/alumno.js'
import {parsearURL} from './src/modules/url.js'
import {getAllInfoByISO} from 'iso-country-currency'
// ejercicio 1
let text1 = "Hello";
let text2 = "World";
let text = text1 + text2;
console.log(`${text}`);

// ejercicio 2
console.log(suma(13, 7));

// ejercicio 3
console.log(alumnos("Miles Morales", 3));

//ejercicio 4
/*
  var fs = require('fs');
  fs.rename('jb.txt', 'flop.txt', () => {
    console.log("JB FLOP");
     
  });
  */

  let objeto = parsearURL("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
  console.log(objeto);

  //ejercicio 7 - instalar npm install iso-country-currency

  let moneda = getAllInfoByISO('BE');
  console.log(` ${moneda.currency}`);
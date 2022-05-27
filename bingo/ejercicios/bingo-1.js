let min = 1; 
let max = [...req.body]; 

let r = () => { 
    return  Math.floor(Math.random() * (max - min + 1) + min);
}

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
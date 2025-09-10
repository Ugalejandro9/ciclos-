//algoritmo 1 //

console.log("imprimiendo numeros del 1 al 10")
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// algoritmo 2 //

console.log("sumar los primeros 10 numeros")
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log("La suma de los primeros 10 números es:", suma);

//algoritmo 3//

function tablaDeMultiplicar(numero) {
    console.log(`Tabla de multiplicar del número ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
    console.log("");
}
tablaDeMultiplicar(3);
    

//algoritmo 4 // 

function contarOcurrenciasDeA(texto) {
    let contador = 0;  
    for (let i = 0; i < texto.length; i++) {   
        if (texto[i] = 'a') {    
            contador++;      
        }
    }
    console.log(`El número de ocurrencias de 'a' en el texto es: ${contador}`);
}

// algoritmo 5 // 

function factorial(numero) {
    if (numero < 0) {
        console.log("No existe factorial para números negativos.");
        return;
    }
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;  
    }
    console.log(`El factorial de ${numero} es: ${resultado}`);
}

factorial(5);

// algoritmo 6 //

function filtrarPares(numeros) {
    let pares = [];  

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {  
            pares.push(numeros[i]);  
        }
    }

    return pares;  pares
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarPares(numeros);
console.log("Números pares:", numerosPares);

// algoritmo 7 // 

function sumaCuadrados(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i * i; 
    }
    return suma;
}

const N = 5;
const resultad = sumaCuadrados(N);
console.log(`La suma de los cuadrados de los primeros ${N} números naturales es: ${resultado}`);

// algoritmo 8 // 

function potencia(base, exponente) {
    let resultado = 1;

    for (let i = 1; i <= exponente; i++) {
        resultado *= base;
    }

    return resultado;
}

const base = 3;
const exponente = 4;
const resultado = potencia(base, exponente); 
console.log(`${base} elevado a la ${exponente} es: ${resultado}`);

// algoritmo 9 //


// algoritmo 10 //

function generarTablasMultiplicar(n) {
    for (let tabla = 1; tabla <= n; tabla++) {
        let total = 0;
        console.log(`Tabla de multiplicar del ${tabla}:`);
        for (let i = 1; i <= 10; i++) {
            const producto = tabla * i;
            console.log(`${tabla} x ${i} = ${producto}`);
            total += producto;
        }
        console.log(`Total de la tabla del ${tabla} (suma de productos): ${total}\n`);
    }
}

const numero = 5;
generarTablasMultiplicar(numero);












// =======================
// 1. Imprimir números del 1 al 10
// =======================
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// =======================
// 2. Sumar los primeros 10 números
// =======================
let suma = 0;
let j = 1;
while (j <= 10) {
  suma += j;
  j++;
}
console.log("Suma de los primeros 10 números:", suma);

// =======================
// 3. Tabla de multiplicar de un número dado
// =======================
function tablaMultiplicar(num) {
  let i = 1;
  while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
  }
}
tablaMultiplicar(5);

// =======================
// 4. Contar ocurrencias de 'a' en un texto
// =======================
function contarA(texto) {
  let contador = 0;
  let i = 0;
  while (i < texto.length) {
    if (texto[i] === 'a') contador++;
    i++;
  }
  return contador;
}
console.log("Cantidad de 'a':", contarA("javascript apasionante"));

// =======================
// 5. Factorial de un número
// =======================
function factorial(n) {
  let resultado = 1;
  let i = 1;
  while (i <= n) {
    resultado *= i;
    i++;
  }
  return resultado;
}
console.log("Factorial de 5:", factorial(5));

// =======================
// 6. Filtrar números pares de un array
// =======================
function paresArray(arr) {
  let pares = [];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) pares.push(arr[i]);
    i++;
  }
  return pares;
}
console.log("Pares:", paresArray([1,2,3,4,5,6]));

// =======================
// 7. Suma de cuadrados de los primeros N números
// =======================
function sumaCuadrados(n) {
  let suma = 0;
  let i = 1;
  while (i <= n) {
    suma += i * i;
    i++;
  }
  return suma;
}
console.log("Suma de cuadrados de 5:", sumaCuadrados(5));

// =======================
// 8. Potencia de un número (base^exponente) sin **
// =======================
function potencia(base, exp) {
  let resultado = 1;
  let i = 1;
  while (i <= exp) {
    resultado *= base;
    i++;
  }
  return resultado;
}
console.log("2^5 =", potencia(2,5));

// =======================
// 9. Serie Fibonacci
// =======================
function fibonacci(n) {
  let serie = [];
  let a = 0, b = 1;
  let i = 0;
  while (i < n) {
    serie.push(a);
    let temp = a + b;
    a = b;
    b = temp;
    i++;
  }
  return serie;
}
console.log("Fibonacci 10 términos:", fibonacci(10));

// =======================
// 10. Todas las tablas de multiplicar hasta un número dado
// =======================
function todasTablas(num) {
  let i = 1;
  while (i <= num) {
    console.log(`Tabla del ${i}`);
    let j = 1;
    while (j <= 10) {
      console.log(`${i} x ${j} = ${i * j}`);
      j++;
    }
    i++;
  }
}
todasTablas(3);

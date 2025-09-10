// 1. Imprimir números del 1 al 10
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// 2. Sumar los primeros 10 números
let suma = 0, j = 1;
do {
  suma += j;
  j++;
} while (j <= 10);
console.log("La suma de los primeros 10 números es:", suma);

// 3. Tabla de multiplicar de un número
function tablaMultiplicar(num) {
  let k = 1;
  do {
    console.log(`${num} x ${k} = ${num * k}`);
    k++;
  } while (k <= 10);
}
tablaMultiplicar(5);

// 4. Contar ocurrencias de 'a' en un texto
function contarA(texto) {
  let contador = 0, pos = 0;
  do {
    if (texto[pos].toLowerCase() === 'a') {
      contador++;
    }
    pos++;
  } while (pos < texto.length);
  return contador;
}
console.log("Cantidad de 'a':", contarA("JavaScript avanzado"));

// 5. Calcular factorial de un número
function factorial(n) {
  let resultado = 1, x = 1;
  do {
    resultado *= x;
    x++;
  } while (x <= n);
  return resultado;
}
console.log("Factorial de 5:", factorial(5));

// 6. Filtrar números pares de un array
function filtrarPares(arr) {
  let pares = [], y = 0;
  if (arr.length === 0) return pares; // evitar bucle infinito
  do {
    if (arr[y] % 2 === 0) {
      pares.push(arr[y]);
    }
    y++;
  } while (y < arr.length);
  return pares;
}
console.log("Números pares:", filtrarPares([1, 2, 3, 4, 5, 6]));

// 7. Suma de cuadrados de los primeros N números
function sumaCuadrados(N) {
  let suma = 0, z = 1;
  do {
    suma += z * z;
    z++;
  } while (z <= N);
  return suma;
}
console.log("Suma de cuadrados de los primeros 5 números:", sumaCuadrados(5));

// 8. Potencia base^exponente sin **
function potencia(base, exponente) {
  let resultado = 1, n = 1;
  do {
    resultado *= base;
    n++;
  } while (n <= exponente);
  return resultado;
}
console.log("2^5 =", potencia(2, 5));

// 9. Serie de Fibonacci (primeros N términos)
function fibonacci(N) {
  let serie = [0, 1];
  let idx = 2;
  if (N === 1) return [0];
  if (N === 2) return [0, 1];
  do {
    serie.push(serie[idx - 1] + serie[idx - 2]);
    idx++;
  } while (idx < N);
  return serie;
}
console.log("Primeros 10 de Fibonacci:", fibonacci(10));

// 10. Todas las tablas de multiplicar hasta un número entero
function todasTablas(numero) {
  let n = 1;
  do {
    console.log(`Tabla del ${n}:`);
    let m = 1;
    do {
      console.log(`${n} x ${m} = ${n * m}`);
      m++;
    } while (m <= 10);
    console.log("------------");
    n++;
  } while (n <= numero);
}
todasTablas(5);

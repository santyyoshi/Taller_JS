
/* PUNTO 1
Utilizo la función prompt para solicitar el nombre del usuario y lo almacena en la variable nombre. Luego, uso console.log para mostrar el saludo personalizado en la consola.*/

// Solicito al usuario que ingrese su nombre
let nombre = prompt("¿Cuál es tu nombre?");

// Muestro el saludo personalizado en la consola
console.log(`¡Hola ${nombre}! Bienvenido al taller de JavaScript.`);


/* PUNTO 2
Aquí se usa let para almacenar la edad del usuario porque este valor puede cambiar con diferentes usuarios. La constante mensaje almacena el texto que se imprimirá, utilizando la edad que nos da el usuario. 
*/

// El usuario ingresa su edad y lo guardamos en let porque es variable.
let edad = prompt("¿Cuál es tu edad?");

// Usamos const porque el mensaje siempre será el mismo
const mensaje = `Tu edad es ${edad}`;

// Mostramos el mensaje en la consola
console.log(mensaje);


/* PUNTO 3 
En este punto, usamos la estructura if para comparar dos números. Si numero1 es mayor que numero2, se ejecuta el primer bloque if. Si no, el bloque else se ejecuta mostrando que no lo es.
*/

// Valores númericos
let numero1 = 10;
let numero2 = 5;

// Comparación con el if
if (numero1 > numero2) {
  console.log(`${numero1} es mayor que ${numero2}`);
} else {
  console.log(`${numero1} no es mayor que ${numero2}`);
}

/* PUNTO 4 

Este código le permite al usuario ingresar dos números y seleccionar una operación (suma, resta, multiplicacion o division). Usamos condicionales if para determinar qué operación realizar y mostramos el resultado en la consola.
*/


// Solicitamos dos números al usuario
let numero_1 = parseInt(prompt("Ingresa el primer número:"));
let numero_2 = parseInt(prompt("Ingresa el segundo número:"));

// Solicitamos la operación a realizar
let operacion = prompt("¿Qué operación deseas realizar? Escribe el numero de la opción  (1. suma, 2.resta, 3. multiplicación, 4. división)");

// Realiza la operación seleccionada
let resultado;
if (operacion == "1") {
  resultado = numero_1 + numero_2;
} else if (operacion == "2") {
  resultado = numero_1 - numero_2;
} else if (operacion == "3") {
  resultado = numero_1 * numero_2;
} else if (operacion == "4" && numero_2 != 0) {
  resultado = numero_1 / numero_2;
} else {
  console.log("Operación no válida.");
}



/* PUNTO 5 */

// Solicitamos dos números al usuario
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));

// Compara si el primer número es mayor que el segundo
if (num1 > num2) {
  console.log(`${num1} es mayor que ${num2}`);
} else {
  console.log(`${num1} no es mayor que ${num2}`);
}

// Verifica si los números son iguales
if (num1 === num2) {
  console.log("Ambos números son iguales.");
} else {
  console.log("Los números no son iguales.");
}
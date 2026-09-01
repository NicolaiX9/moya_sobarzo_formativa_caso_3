
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Ingresa un valor: ', (respuesta) => { console.log(`El valor ingresado es: ${respuesta}`); rl.close()}); 




const readline = require('readline/promises');

const { stdin: input, stdout: output } = require('process');



async function calcular() {

 const rl = readline.createInterface({ input, output });




 const dato1 = await rl.question('Ingresa el primer número: ');

 const dato2 = await rl.question('Ingresa el segundo número: ');




 const num1 = parseFloat(dato1);

 const num2 = parseFloat(dato2);

 const suma = num1 + num2;



 console.log(`La suma de ${num1} + ${num2} es: ${suma}`);




 rl.close();

}



calcular();
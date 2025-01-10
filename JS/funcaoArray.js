// let numeros = [1, 7, 3, 9]

// // Map() Cira novo array transformando os elementos
// let numerosDobro = numeros.map(num => num * 2)

// console.log(numerosDobro);

// // Find() Retorna o primeiro elemento que sastifaz a condição
// let primeiro = numeros.find(n => n == 2)
// console.log(primeiro);

// let nomezitos = ["André", "Angelica", "Natalia"]
// let primeironomeT = nomezitos.find(nomes => nomes.includes("t"))

// console.log(primeironomeT);

// // Filter() Cira um novo array que satifazem a condição
// let maioresQue3 = numeros.filter(n => n > 1)
// console.log(maioresQue3);

// // Includes() Se algo está incluido na array
// let existe5 = numeros.includes(5)
// console.log(existe5);

// // Some() Verificar um elemento satifaz a condição
// let par = numeros.some(n => n % 2 === 0)
// console.log(par);

// // ForEach() Igual o for kek
// let nomes2 = nomezitos.forEach((nomes) => console.log(nomes))


//////////////////////////////////////////////////
let number = [1, 2, 3, 4, 5]

let dobro = number.map(c => c * 2)
console.log(dobro);


let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let pares = number2.filter(n1 => n1 % 2 == 0)
console.log(pares);


let decimos = [10, 25, 47, 58, 62, 79]
let maiorQ10 = decimos.find(n2 => n2 > 50)
console.log(maiorQ10);


let negativos = [10, -5, 7, 0, -3]
let umNegativo = negativos.some(n => n < 0)
console.log(umNegativo);



let lele = [1, 2, 3, 4, 5]
let maiorq2 = lele.every(n => n > 2)
console.log(maiorq2);


let entrada = [10, 20, 30, 40, 50]
let entrada2 = entrada.forEach((entrada, index) => console.log(`Número, ${entrada}, está na posição ${index}`));



let caju = [1, 3, 5, 7, 9, 10]
let cajao = caju.includes(7)
console.log(cajao);









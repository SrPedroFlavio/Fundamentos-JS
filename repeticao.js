for(let i = 1; i < 5; i++){
    console.log(i);
}



for(let i = 1; i < 11; i++){
    console.log(i);
}



for(let i = 1; i <= 10; i++){
       
    console.log("2 x", i,"=",  2 * i,)

}

let numeroProcurado = 1

for(let i = 0; i <= 100; i++){
    if(i == numeroProcurado){
        break;
    }
    console.log(i);
}


let soma = 0

for(let i = 0; i <= 20; i++){
    soma = soma + i

    
    if(soma > 100){
        console.log("passo de 100"); break
    } 
}

console.log(soma);


let cores = ["azul", "vermelho", "ciano", "anil"]
for(let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}

for(let cor of cores){
console.log(cor);
}



let numeros2 = [200, 100, 40, 50, 90]
let maior = 0
for(let numero of numeros2){
    if(numero > maior){
        maior = numero
        
    }
}
console.log("o maior numero é", maior)


let palavra = "Pavão"
for(let i = 0; i < palavra.length; i++){
    console.log(palavra[i]);
}


for(let i = 0; i <= 10; i++){
    if(i % 2 !== 0){
        console.log(i, "impar");
    }
}


While
let num = 0
while(num <= 10){
    console.log(num);
    num++
}

let contador = 0

do {
    console.log(contador);
} while (contador++ !== 20)


let pares = 0

while(pares <= 50){
    if(pares % 2 == 0){
        console.log(pares, "par");
    } pares++
    
}





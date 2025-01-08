let x = 10
let y = 20

// Maior que
console.log(x > y)

// Menor que
console.log(x < y);

// Maior ou igual 
console.log(x >= y);

// Menor que
console.log(x <= y);

// Igual
console.log(10 =="10");

// Igualdade restrita 
console.log(10 === "10");

// Diferente de
console.log("10 !== 20");


// Verde passar
// Amarelo atenção
// Vermelho n pode


let corSemaforo = "amarelo"


if(corSemaforo == "verde"){
    console.log("pode passar");
} else if(corSemaforo == "amarelo"){
    console.log("atenção");
} else if(corSemaforo == "vermelho"){
    console.log("paro");
}



let numero = 20

if(numero >= 1){
    console.log("positivo");
} else if(numero < 0){
    console.log("negativo");
} else{
    console.log("zero");
}


let ano = 1000

if(ano <= 1964 && ano >= 1946){
    console.log("Baby boomer");
} else if(ano <= 1980 && ano >= 1965){
    console.log("Gearção x");
} else if(ano <= 1996 && ano >= 1981){
    console.log("milennial");
} else if(ano <= 2012 && ano >= 1997){
    console.log("Geração Z");
} else if(ano = 2013){
    console.log("alpha");
} 
    


// Array
let frutas = ["Abacaxi", "Laranja", "melancia", "Lichia"]
// Push add no final
frutas.push("uva")

//Remover o first
frutas.shift()

// Remove last
frutas.pop()

console.log(frutas.length);



let numeros = ["1", "2", "3", "4", "5"]  
numeros.pop()
numeros.push("6", "7")
numeros.shift()
numeros.shift("2")
console.log(numeros);

// da pra usa o index kek pogcham noggers pepelaugh

numeros.indexOf(3)


// objeto
let pessoa = {
    nome: "Pedro",
    Sobrenome: "Cardoso",
    Idade: 19,
    estrageiro: false,
    Linguagens: ["java", "go", "python", "cobol", "c#"]

}

console.log(`Nome: ${pessoa.nome}`);
console.log(`Sobrenome: ${pessoa.Sobrenome}`);
console.log(`Idade: ${pessoa.Idade}`);

pessoa.profissao = "Desenvolvedor"

pessoa.idade = 20

delete pessoa.Linguagens

console.log(pessoa);



let carro = [
    {Marca: "Toyota", Modelo: "Supra MK4" },
    {Marca: "Honda", Modelo: "civic"},
    {Marca: "fiat", Modelo:"Palio"}
    ]


console.log(carro[0].Modelo)



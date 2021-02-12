let frutas = ['maça', 'laranja', 'pera', 'uva', 'mamão', 'banana']

// Vetor original
console.log(frutas);

// Retirar o ultimo elemento de um vetor
let ultimaFruta = frutas.pop();

// Vetor alterado
console.log(frutas);
console.log(ultimaFruta);

// Remocao do primeiro elemento do vetor
let primeiraFruta = frutas.shift();

console.log(frutas)
console.log(primeiraFruta);

// Remocao da posicao intermediaria
// 1. parametro -> a posicao da remocao(contagem comeca em 0)
// 2. Parametro -> a quantidade de elementos a remover.
let terceiraFruta = frutas.splice(2,1); // SEMPRE retornara um vetor

console.log(frutas)
console.log(terceiraFruta);
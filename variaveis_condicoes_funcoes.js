//declarando variaveis
var a = 10,b = 5, c = a+b;

console.log(c)

//trabalhado com array
console.log("\nTestando Array")
array = ["amor","3","feijão"]
console.log(array)
var tamanho = array.length
console.log("Tamanho do Vetor: "+tamanho)

//posição especifica
console.log(array[1])


// Condicional
if(a<b){
	console.log("Menor")
}
else if(a==b){
	console.log("Igual")
}
else{
	console.log("Maior")
}

// Laços
console.log("\nTestando While")
while(a>=b){
	console.log(a+"")
	a--
}
console.log("\nTestando o For")
for(i=0;i<=a;i++){
	console.log(i)
}

//Função

function soma(a,b) {
	return a+b
}
function sub(a,b){
	return a-b
}

console.log("\nTestando Funções")
console.log(soma(5,3))
console.log(sub(5,3))

// Trabalhando com Objetos!!
/*

Forma 1

*/
function Pessoa(nome, idade, sexo) {
	this.nome = nome;
	this.idade = idade;
	this.sexo = sexo;

}

var jose = new Pessoa("Jose", 30,"M");
var maria = new Pessoa("Maria", 25,"F");

console.log(jose)
console.log(maria)

// Trabalhando com classes!!

/*

Forma 2

*/
class Produto { 
    constructor(paramNome, paramPreco){
         this.nome = paramNome; 
         this.preco = paramPreco;     
    } calculaDesconto() { 
        return this.preco * 0.1; 
        } 
} 
var produto1 = new Produto("Blusa", 120);
var produto2 = new Produto("Calça", 300);


console.log(produto1.calculaDesconto())
console.log(produto2.calculaDesconto())


/*

Forma 3

*/
function Produto(paramNome, paramPreco){ 
    this.nome = paramNome; 
    this.preco = paramPreco; 
    this.calculaDesconto = function(){ 
        //10% de desconto 
        return this.preco * 0.1; 
        }; 
} 
var produto1 = new Produto("Blusa", 120);
var produto2 = new Produto("Calça", 300); 
produto1.calculaDesconto(); //12 
produto2.calculaDesconto(); //30



//Declarando objetos e acessando funcionalidades
var meuCarro = new Object()

meuCarro.fabricacao = "Ford"
meuCarro.modelo = "Mustang"
meuCarro.ano = 1969

console.log(meuCarro)


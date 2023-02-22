// Criando um objeto genérico, como por exemplo um cliente genérico.
// Criando uma função construtora usando o new(), instanciando.
function Cliente(nome,idade,saldo){
	this.nome = nome;
	this.idade = idade;
	this.saldo = saldo;
	// Criando uma funcao para depositar.
	function deposita(valor){
		this.saldo += valor;
		console.log('O saldo depois do deposito:'+this.saldo);
	}
}
// Testando funcao construtora.
const alan = new Cliente('Alan',54,100);
console.log(alan);
console.log(typeof alan);
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
// Construindo um novo objedo baseado em Cliente, agora uma conta poupança.
function ClientePoupanca(nome,idade,saldo,saldoPoupanca){
	Cliente.call(this,nome,idade,saldo);
	this.saldoPoupanca = saldoPoupanca;
	console.log(`O saldo da poupanca: ${this.saldoPoupanca}`);

}
// Criando uma instancia para conta poupanca
const maria = new ClientePoupanca('Maria',40,110,200);
console.log(maria);
// Criando uma funcao para deposito em conta poupanca
ClientePoupanca.prototype.depositarPoupanca = function(valor){
	this.saldoPoupanca += valor;
	console.log(`O saldo da poupanca depois do deposito: ${this.saldoPoupanca}`)
}
maria.depositarPoupanca(12);

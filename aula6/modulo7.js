
var Pessoa = function(id, nome) {
    this.id = id;
    this.nome = nome;
}

Pessoa.prototype = {
    getNome: function() {
        return this.nome;
    }
}

var Estudante = function(id, nome, sala){
    this.id = id;
    this.nome = nome;
    this.sala = sala;
};

Estudante.prototype = new Pessoa();
Estudante.prototype.contructor = Estudante;

var p = new Pessoa(1,'mario');
console.log(p.getNome());

var e = new Estudante(1,'mario estudante');
console.log(e.getNome());
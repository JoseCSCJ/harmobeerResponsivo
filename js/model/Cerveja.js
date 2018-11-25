function Cerveja(c) {
    this.id = c.id || guid();
    c = c || {};
    this.nome = c.nome;
    this.marca = c.marca;
    this.estilo = c.estilo;
    this.teoralc = c.teoralc;
    this.img = c.img;
}

var cervejaController = controller('cervejas', Cerveja);
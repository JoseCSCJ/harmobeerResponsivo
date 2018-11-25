function Prato(p) {
    this.id = p.id || guid();
    p = p || {};
    this.nome = p.nome;
    this.categoria = p.categoria;
    this.img = p.img;
}

var pratoController = controller('pratos', Prato);
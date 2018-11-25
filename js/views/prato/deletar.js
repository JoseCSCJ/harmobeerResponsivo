window.onload = function () {
    // pegar o identificador de quem quero editar
    var x = new UrlParams('Pratos/Editar');
    if (!x.params.id)
        return window.location = '../index.html';

    var prato = pratoController.get('id', x.params.id);

    if (!prato)
        return window.location = '../index.html';

    var txtNome = document.getElementById('txtNome');
    var txtCategoria = document.getElementById('txtCategoria');
    var txtImg = document.getElementById('txtImg');
    
    txtNome.value = prato.nome;
    txtCategoria.value = prato.categoria;
    txtImg.value = prato.img;

    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            
            pratoController.remove(prato);
            alert("Prato deletado!");
        });
}
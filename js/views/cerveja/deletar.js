window.onload = function () {
    var x = new UrlParams('Cervejas/Deletar');
    if (!x.params.id)
        return window.location = '../index.html';

        var cerveja = cervejaController.get('id', x.params.id);

    if (!cerveja)
        return window.location = '../index.html';

        var txtNome = document.getElementById('txtNome');
        var txtMarca = document.getElementById('txtMarca');
        var txtEstilo = document.getElementById('txtEstilo');
        var txtTeor = document.getElementById('txtTeor');
        var txtImg = document.getElementById('txtImg');
        
        txtNome.value = cerveja.nome;
        txtMarca.value = cerveja.marca;
        txtEstilo.value = cerveja.estilo;
        txtTeor.value = cerveja.teoralc;
        txtImg.value = cerveja.img;

    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            cervejaController.remove(cerveja);
            alert("Cerveja deletada!");
            window.location = '../index.html';
        });
}
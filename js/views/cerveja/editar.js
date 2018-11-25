window.onload = function () {
    // pegar o identificador de quem quero editar
    var x = new UrlParams('Cervejas/Editar');
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
            cerveja.nome = txtNome.value;
            cerveja.marca = txtMarca.value;
            cerveja.estilo = txtEstilo.value;
            cerveja.teoralc = txtTeor.value;
            cerveja.img = txtImg.value;
            
            cervejaController.update(cerveja);
            alert("Cerveja editada!");
        });
}
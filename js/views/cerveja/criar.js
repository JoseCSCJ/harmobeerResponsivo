window.onload = function () {
    var txtNome = document.getElementById('txtNome');
    var txtMarca = document.getElementById('txtMarca');
    var txtEstilo = document.getElementById('txtEstilo');
    var txtTeor = document.getElementById('txtTeor');
    var txtImg = document.getElementById('txtImg');
    
    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            var cerveja = new Cerveja({
                nome: txtNome.value,
                marca: txtMarca.value,
                estilo: txtEstilo.value,
                teoralc: txtTeor.value,
                img: txtImg.value
               
            });
            cervejaController.add(cerveja);
        });
}
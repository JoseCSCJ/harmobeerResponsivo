window.onload = function () {
    var txtNome = document.getElementById('txtNome');
    var txtCategoria = document.getElementById('txtCategoria');
    var txtImg = document.getElementById('txtImg');
    
    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            var prato = new Prato({
                nome: txtNome.value,
                categoria: txtCategoria.value,
                img: txtImg.value
            });
            pratoController.add(prato);
        });
}
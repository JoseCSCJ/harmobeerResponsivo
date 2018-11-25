window.onload = function () {
    var tablePratos = document.getElementById('tablePratos');

    pratoController.getAll()
        .forEach(addRow);

    function addRow(item) {
        var row = '<tr>';
        row += '<td align="center">' + item.nome + '</td>';
        row += '<td align="center">' + item.categoria + '</td>';
        row += '<td align="center"><img src="' + item.img + '" height="70" width="120"/></td>';       
        row += '<td align="center">';
        row += '<a href="Editar/index.html?id=' + item.id + '">Editar</a>';
        row += ' | ';
        row += '<a href="Deletar/index.html?id=' + item.id + '">Deletar</a>';
        row += '</td>';
        row += '</tr>';
        tablePratos.innerHTML +=row;
    }
   
}
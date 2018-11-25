window.onload = function () {
    var tableCervejas = document.getElementById('tableCervejas');

    cervejaController.getAll()
        .forEach(addRow);

    function addRow(item) {
        var row = '<tr>';
        row += '<td align="center">' + item.nome + '</td>';
        row += '<td align="center">' + item.marca + '</td>';
        row += '<td align="center">' + item.estilo + '</td>';
        row += '<td align="center">' + item.teoralc + '</td>';
        row += '<td align="center"><img src="' + item.img + '" height="100" width="80"/></td>';       
        row += '<td align="center">';
        row += '<a href="Editar/index.html?id=' + item.id + '">Editar</a>';
        row += ' | ';
        row += '<a href="Deletar/index.html?id=' + item.id + '">Deletar</a>';
        row += '</td>';
        row += '</tr>';
        tableCervejas.innerHTML +=row;
    }
    
}
window.onload = function () {
    var $table = $('table tbody');

    cervejaController.getAll()
        .forEach(addRow);

    function addRow(item) {
        var row = '<tr>';
        row += '<td>' + item.nome + '</td>';
        row += '<td>' + item.marca + '</td>';
        row += '<td>' + item.estilo + '</td>';
        row += '<td>' + item.teoralc + '</td>';
        row += '<td><img src="' + item.img + '" height="40" width="40"/></td>';       
        row += '<td>';
        row += '<a href="Editar?id=' + item.id + '">Editar</a>';
        row += ' | ';
        row += '<a href="Deletar?id=' + item.id + '">Deletar</a>';
        row += '</td>';
        row += '</tr>';
        $table.append(row);
    }
    $(document).ready(function () {
        $('#dtBasicExample').DataTable();
        $('.dataTables_length').addClass('bs-select');
        });
}
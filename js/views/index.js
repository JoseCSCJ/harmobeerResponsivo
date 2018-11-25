window.onload = function () {
    let tablePratos = document.getElementById('tablePratos');
    console.log("to passando aqui");
    pratoController.getAll()
        .forEach(addRowPrato);

    function addRowPrato(item) {
        let row = '<tr>';
        row += '<td align="center">' + item.nome + '</td>';        
        row += '<td align="center"><img src="' + item.img + '" height="70" width="120"/></td>';    
        row += '</tr>';
        tablePratos.innerHTML +=row;
    }
       
    let tableCervejas = document.getElementById('tableCervejas');

    cervejaController.getAll()
        .forEach(addRowCerv);

    function addRowCerv(item) {
        let row = '<tr>';
        row += '<td align="center">' + item.nome + '</td>';        
        row += '<td align="center"><img src="' + item.img + '" height="100" width="80"/></td>';      
        row += '</tr>';
        tableCervejas.innerHTML +=row;
    }
   
}
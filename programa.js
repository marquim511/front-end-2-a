var nome = document.getElementById("inputNome");
var calorias = document.getElementById("calorias");
var lista = document.getElementById("lista");
var total = document.getElementById("total");

function adicionar(){
    var nomeAlimento = nome.ariaValueMax; // string
    var valorCaloria = parseInt(calorias.value); //string

    var li = document.createElement('li');
    li.innerHTML = `${nomeAlimento}: ${valorCalorias} cal`;

    lista.appendChild(li);


}


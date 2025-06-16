function adicionaItem() {
    let li = document.createElement("li");
    let item = document.getElementById("item").value;
    let itemLi = document.createTextNode(item);
    li.appendChild(itemLi);
    if(item === ''){
        alert("Você precisa digitar algo para adicionar!");
    }else{
        document.getElementById("lista-fazer-li").appendChild(li);
    }
    document.getElementById("item").value = "";
}

function adicionaListaNova() { 
    const itemMove = document.getElementById("lista-fazer-li");
    const listaFeito = document.getElementById("lista-feito-li");
    if(itemMove && listaFeito){
        listaFeito.appendChild(itemMove);
    }
}


document.addEventListener("DOMContentLoaded", function(){
    const adicionar = document.getElementById("btn-add");
    adicionar.addEventListener('click', adicionaItem);

    const itemFazer = document.getElementById("lista-fazer-li");
    itemFazer.addEventListener('click', adicionaListaNova);
})
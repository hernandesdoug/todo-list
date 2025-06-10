function adicionaItem() {
    let li = document.createElement("li");
    let item = document.getElementById("item").value;
    let itemLi = document.createTextNode(item);
    li.appendChild(itemLi);
    if(item === ''){
        alert("Você precisa digitar algo para adicionar!");
    }else{
        document.getElementById("list-itens").appendChild(li);
    }
    document.getElementById("item").value = "";
}

document.addEventListener("DOMContentLoaded", function(){
    const adicionar = document.getElementById("btn-add");
    adicionar.addEventListener('click', adicionaItem);
})
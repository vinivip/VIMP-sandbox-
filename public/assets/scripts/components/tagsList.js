function showTags(){
    $('.itemParteTag').hide()
    for(i=0;i<listaItensPartesSelecionados.length;i++){
        $(`.tag${listaItensPartesSelecionados[i]}`).fadeIn()
    }
}
function rendTagsList(lista, element){
    console.log(lista)
    element.innerHTML = ''
    lista.map(item => {
        console.log("ITEM:",item)
        console.log(encontraPartePorId(item.codigoParteProduto))
        let parte = encontraPartePorId(item.codigoParteProduto).descParteProduto
        
        element.innerHTML += `<li class="itemParteTag tag${item.codigoItemParteProduto}">
        <p>${parte}</p>
        <h3>${item.descItemParteProduto}</h3>
        </li>`

    })
}
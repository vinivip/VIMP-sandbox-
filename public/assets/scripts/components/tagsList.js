function showTags(){
    $('.itemParteTag').hide()
    for(i=0;i<listaItensPartesSelecionados.length;i++){
        $(`.tag${listaItensPartesSelecionados[i]}`).fadeIn()
    }
}
function rendTagsList(lista, element){
    element.innerHTML = ''
    lista.map(item => {
        let parte = encontraPartePorId(item.codigoParteProduto).descParteProduto
        
        element.innerHTML += `
        <li class="itemParteTag tag${item.codigoItemParteProduto}">
            <p class ="tagTitle">${parte}</p>
            <h3 class ="tagItemPart">${item.descItemParteProduto}</h3>
        </li>
        `

    })
}
function clearTag(tag){
    // trocaParte(tag)
 
}

function trocaParte(itemParte){

    let itemParteModelo = encontraItemPartePorId(itemParte)
    let itemParteNovo = document.getElementsByClassName(`part${itemParteModelo.codigoParteProduto}`)

    currentItem = parseInt(itemParteNovo[0].id)
    useItemParteMins()
   
}
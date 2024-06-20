
function showItemParteMins()
{
    var objElementos = document.getElementsByClassName(`part${currentPart}`)
    
    $(`.part${currentPart}`).fadeIn()
    for( i = 0; i < objElementos.length; i++){
        const id = objElementos[i].id
        
        verificaDisponibilidadeItemParte(parseInt(id),arrOpcoesDisponiveis)
    }
}
function hideItemParteMins()
{
     
    $(`.part${currentPart}`).hide()
    $(`.part${currentPart}`).off()
    
}
function atualizaItemParteSelecionada()
{
    for (i=0;i<listaItensPartesSelecionados.length;i++){
        
        const parteProd = encontraItemPartePorId(parseInt(listaItensPartesSelecionados[i])).codigoParteProduto
    
        if(parteProd == currentPart){
            const newItem = listaItensPartesSelecionados.indexOf(listaItensPartesSelecionados[i])
            listaItensPartesSelecionados[newItem] = parseInt(currentItem)
            
            return 
        }

    }
}
function useItemParteMins()
    {
        unselectItem(`.part${currentPart}.selected`)
        currentItem = $(this).attr('id') || currentCore
        // console.log(currentItem)
        selecionaItemParte(parseInt(currentItem))


        atualizaItemParteSelecionada()
        
        

        listaItensPartesSelecionados = verificaMudancaItensSelecionados(listaItensPartesSelecionados,arrOpcoesDisponiveis)
        
        verificaSelecaoItensParte()  
       
        

        if (partesChaves.includes(currentPart)){
            currentCore = currentItem
        }
        
        selectItem(`#${currentItem}.enabled`)
        carregaModelagemSelecionada()
}


function rendItemParteMins(items,element)
{
    
    items.map(
       
        item => {
            let url = `icon_item_parte_${item.codigoItemParteProduto}.webp`
       
            element.innerHTML += `
                <div 
                    id='${item.codigoItemParteProduto}' 
                    title='${item.descItemParteProduto}' 
                    class='part${item.codigoParteProduto} miniatura'
                >   
                   <img 
                    src="assets/img/miniaturas/${verificaDisponibilidadePath(url,'default.png')}"
                    alt="${item.descItemParteProduto}">
                 
                </div>`
          
        }
    )
    
    // useItemParteMins()
      
      
  
};

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
        
        selecionaItemParte(parseInt(currentItem))

        console.log("lips",listaItensPartesSelecionados)
        console.log(arrOpcoesDisponiveis)
        atualizaItemParteSelecionada()
        
        

        verificaMudancaItensSelecionados(listaItensPartesSelecionados,arrOpcoesDisponiveis)
        verificaSelecaoItensParte()    
        carregaModelagemSelecionada()

        if (partesChaves.includes(currentPart)){
            currentCore = currentItem
        }
        selectItem(`#${currentItem}.enabled`)
        // var objElementos = document.getElementsByClassName(`part${currentPart}`)
            
    //     for( i = 0; i < objElementos.length; i++){
    //         const id = parseInt(objElementos[i].id)
            
    //         if(target == id){
    //             console.log('entrou')
    //             selectItem(`#${target}.enabled`)
    //         }else{
    //             console.log('entrou')
    //             unselectItem(`#${id}.enabled`)
    //     }
            
    // }
}


function rendItemParteMins(items,element)
{
    
    items.map(
       
        item => {
            
       
            element.innerHTML += `
                <div 
                    id='${item.codigoItemParteProduto}' 
                    title='${item.descItemParteProduto}' 
                    class='part${item.codigoParteProduto} miniatura'
                >   
                   <img 
                    src="assets/miniaturas/icon_item_parte_${item.codigoItemParteProduto}.webp"
                    onerror="this.src='assets/miniaturas/default.png'" 
                    
                   alt="${item.descItemParteProduto}">
                 
                </div>`
          
        }
    )
    
    // useItemParteMins()
      
      
  
};
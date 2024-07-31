function showItemParteMins()
{
    var objElementos = document.getElementsByClassName(`part${currentPart}`)
    var flag = false
    $(`.part${currentPart}`).fadeIn()
    for( i = 0; i < objElementos.length; i++){
        const id = objElementos[i].id
        flag = verificaDisponibilidadeItemParte(parseInt(id),arrOpcoesDisponiveis, flag)
               
    }
    
    
    useItemParteMins()
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
        if(ready){
            editModdeling()
        }
        unselectItem(`.part${currentPart}.selected`)
        if($(this).attr('id')){
            currentItem = $(this).attr('id') || currentCore
        }
        
        // console.log(currentItem)
        selecionaItemParte(parseInt(currentItem))
        
        atualizaItemParteSelecionada()
        
        listaItensPartesSelecionados = verificaMudancaItensSelecionados(listaItensPartesSelecionados,arrOpcoesDisponiveis)
        console.log("parte", currentPart)
        console.log("LIAS:",listaItensAcabamentosSelecionados)
        console.log("LIPS:",listaItensPartesSelecionados)
        console.log("OptDisponiveis:", arrOpcoesDisponiveis) 
        
        verificaSelecaoItensParte()  
       
        if (partesChaves.includes(currentPart)){
            currentCore = currentItem
        }
        
        selectItem(`#${currentItem}.enabled`)
        carregaModelagemSelecionada()

        rendSelectAcabamentos($arrRetornoAcabamentos,selectAcabamentos)

        arrListaItensPartesSelecionados[$("#changeItem").prop('selectedIndex')] = listaItensPartesSelecionados

        const arrDisponiveis = defineArrAcabamentosDisponiveis(listaItensPartesSelecionados)

        listaItensAcabamentosSelecionados = retiraAcabamentosIndisponíveis(
            listaItensAcabamentosSelecionados,
            arrDisponiveis
        )
        retornaArrayPartesPendentes()
        showTags()
        carregaAcabamentoSelecionada()
        // console.log("LIPs",listaItensPartesSelecionados)
        // console.log("LIAs",listaItensAcabamentosSelecionados)
}


function rendItemParteMins(items,element)
{
    
    items.map(
       
        item => {
            let url = `icon_item_parte_${item.codigoItemParteProduto}.webp`
       
            element.innerHTML += `
                <div 
                    id='${item.codigoItemParteProduto}' 
                    class='part${item.codigoParteProduto} miniatura'
                >   
                   <img 
                    src="assets/img/miniaturas/${verificaDisponibilidadePath(url,'default.png')}"
                    alt="${item.descItemParteProduto}">
                
                    <p id="" class="itemTag">${item.descItemParteProduto}</p>    
                 
                </div>
                
                `
          
        }
    )
      
      
  
};
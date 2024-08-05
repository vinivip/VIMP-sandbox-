function showItemParteMins()
{
    
    var objElementos = document.getElementsByClassName(`part${currentPart}`)
    var flag = false
    $(`.part${currentPart}`).fadeIn()
    console.log(arrOpcoesDisponiveis)
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
            currentItem = $(this).attr('id') || currentItemParteChave
            // if(currentPart == "3"){
            //     arrOpcoesDisponiveis = relacionaMangaCava(currentItem)
            // }
        }
        
        selecionaItemParte(parseInt(currentItem))

        atualizaItemParteSelecionada()

        console.log("disponiveis click",arrOpcoesDisponiveis)

        listaItensPartesSelecionados = verificaMudancaItensSelecionados(listaItensPartesSelecionados,arrOpcoesDisponiveis)
        
        verificaSelecaoItensParte()  
       
        if (partesChaves.includes(currentPart)){
            currentItemParteChave = currentItem
            refDisponiveis = arrOpcoesDisponiveis
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
       

        console.log("disponiveis fim",arrOpcoesDisponiveis)

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
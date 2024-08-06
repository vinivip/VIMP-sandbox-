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
function relacionaMangaCava(
    idItemPartePaiSelecionado, 
    idPartePaiNenhum,
    idParteFilho
){
    let itemDisponivel
    let cavaAtual
    let novasOpcoes = []
    let codigoItemParteFilho = parseInt(itensPartes.find(itemParte => itemParte.codigoParteProduto == idParteFilho && itemParte.descItemParteProduto == "NENHUMA").codigoItemParteProduto
)
   

    for (i=0; i < refDisponiveis.length; i++){
        itemDisponivel = encontraItemPartePorId(refDisponiveis[i])
        if( parseInt(itemDisponivel.codigoParteProduto) ==  idParteFilho){
            
            if( !(parseInt(itemDisponivel.codigoItemParteProduto) == codigoItemParteFilho)){
                
                cavaAtual = parseInt(itemDisponivel.codigoItemParteProduto)
                
            }
            
        }
        else{
            novasOpcoes.push(parseInt(itemDisponivel.codigoItemParteProduto))
        }
    }
   
    if(idItemPartePaiSelecionado == idPartePaiNenhum){
        novasOpcoes.push(cavaAtual)
        return novasOpcoes
    }
    novasOpcoes.push(codigoItemParteFilho)
    return novasOpcoes
    
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
        
        selecionaItemParte(parseInt(currentItem))

        // arrOpcoesDisponiveis = relacionaMangaCava(encontraItemPartePorParte("3"),80,20)
        // console.log("manga selecionada",encontraItemPartePorParte("3"))
        console.log("opcoes disponiveis(NOVO)", arrOpcoesDisponiveis)
        if(currentPart == "3"){
            arrOpcoesDisponiveis = relacionaMangaCava(currentItem,80,20)
        }
        console.log("opcoes disponiveis(ALTERADO)", arrOpcoesDisponiveis)
        atualizaItemParteSelecionada()

        console.log("disponiveis click",arrOpcoesDisponiveis)

        listaItensPartesSelecionados = verificaMudancaItensSelecionados(listaItensPartesSelecionados,arrOpcoesDisponiveis)
        
        verificaSelecaoItensParte()  
       
        if (partesChaves.includes(currentPart)){
            currentCore = currentItem
            refDisponiveis = arrOpcoesDisponiveis
          
        }
        
        selectItem(`#${currentItem}.enabled`)
        carregaModelagemSelecionada()
        console.log("selecionados", listaItensPartesSelecionados)
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
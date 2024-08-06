function showItemParteMins()
{
    
    var objElementos = document.getElementsByClassName(`part${currentPart}`)
    var flag = false
    $(`.part${currentPart}`).fadeIn()
    //console.log(arrOpcoesDisponiveis)
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
function calculaSubRelacionamentos(objSubRelacionamentos){
    let partePai 
    let parteFilho 
    
    for(g=0;g<objSubRelacionamentos.length; g++){
        console.log(g, objSubRelacionamentos[g][1])
        partePai = objSubRelacionamentos[g][1][0]
        parteFilho = objSubRelacionamentos[g][1][1]
        if(currentProduct == objSubRelacionamentos[g][0]){
            arrOpcoesDisponiveis = relacionaMangaCava(partePai,parteFilho)

            listaItensPartesSelecionados = verificaMudancaItensSelecionados(listaItensPartesSelecionados,arrOpcoesDisponiveis)
        }
    }
}
function relacionaMangaCava(
    idPartePai,
    idParteFilho
){
    

    let idItemPartePaiSelecionado = encontraItemPartePorParte(idPartePai)


    //let idPartePai = encontraItemPartePorId(idItemPartePaiSelecionado).codigoParteProduto
    let itemDisponivel
    let cavaAdicionada = false
    let novasOpcoes = []
    
    let codigoItemParteFilhoNenhum = parseInt(itensPartes.find(itemParte => itemParte.codigoParteProduto == idParteFilho && itemParte.descItemParteProduto == "NENHUM").codigoItemParteProduto)
    
    let idPartePaiNenhum = parseInt(itensPartes.find(itemParte => itemParte.codigoParteProduto ==  parseInt(idPartePai) && itemParte.descItemParteProduto == "NENHUM").codigoItemParteProduto )

   

    let codParteChave = encontraItemPartePorId(currentItemParteChave).codigoParteProduto
    let codItemParteChaveSelecionado = encontraItemPartePorParte(String(codParteChave))

    for (i=0; i < arrOpcoesDisponiveis.length; i++){
        itemDisponivel = encontraItemPartePorId(arrOpcoesDisponiveis[i])
        if(!(parseInt(itemDisponivel.codigoParteProduto) ==  idParteFilho)){
            novasOpcoes.push(parseInt(arrOpcoesDisponiveis[i]))
        }
    }

    if(!(idItemPartePaiSelecionado == idPartePaiNenhum)){
        cavaAdicionada = true
        novasOpcoes.push(codigoItemParteFilhoNenhum)
    }else{
        for(x = 0; x<arrRelacionamentosPartes.length;x++){
            if( 
                arrRelacionamentosPartes[x].includes(codItemParteChaveSelecionado) &&
                parseInt(encontraItemPartePorId(arrRelacionamentosPartes[x][0]).codigoParteProduto) == idParteFilho && arrRelacionamentosPartes[x][0] !== codigoItemParteFilhoNenhum){
                    cavaAdicionada = true
                    
                    novasOpcoes.push(arrRelacionamentosPartes[x][0])
            }
        }
    }

    if(!cavaAdicionada){
        novasOpcoes.push(codigoItemParteFilhoNenhum)
    }
    
    return novasOpcoes

}
function useItemParteMins()
    {
        if(ready){
            editModdeling()
        }
        unselectItem(`.part${currentPart}.selected`)
        
        if($(this).attr('id')){
            currentItem = $(this).attr('id') || currentItemParteChave
            if (partesChaves.includes(currentPart)){
                currentItemParteChave = currentItem
            }
        }

        // -------------------------------------- RELACIONAMENTO PRIMARIO
        selecionaItemParte(parseInt(currentItem))
        atualizaItemParteSelecionada()
        listaItensPartesSelecionados = verificaMudancaItensSelecionados(listaItensPartesSelecionados,arrOpcoesDisponiveis)

        // -------------------------------------- SUB-RELACIONAMENTO
        // let objSubRelacionamentos = [
        //     [1,[3,20]],
        // ]
        
        calculaSubRelacionamentos(objSubRelacionamentos)
        // arrOpcoesDisponiveis = relacionaMangaCava(3,20)

        // listaItensPartesSelecionados = verificaMudancaItensSelecionados(listaItensPartesSelecionados,arrOpcoesDisponiveis)
        // --------------------------------------
        
        
        


        verificaSelecaoItensParte()  
       
        
        
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
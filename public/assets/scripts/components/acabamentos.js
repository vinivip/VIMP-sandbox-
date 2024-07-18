function atualizaAcabamento(antigaListaAcabamentos,novoAcabamento, codParte)
{
    const listaAcabamentos = [...antigaListaAcabamentos]

    for(i = 0; i < listaAcabamentos.length;i++){
        let current = encontraAcabamentoPorId(listaAcabamentos[i])
        let currentCod = parseInt(current.codigoAcabamento)
        if (current.codigoParteProduto == codParte){
            listaAcabamentos.splice(listaAcabamentos.indexOf(currentCod), 1)
            return [...listaAcabamentos, parseInt(novoAcabamento)]
        }
    }
}
function mudaAcabamentoSelect(listaAcabamentos, codParte)
{
    // const currentItemPart = $(`.part${currentPart}.selected`).attr
    // selecionaItemParte(currentItemPart)
    for(i = 0; i < listaAcabamentos.length;i++){
        let current = encontraAcabamentoPorId(listaAcabamentos[i])
        
        if (current.codigoParteProduto == codParte){
            
            selectAcabamentos.value = current.codigoAcabamento
            currentAcabamento = selectAcabamentos.value 
            
        }
    }
}


function useAcabamentos()
{     
   

    currentAcabamento = selectAcabamentos.value 
    listaItensAcabamentosSelecionados = atualizaAcabamento
    (
        listaItensAcabamentosSelecionados,
        currentAcabamento, 
        currentPart
    )
    console.log(listaItensAcabamentosSelecionados)
    //console.logog(listaItensAcabamentosSelecionados)
    return
        
}

function rendSelectAcabamentos(items,element)
{
    $('#SelectAcabamentos').off()
    element.innerHTML = ''
    items.map(
        
        itemCode => {
            const item = encontraAcabamentoPorId(itemCode)
            
                element.innerHTML += `
                <option class="part${item.codigoParteProduto}" value="${item.codigoAcabamento}">${item.descAcabamento}</option>
            `        
        }
    )  

    $('#SelectAcabamentos').on('change',useAcabamentos)
};
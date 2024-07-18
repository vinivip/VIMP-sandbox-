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
    editModdeling()
    currentAcabamento = selectAcabamentos.value 
    listaItensAcabamentosSelecionados = atualizaAcabamento
    (
        listaItensAcabamentosSelecionados,
        currentAcabamento, 
        currentPart
    )
    return        
}

function selectSelected(codAcabamento){
   if( listaItensAcabamentosSelecionados.includes(codAcabamento)){
    return 'selected'
    }
   return
}

function rendSelectAcabamentos(items,element)
{
    
    $('#SelectAcabamentos').off()
    element.innerHTML = '<option value="x"> SELECIONE UM ACABAMENTO... </option>'
    // element.innerHTML = ''
    let selecionado = ''
 
    items.map(
        
        itemCode => {
            selecionado = ''
            const item = encontraAcabamentoPorId(itemCode)
              
                if( listaItensAcabamentosSelecionados.includes(parseInt(item.codigoAcabamento))){
                 
                    selecionado =  'selected'
                }
                  
                element.innerHTML += `
                <option 
                    
                    ${selecionado}   
                    value="${item.codigoAcabamento}" 
                >
                    ${item.descAcabamento}
                </option>
            `        
        }
    )  
    console.log(listaItensAcabamentosSelecionados)
    $('#SelectAcabamentos').on('change',useAcabamentos)
};
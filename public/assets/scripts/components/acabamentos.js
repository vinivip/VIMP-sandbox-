function atualizaAcabamento(antigaListaAcabamentos,novoAcabamento, codParte)
{
    const listaAcabamentos = [...antigaListaAcabamentos]
    let currentAcabamentoCod = 0;
    let currentAcabamentoObject
    for(i = 0; i < listaAcabamentos.length;i++){
        currentAcabamentoObject = encontraAcabamentoPorId(listaAcabamentos[i])//objeto do acabamento da lista de acabamentos selecionados
        if (!(typeof(currentAcabamentoObject)=='undefined')){ // verifica se o valor do selecionado antigo é 0
            if (currentAcabamentoObject.codigoParteProduto == codParte){
              currentAcabamentoCod = listaAcabamentos[i]
                break  
            }
        }
    }

    listaAcabamentos.splice(listaAcabamentos.indexOf(currentAcabamentoCod), 1)
    return [...listaAcabamentos, parseInt(novoAcabamento)]
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
function retiraAcabamentosIndisponíveis(listaAcabamentos,listaDisponiveis){

    let novaSelecao = [...listaAcabamentos]
    console.log(novaSelecao)

    for(i=0; i< listaAcabamentos.length; i++){

        if(!(listaDisponiveis.includes(listaAcabamentos[i]))){
            
            console.log(listaAcabamentos[i])

            novaSelecao.splice(novaSelecao.indexOf(listaAcabamentos[i]),1)
            novaSelecao.push(0)

        }
        
    }

    console.log(novaSelecao)

}


function verifySelectAcabamentoPendente(){

    if(selectAcabamentos.value == 0){
        $('#SelectAcabamentos').addClass('acabamentoPendente')
        return
    }
    $('#SelectAcabamentos').removeClass('acabamentoPendente')

}


function useAcabamentos()
{     
    
    editModdeling()
    currentAcabamento = selectAcabamentos.value 
    //console.log('novo:', currentAcabamento)
    listaItensAcabamentosSelecionados = atualizaAcabamento
    (
        listaItensAcabamentosSelecionados,
        currentAcabamento, 
        currentPart
    )
    //console.log(listaItensAcabamentosSelecionados)
    verifySelectAcabamentoPendente()
    return        
}

// function selectSelected(codAcabamento){
//    if( listaItensAcabamentosSelecionados.includes(codAcabamento)){
//     return 'selected'
//     }
//    return
// }

function rendSelectAcabamentos(items,element)
{
    
    $('#SelectAcabamentos').off()
    element.innerHTML = '<option value="0"> SELECIONE UM ACABAMENTO... </option>'
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
    //console.log(listaItensAcabamentosSelecionados)
    useAcabamentos()
    verifySelectAcabamentoPendente()
    $('#SelectAcabamentos').on('change',useAcabamentos)
};
function defineArrAcabamentosDisponiveis(listaItensSelecionados){
    
    let arrAcabamentos = []; 
    let arrAcabamentosDisponiveis = [];
    
    for(i=0;i<listaItensSelecionados.length;i++){
        arrAcabamentos = []
        for(a=0;a<arrRelacionamentosAcabamentos.length;a++){
            var listaAcabamentos = arrRelacionamentosAcabamentos[a].slice();
            listaAcabamentos.shift();
            if (listaAcabamentos.includes(parseInt(listaItensSelecionados[i]))){
                var acabamento = encontraAcabamentoPorId(arrRelacionamentosAcabamentos[a][0]);
                
                arrAcabamentos.push(parseInt(acabamento.codigoAcabamento));
            }
        }
        arrAcabamentosDisponiveis=[...arrAcabamentosDisponiveis,...arrAcabamentos];
    }
    return arrAcabamentosDisponiveis
}
function retornaArrayPartesPendentes(){
    let partes = [...encontraListaPartesPorProduto()]
    let partesProntas = []
    let partePronta = ''
    
    for(x = 0; x< listaItensAcabamentosSelecionados.length; x++){
        if(listaItensAcabamentosSelecionados[x] !== 0){
            
            partePronta = parseInt(encontraAcabamentoPorId(listaItensAcabamentosSelecionados[x]).codigoParteProduto)
            partesProntas.push(partePronta)
        }
    }
    for(x=0;x<partes.length;x++){
        if(partesProntas.includes(partes[x])){
            hideIncompleteWarning(partes[x])
        }else{
            showIncompleteWarning(partes[x])
        }
    }
}
function verificaPendenciaModelagem(){
    if(listaItensAcabamentosSelecionados.includes(0)){
        openToast("VOCÊ POSSUI ACABAMENTOS NÃO DEFINIDOS",'error')
        return 0
    }
    return 1
}
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
 

    for(i=0; i< listaAcabamentos.length; i++){

        if(!(listaDisponiveis.includes(listaAcabamentos[i]))){
            
            novaSelecao.splice(novaSelecao.indexOf(listaAcabamentos[i]),1)
            novaSelecao.push(0)

        }
        
    }
    
    return(novaSelecao)
    
    
}
function showIncompleteWarning(Parte){
    $(`#${Parte} .checkWarningContainer`).fadeOut()
    $(`#${Parte} .incompleteWarningContainer`).fadeIn()
}
function hideIncompleteWarning(Parte){
    $(`#${Parte} .incompleteWarningContainer`).fadeOut()
    $(`#${Parte} .checkWarningContainer`).fadeIn()
}


function verifySelectAcabamentoPendente(){

    if(selectAcabamentos.value == 0){
        $('#SelectAcabamentos').addClass('acabamentoPendente')
        return
    }
    $('#SelectAcabamentos').removeClass('acabamentoPendente')
    return
}


function useAcabamentos()
{     
    
    if(ready){
        editModdeling()
    }
    currentAcabamento = selectAcabamentos.value 
    //console.log('novo:', currentAcabamento)
    listaItensAcabamentosSelecionados = atualizaAcabamento
    (
        listaItensAcabamentosSelecionados,
        currentAcabamento, 
        currentPart
    )
    
    verifySelectAcabamentoPendente()
    retornaArrayPartesPendentes()
    carregaAcabamentoSelecionada()
 
    //console.log("LIPs",listaItensPartesSelecionados)
    //console.log("LIAs",listaItensAcabamentosSelecionados)  
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
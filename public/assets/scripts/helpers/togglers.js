function selectPart(partID){

    $(`li#${partID}`).addClass('np-active')
    $(`li#${partID} img`).attr('src',`assets/img/icons/icon_${partID}_branco.webp`)    
}
function unselectPart(partID){

    $(`li#${partID}`).removeClass('np-active') 
    $(`li#${partID} img`).attr('src',`assets/img/icons/icon_${partID}_laranja.webp`)
}

function selectItem(item){
    
    $(item).addClass('selected');
}
function unselectItem(item){

    $(item).removeClass('selected');   
}
function enableItem(item){

    $(item).addClass('enabled');
    $(item).on('click',useItemParteMins)
}
function disableItem(item){
    
    $(item).removeClass('enabled');
    $(item).off()
    unselectItem(item)
}

function verificaDisponibilidadeItemParte(codItemParte,listaItensDisponiveis, flag){
    
    if(listaItensDisponiveis.includes(codItemParte))    
    {   
        enableItem( `#${codItemParte}.part${currentPart}`)
        if(listaItensPartesSelecionados.includes(codItemParte)){
            if(!flag){
                currentItem = codItemParte
                return true
            }
        }           
    }else{
        disableItem( `#${codItemParte}.part${currentPart}`)
        return false
    }
}
function verificaSelecaoItensParte(){
    
    if (listaItensPartesSelecionados.length == 0){
        listaItensPartesSelecionados = arrDefault[currentProduct]
    }
    
    unselectItem('.selected')
    for (var i = 0; i < listaItensPartesSelecionados.length; i++){
        selectItem(`#${listaItensPartesSelecionados[i]}.miniatura`)
    }
}
function verificaDisponibilidadePath(path,alt){
    
    let urlimg = path
    if(!(listaArquivosDisponiveis.includes(urlimg))){
        urlimg = alt
    }
    return urlimg
}

function escondeLayers(listaEscodidos){
    
    for(i=0;i<listaEscodidos.length;i++){
        $(`.modelPart${listaEscodidos[i]}`).hide()
    }
}
function mostraLayers(listaEscodidos){
    
    for(i=0;i<listaEscodidos.length;i++){
        $(`.modelPart${listaEscodidos[i]}`).show()
    }
}



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

function encontraListaPartesPorProduto(){
    const partesDoProduto = []
    for(i=0; i<partes.length; i++){
        if (partes[i].codigoProduto == currentProduct){
            partesDoProduto.push(parseInt(partes[i].codigoParteProduto))
        }
    }
    return partesDoProduto
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
    //console.log(listaItensAcabamentosSelecionados)
    if(listaItensAcabamentosSelecionados.includes(0)){
        return 0
    }
    return 1
}

function encontraItemPartePorAcabamento(codAcabamento){

    const objAcabamento = encontraAcabamentoPorId(codAcabamento)
    for(i=0; i< listaItensPartesSelecionados.length; i++){
        let itemParte = encontraItemPartePorId(listaItensPartesSelecionados[i])
        if (objAcabamento.codigoParteProduto == itemParte.codigoParteProduto){
            return listaItensPartesSelecionados[i]
        }   
    }
}
function encontraItemPartePorParte(codParte){

    
    for(i=0; i< listaItensPartesSelecionados.length; i++){
       let itemParte = encontraItemPartePorId(listaItensPartesSelecionados[i])
       if (codParte == itemParte.codigoParteProduto){
           return listaItensPartesSelecionados[i]
        }
    }
}
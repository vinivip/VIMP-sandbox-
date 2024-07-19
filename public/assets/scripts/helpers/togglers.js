
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
    // console.log("seleção item:",listaItensPartesSelecionados)
    unselectItem('.selected')
    for (var i = 0;i <listaItensPartesSelecionados.length;i++){

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
        // console.log("item PARTE:",listaItensSelecionados[i])
        for(a=0;a<arrRelacionamentosAcabamentos.length;a++){
            var listaAcabamentos = arrRelacionamentosAcabamentos[a].slice();
            listaAcabamentos.shift();
            if (listaAcabamentos.includes(parseInt(listaItensSelecionados[i]))){
                var acabamento = encontraAcabamentoPorId(arrRelacionamentosAcabamentos[a][0]);
                
                arrAcabamentos.push(parseInt(acabamento.codigoAcabamento));
            }
        }
        arrAcabamentosDisponiveis=[...arrAcabamentosDisponiveis,...arrAcabamentos];
        // console.log(arrAcabamentosDisponiveis)
    }
    
    
    return arrAcabamentosDisponiveis
}
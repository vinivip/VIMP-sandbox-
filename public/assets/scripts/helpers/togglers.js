
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

function verificaDisponibilidadeItemParte(codItemParte,listaItensDisponiveis){
    if(listaItensDisponiveis.includes(codItemParte))    
    {   
        enableItem( `#${codItemParte}.part${currentPart}`)

    }else{
        disableItem( `#${codItemParte}.part${currentPart}`)
    }

}
function verificaSelecaoItensParte(){
    
    if (listaItensPartesSelecionados.length == 0){
        listaItensPartesSelecionados = arrDefault[currentProduct]
        
    }
    
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
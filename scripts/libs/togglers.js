
function selectPart(partID){
    $(`li#${partID}`).addClass('np-active')
    
    $(`li#${partID} img`).fadeOut('fast')
    $(`li#${partID} img`).attr('src',`assets/icons/icon_${partID}_branco.webp`)
    $(`li#${partID} img`).fadeIn('fast')
    
}
function unselectPart(partID){
    $(`#${partID}`).removeClass('np-active')
    $(`#${partID} img`).hide()
    $(`#${partID} img`).fadeIn('medium')
    $(`#${partID} img`).attr('src',`assets/icons/icon_${partID}_laranja.webp`)

}


function selectItem(item){
    
    $(item).addClass('selected');
}
function unselectItem(item){
    console.log(item)
    $(item).removeClass('selected');
   
}
function enableItem(item){
    console.log(item)
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
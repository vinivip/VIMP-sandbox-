function verificaDisponibilidadeItemParte(codItemParte,listaItensDisponiveis){
    if(listaItensDisponiveis.includes(codItemParte))    
    {   
        enableItem( `#${codItemParte}.part${currentPart}`)
        
    }else{
        disableItem( `#${codItemParte}.part${currentPart}`)
    }
    
}
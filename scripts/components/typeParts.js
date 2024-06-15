
function showItemParteMins()
{
    var objElementos = document.getElementsByClassName(`part${currentPart}`)
    
    $(`.part${currentPart}`).fadeIn()
    for( i = 0; i < objElementos.length; i++){
        const id = objElementos[i].id
        
        verificaDisponibilidadeItemParte(parseInt(id),arrOpcoesDisponiveis)
    }
}
function hideItemParteMins()
{
     
    $(`.part${currentPart}`).hide()
    
}

function useItemParteMins()
    {
        unselectItem(`.part${currentPart}.selected`)
        const target = $(this).attr('id') || currentCore
        
        selecionaItemParte(parseInt(target))
        
        if (partesChaves.includes(currentPart)){
            currentCore = target
        }
        selectItem($(this))
        // var objElementos = document.getElementsByClassName(`part${currentPart}`)
            
    //     for( i = 0; i < objElementos.length; i++){
    //         const id = parseInt(objElementos[i].id)
            
    //         if(target == id){
    //             console.log('entrou')
    //             selectItem(`#${target}.enabled`)
    //         }else{
    //             console.log('entrou')
    //             unselectItem(`#${id}.enabled`)
    //     }
            
    // }
}


function rendItemParteMins(items,element)
{
    
    items.map(
       
        item => {
            
            img = new Image()
            element.innerHTML += `
                <div 
                    id='${item.codigoItemParteProduto}' 
                    title='${item.descItemParteProduto}' 
                    class='part${item.codigoParteProduto} miniatura'
                >   
                   <img 
                    src="assets/miniaturas/icon_item_parte_${item.codigoItemParteProduto}_laranja.webp"
                    onerror="this.src='assets/miniaturas/default.png'"
                   alt="${item.descItemParteProduto}">
                 
                </div>`
          
        }
    )
    
    // useItemParteMins()
      
      
  
};

function useItemParteMins()
    {
        const target = parseInt($(this).attr('id')) || currentCore
        
        selecionaItemParte(target)

        var objElementos = document.getElementsByClassName(`part${currentPart}`)
            
        for( i = 0; i < objElementos.length; i++){
            const id = parseInt(objElementos[i].id)
            
            if(target == id){
                selectItem(`#${target}.enabled`)
            }else{
                unselectItem(`#${id}.enabled`)
        }
            
    }
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
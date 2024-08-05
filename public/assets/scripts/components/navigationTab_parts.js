
function showPartesOptions()
{      
    $(`.prod${currentProduct}`).fadeIn()
    $('.optionPart').on('click',usePartesOptions)   
}
function hidePartesOptions()
{      
    $('.optionPart').off()   
    unselectPart(currentPart)
    $(`.prod${currentProduct}`).hide()  

}
function selectEditingModel(){
    $('.editing').removeClass('editing')
    $(`.modelPart${currentPart}`).addClass('editing')
}

function toggleBackModels(){
    const costas = arrConfigExibCostas[0]
    const frente = arrConfigExibCostas[1]
    // console.log('frente,costas:',frente,costas)
   if (costas.includes(parseInt(currentPart))){
        mostraLayers(costas)
        escondeLayers(frente)

   }else{
        mostraLayers(frente)
        escondeLayers(costas)    
    } 
        
        
    
    
}
function relacionaMangaCava(idManga){
   
    let itemDisponivel
    let cavaAtual
    let novasOpcoes = []
    const idMangaNenhum = 80
    for (i=0; i < refDisponiveis.length; i++){
        itemDisponivel = encontraItemPartePorId(refDisponiveis[i])
        if( parseInt(itemDisponivel.codigoParteProduto) == 20){
            
            if( !(parseInt(itemDisponivel.codigoItemParteProduto) == 83)){
                
                cavaAtual = parseInt(itemDisponivel.codigoItemParteProduto)
                
            }
            
        }
        else{
            novasOpcoes.push(parseInt(itemDisponivel.codigoItemParteProduto))
        }
    }
   
    if(idManga == idMangaNenhum){
        novasOpcoes.push(cavaAtual)
        return novasOpcoes
    }
    novasOpcoes.push(83)
    return novasOpcoes
    
}
function usePartesOptions()
        {
            // console.log("antes:",listaItensPartesSelecionados)
            unselectPart(currentPart)
            hideItemParteMins()
            
            currentPart = $(this).attr('id')||`${currentPart}`;
           
            selectPart(currentPart)
            selectEditingModel()
            toggleBackModels()
            
            $('.partTitle').text(encontraPartePorId(parseInt(currentPart)).descParteProduto)
            
            selecionaParte(currentPart)
            selecionaItemParte(parseInt(currentItemParteChave)) 
           


            showItemParteMins()
            
            
          
            
}



function rendPartesOptions(parts,element)
{

    parts.map(

        
        
        part => {
            let url = `icon_${part.codigoParteProduto}_laranja.webp`
            element.innerHTML += `
                <li id='${part.codigoParteProduto}'  class='optionPart prod${part.codigoProduto}'>
                    <div class="incompleteWarningContainer"> 
                        <span class="material-symbols-outlined incompleteWarning">exclamation</span>    
                    </div>
                    <div class="checkWarningContainer"> 
                        <span class="material-symbols-outlined checkWarning">check</span>
                    </div>
                    <div class="partIconContainer">
                        
                        <img 
                            src="assets/img/icons/${verificaDisponibilidadePath(url,'default.png')}"
                            title='${part.descParteProduto}' 
                            alt="${part.descParteProduto}"
                        >
                    </div>
                   
                </li>`
        }
        
    ) 

    // usePartesOptions()

    
    
};
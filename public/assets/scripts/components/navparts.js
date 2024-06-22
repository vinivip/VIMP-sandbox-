
function showPartesOptions()
{      
    $(`.prod${currentProduct}`).fadeIn()
    optionPartListner = $('.optionPart').click(usePartesOptions)   
}
function hidePartesOptions()
{      
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
    console.log('frente,costas:',frente,costas)
   if (costas.includes(parseInt(currentPart))){
        mostraLayers(costas)
        escondeLayers(frente)

   }else{
        mostraLayers(frente)
        escondeLayers(costas)    
    } 
        
        
    
    
}
function usePartesOptions()
        {
            // console.log("antes:",listaItensPartesSelecionados)
            unselectPart(currentPart)
            hideItemParteMins()
            
            currentPart = $(this).attr('id')||`${currentPart}`;
            // console.log("depois:",listaItensPartesSelecionados)
            // console.log(currentPart)
            selectPart(currentPart)
            selectEditingModel()
            toggleBackModels()
            
            $('.partTitle').text(encontraPartePorId(parseInt(currentPart)).descParteProduto)
            
            
            selecionaParte(currentPart)
            selecionaItemParte(parseInt(currentCore))
            showItemParteMins()
            // selecionaItemParte(currentCore)
            

            
            
}



function rendPartesOptions(parts,element)
{

    parts.map(

        
        
        part => {
            let url = `icon_${part.codigoParteProduto}_laranja.webp`
            element.innerHTML += `
                <li id='${part.codigoParteProduto}'  class='optionPart prod${part.codigoProduto}'>
                    <div>
                        
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

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
function usePartesOptions()
        {
            
            unselectPart(currentPart)
            hideItemParteMins()
            
            currentPart = $(this).attr('id')||`${currentPart}`;
           
            selectPart(currentPart)
            selectEditingModel()
            
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
            
            element.innerHTML += `
                <li id='${part.codigoParteProduto}'  class='optionPart prod${part.codigoProduto}'>
                    <div>
                        
                        <img src="assets/icons/icon_${part.codigoParteProduto}_laranja.webp"
                        onerror="this.src='assets/icons/default.png'" title='${part.descParteProduto}' alt="${part.descParteProduto}">
                    </div>
                   
                </li>`
        }
    ) 

    // usePartesOptions()

    
    
};
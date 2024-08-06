function selectPart(partID)
{
    $(`li#${partID}`).addClass('np-active')
    $(`li#${partID} img`).attr('src',`assets/img/icons/icon_${partID}_branco.webp`)    
}
function unselectPart(partID)
{
    $(`li#${partID}`).removeClass('np-active') 
    $(`li#${partID} img`).attr('src',`assets/img/icons/icon_${partID}_laranja.webp`)
}
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
function selectEditingModel()
{
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
            toggleBackModels()
            
            $('.partTitle').text(encontraPartePorId(parseInt(currentPart)).descParteProduto)
            
            selecionaParte(currentPart)
            selecionaItemParte(parseInt(currentItemParteChave)) 
            calculaSubRelacionamentos(objSubRelacionamentos)
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
};
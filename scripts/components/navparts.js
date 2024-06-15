

function usePartesOptions()
        {
            $(`.part${currentPart}`).hide()
            $(`.np-active img`).attr('src',`assets/icons/icon_${currentPart}_laranja.webp`)
            $(`.np-active`).removeClass('np-active')
            
            currentPart = $(this).attr('id')||`${currentPart}`;
            selecionaParte(parseInt(currentPart))

            
            $(`li#${currentPart}`).addClass('np-active')
            $(`li#${currentPart} img`).attr('src',`assets/icons/icon_${currentPart}_branco.webp`)
            
            $('.partTitle').text(encontraPartePorId(parseInt(currentPart)).descParteProduto)

            var objElementos = document.getElementsByClassName(`part${currentPart}`)
            
            $(`.part${currentPart}`).fadeIn()
            for( i = 0; i < objElementos.length; i++){
                const id = objElementos[i].id
                
                verificaDisponibilidadeItemParte(parseInt(id),arrOpcoesDisponiveis)
            }

            
            
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
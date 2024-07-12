function atualizaAcabamento()
{
    
}


function useAcabamentos()
    {    
        currentAcabamento = selectAcabamentos.value
        console.log(currentAcabamento)
        
}

function rendSelectAcabamentos(items,element)
{
    $('#SelectAcabamentos').off()
    element.innerHTML = ''
    items.map(
        
        item => {
            if (item.codigoParteProduto == currentPart){
                element.innerHTML += `
                <option class="part${item.codigoParteProduto}" value="${item.codigoAcabamento}">${item.descAcabamento}</option>
`
            }
                  
        }
    )  
    $('#SelectAcabamentos').on('change', useAcabamentos)
    selectAcabamentos.value = currentAcabamento
    useAcabamentos()
    
};

function useAcabamentos()
{
    
    
}

function rendSelectAcabamentos(items,element)
{
    items.map(
       
        item => {
   
            element.innerHTML += `
                <option value="${item.codigoProduto}">${item.descAcabamento}</option>
`      
        }
    )  
};
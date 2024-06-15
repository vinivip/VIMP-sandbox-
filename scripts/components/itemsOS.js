function rendSelectItensOs(items,element)
{
    items.map(
       
        item => {
   
            element.innerHTML += `
                <option value="${item.codigoProduto}">ITEM 0${item.codigoProduto}(${item.descProduto}): ${item.descItem}</option>
`      
        }
    )  
};
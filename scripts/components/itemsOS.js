
function useSelect()
{
    hidePartesOptions()
    hideItemParteMins()
    
    currentProduct = selectOS.value
    currentPart = selecionaProduto(currentProduct)[0]
    // definição listaItensPartesSelecionados ===============================================================
    listaItensPartesSelecionados = arrListaItensPartesSelecionados[$("#changeItem").prop('selectedIndex')]
    verificaSelecaoItensParte()   
    // ====================================================================================================== 
    rendObjetosImgModelagem(listaItensPartesSelecionados.length)
    currentCore= listaItensPartesSelecionados[0]
    showPartesOptions()
    usePartesOptions()
    useItemParteMins()
    
    $('#changeItem').on('change', useSelect)
}

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
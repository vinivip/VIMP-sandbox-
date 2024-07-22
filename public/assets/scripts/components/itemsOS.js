
function useSelect()
{

    hidePartesOptions()
    hideItemParteMins()
    
    currentProduct = selectOS.value
    arrConfigExibCostas = arrExibicaoApenasCostas[currentProduct]
    
    currentPart = selecionaProduto(currentProduct)[0]
    // definição listaItensPartesSelecionados ===============================================================
    listaItensPartesSelecionados = arrListaItensPartesSelecionados[$("#changeItem").prop('selectedIndex')]
    verificaSelecaoItensParte()   
    // ====================================================================================================== 
    // definição listaItensAcabamentosSelecionados ==========================================================
    listaItensAcabamentosSelecionados = arrListaItensAcabamentosSelecionados[$("#changeItem").prop('selectedIndex')]
      
    // ====================================================================================================== 
    rendObjetosImgModelagem(listaItensPartesSelecionados.length)
    currentCore= listaItensPartesSelecionados[0]
    showPartesOptions()
    usePartesOptions()
    // useItemParteMins()

    editing = false
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
    $('#changeItem').on('change', useSelect)
};
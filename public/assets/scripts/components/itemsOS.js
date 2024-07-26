
function useSelect()
{
    ready = false
    hidePartesOptions()
    hideItemParteMins()
    
    currentProduct = selectOS.value
    $(".modellingContainer").hide()
    $(".unikouContainer").hide()
    if(produtosImplementados.includes(parseInt(currentProduct))){
        $(".modellingContainer").fadeIn()
    }else{
        $(".unikouContainer").fadeIn()
    }

    arrConfigExibCostas = arrExibicaoApenasCostas[currentProduct]
    
    currentPart = selecionaProduto(currentProduct)[0]
    // definição listaItensPartesSelecionados ===============================================================
    listaItensPartesSelecionados = arrListaItensPartesSelecionados[$("#changeItem").prop('selectedIndex')]
    verificaSelecaoItensParte()   
    // ====================================================================================================== 
    // definição listaItensAcabamentosSelecionados ==========================================================
    listaItensAcabamentosSelecionados = arrListaItensAcabamentosSelecionados[$("#changeItem").prop('selectedIndex')]
    if (listaItensAcabamentosSelecionados.length == 0){
        listaItensAcabamentosSelecionados = arrAcabamentoDefault[currentProduct] 
    }
      
    // ====================================================================================================== 
    // definição listaComentariosSetor ==========================================================
    listaComentariosSetor = arrListaComentariosSetor[$("#changeItem").prop('selectedIndex')]
    loadMensages()  
    // ====================================================================================================== 
    rendObjetosImgModelagem(listaItensPartesSelecionados.length)
    currentCore= listaItensPartesSelecionados[0]
    showPartesOptions()
    usePartesOptions()


    editing = false
    ready = true
    return
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
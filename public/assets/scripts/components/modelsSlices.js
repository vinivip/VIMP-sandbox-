function loadModel(idSvg,layer){
    const objs = document.getElementsByClassName(`prod${currentProduct}`)
    const sel = document.getElementsByClassName(`np-active`)
    const layers = document.getElementsByClassName(`modelPart`)
    

    pathSvg = `assets/img/models/${verificaDisponibilidadePath(`model_${idSvg}.svg`,'default.svg')}#template`
    $("#"+layers[layer].id).attr('xlink:href',pathSvg)    
}

// function verifyException(idSvg){
//     const idCore =`${idSvg}-${currentCore}`
//     if(Object.keys(exceptions).includes(idCore)){
//         return exceptions[idCore]
//     }
//     return idSvg
// }
function carregaModelagemSelecionada()
{
    let id
    for(k=0;k<listaItensPartesSelecionados.length;k++){
        
        id = listaItensPartesSelecionados[k]
        
        loadModel(id,k)
    }
}

function rendObjetosImgModelagem(qtd){
    const slices = document.getElementById('containerSvg')
    for (i=0;i<=qtd-1;i++){
        slices.innerHTML += `<use id='${"layerUse"+i}' class="modelPart" xlink:href=""></use>`  
    }  
}
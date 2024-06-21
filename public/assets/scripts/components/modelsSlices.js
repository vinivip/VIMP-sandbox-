function loadModel(idSvg,layer){
    const objs = document.getElementsByClassName(`prod${currentProduct}`)
    const sel = document.getElementsByClassName(`np-active`)
    // const layers = document.getElementsByClassName(`modelPart`)
    // console.log("layer atual:",layer)

    pathSvg = `assets/img/models/${verificaDisponibilidadePath(`model_${idSvg}.svg`,'default.svg')}#template`
    $(".modelPart"+layer).attr('xlink:href',pathSvg)
         
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
    let id, layer
    for(k=0;k<listaItensPartesSelecionados.length;k++){
        
        id = listaItensPartesSelecionados[k]
        layer = encontraItemPartePorId(id).codigoParteProduto
        // id = verifyException(listaItensPartesSelecionados[k])
        
        loadModel(id,layer)
    }
}

function rendObjetosImgModelagem(qtd){
    const slices = document.getElementById('containerSvg')
    for (i=0;i<qtd;i++){
        const partId=encontraItemPartePorId(listaItensPartesSelecionados[i]).codigoParteProduto
        slices.innerHTML += `<use id='${"layerUse"+i}' class="modelPart modelPart${partId}" xlink:href=""></use>`  
    }  
}
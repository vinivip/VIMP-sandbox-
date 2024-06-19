function loadModel(idSvg,layer){
    console.log("idsvg",idSvg)
    const objs = document.getElementsByClassName(`prod${currentProduct}`)
    const sel = document.getElementsByClassName(`np-active`)
    const layers = document.getElementsByClassName(`modelPart`)
    // var indice
    // for(i=0;i<objs.length;i++){
    //     if (objs[i].id == sel[0].id){
    //         indice = i
    //     }
    // }
    pathSvg = `assets/models/model_${idSvg}.svg#template`
    $("#"+layers[layer].id).attr('xlink:href',pathSvg)    
}
function rendObjetosImgModelagem(qtd){
    const slices = document.getElementById('containerSvg')
    for (i=0;i<=qtd-1;i++){
        slices.innerHTML += `<use id='${"layerUse"+i}' class="modelPart" xlink:href=""></use>`  
    }  
}
function carregaModelagemSelecionada(){
    console.log(listaItensPartesSelecionados.length)
    for(k=0;k<listaItensPartesSelecionados.length;k++){
        
        loadModel(listaItensPartesSelecionados[k],k)
    }
}
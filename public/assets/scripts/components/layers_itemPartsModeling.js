
function loadModel(idSvg,layer)
{
    pathSvg = `assets/img/models/${verificaDisponibilidadePath(`model_${idSvg}.svg`,'default.svg')}#template`
    $("#layerUse"+layer).attr('xlink:href',pathSvg)
         
}function carregaModelagemSelecionada()
{
    let id, layer
    for(k=0;k<listaItensPartesSelecionados.length;k++){
        id = listaItensPartesSelecionados[k]
        layer = encontraItemPartePorId(id).codigoParteProduto
        loadModel(id,ordemCamadasPorParte[layer])
    }
}function rendObjetosImgModelagem(qtd)
{
    const slices = document.getElementById('containerSvg')
    for (i=0;i<qtd;i++){
        const partId=encontraItemPartePorId(arrDefault[currentProduct][i]).codigoParteProduto
        slices.innerHTML += `<use id='${"layerUse"+i}' class="modelPart modelPart${partId}" xlink:href=""></use>`  
    }  
    rendAcabamentoModelagem(qtd)
}


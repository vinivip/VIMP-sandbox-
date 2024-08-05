
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

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function rendAcabamentoModelagem(qtd){
    const slices = document.getElementById('containerSvg')
    for (i=0;i<qtd;i++){
        const partId=encontraAcabamentoPorId(parseInt(arrAcabamentoDefault[currentProduct][i])).codigoParteProduto
        slices.innerHTML += `<use id='${"layerUse"+(qtd+i)}' class="acabamentoPart modelPart${partId}" xlink:href=""></use>`  
    }
}function carregaAcabamentoSelecionada()
{
    let id, layer
    for(k=0;k<listaItensAcabamentosSelecionados.length;k++){
        loadAcabamento(0,listaItensAcabamentosSelecionados.length+k)
    }
    for(k=0;k<listaItensAcabamentosSelecionados.length;k++){
        id = listaItensAcabamentosSelecionados[k]
        if(id!==0){
            layer = parseInt(encontraAcabamentoPorId(id).codigoParteProduto)
            loadAcabamento(id,listaItensAcabamentosSelecionados.length+ordemCamadasPorParte[layer])
        }
    }
}function loadAcabamento(codAcabamento,layer)
{
    const idSvg = retornaCaminhoModelo( String(codAcabamento))

    pathSvg = `assets/img/models/${verificaDisponibilidadePath(`acabamento_${idSvg}.svg`,'default.svg')}#template`
    $("#layerUse"+layer).attr('xlink:href',pathSvg)
         
}

function retornaCaminhoModelo(codAcabamento)
{   
    
    if(Object.keys(rel_modelo_acabamento).includes(codAcabamento)){
        let itemParte = encontraItemPartePorAcabamento(codAcabamento)

        if(Object.keys(rel_tipo_item_parte).includes(String(itemParte))){
            return `${rel_modelo_acabamento[codAcabamento]}.${rel_tipo_item_parte[encontraItemPartePorAcabamento(codAcabamento)]}` 
        }
       
    }
    
    return codAcabamento

}
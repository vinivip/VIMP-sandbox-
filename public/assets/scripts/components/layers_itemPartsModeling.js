function escondeLayers(listaEscodidos)
{    
    for(i=0;i<listaEscodidos.length;i++){
        $(`.modelPart${listaEscodidos[i]}`).hide()
    }
}
function mostraLayers(listaEscodidos)
{    
    for(i=0;i<listaEscodidos.length;i++){
        $(`.modelPart${listaEscodidos[i]}`).show()
    }
}
function toggleBackModels(){

    const costas = arrConfigExibCostas[0]
    const frente = arrConfigExibCostas[1]
   if (costas.includes(parseInt(currentPart))){
        mostraLayers(costas)
        escondeLayers(frente)
        trocaModelagemParteChaveCostas()
   }else{
        mostraLayers(frente)
        escondeLayers(costas)    
        flag_costas = false
    } 
}
var flag_costas = false
function trocaModelagemParteChaveCostas(){  
     
    flag_costas = true
}
function carregaModelagemCostas(){
    if(flag_costas){
        loadModel("costas_"+currentItemParteChave,0)
    }
}
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
    carregaModelagemCostas()
}function rendObjetosImgModelagem(qtd)
{
    $(".modelPart").off()
    const slices = document.getElementById('containerSvg')
    for (i=0;i<qtd;i++){

        const partId=encontraItemPartePorId(arrDefault[currentProduct][i]).codigoParteProduto
        slices.innerHTML += `<use name='${partId}' id='${"layerUse"+i}' class="modelPart modelPart${partId}" xlink:href=""></use>`  

    }
     
    rendAcabamentoModelagem(qtd)
}


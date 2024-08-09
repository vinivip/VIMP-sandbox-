function openComplemetsModal(idPart,flagConfirmaObsItemParte='',flagConfirmaObsAcabamento=''){
    $('#verificaObsItemParte').html(``)
    $('#verificaObsAcabamento').html(``)
    if(flagConfirmaObsItemParte){
        $('#verificaObsItemParte').html(`A OBSERVAÇÃO ABAIXO FOI FEITA PARA UM
            ${encontraPartePorId(parseInt(encontraItemPartePorId(flagConfirmaObsItemParte).codigoParteProduto
            )).descParteProduto} 
            ${encontraItemPartePorId(flagConfirmaObsItemParte).descItemParteProduto}
        <br>(verifique se as informações ainda são validas)`)
    }
    if(flagConfirmaObsAcabamento){
        $('#verificaObsAcabamento').html(`A OBSERVAÇÃO ABAIXO FOI FEITA PARA O ACABAMENTO
            ${encontraPartePorId(parseInt(encontraAcabamentoPorId(flagConfirmaObsAcabamento).codigoParteProduto
            )).descParteProduto} 
            ${encontraAcabamentoPorId(flagConfirmaObsAcabamento).descAcabamento}
        <br>(verifique se as informações ainda são validas)`)
    }

   
    const objPart = encontraPartePorId(parseInt(idPart))
    try{
        const idAcabamento = encontraAcabamentoPorParte(parseInt(idPart))
        const objAcabamento = encontraAcabamentoPorId(idAcabamento,listaItensAcabamentosSelecionados)
        listadeEdicao = criaCopiaDeEdicao(listaObsItemOs)
        rendModalTabs(encontraListaPartesPorProduto(),listadeEdicao)
        loadModalData(objPart,listadeEdicao)
        $(".modalComplementosDeModelagem").show()
    }catch(e){
        console.log(e)
        openToast(`modelagem incompleta conclua a modelagem de ${objPart.descParteProduto} para adicionar uma OBS.`,'error')
        usePartesOptions(idPart)
    }

    
}
function saveCloseModal(){
    salvaTabAtual(currentModalTabOption,listadeEdicao)
    listaObsItemOs = criaCopiaDeEdicao(listadeEdicao)
    $(".modalComplementosDeModelagem").hide()
}
function noSaveCloseModal(){
    $(".modalComplementosDeModelagem").hide()
}

function rendModalTabs(listaConcluidos, listaReferencia){
    $('.modalTabOption').off()
    modalTabs.innerHTML =''
    listaConcluidos.sort()
    console.log(listaConcluidos)
    listaConcluidos.map(parte=>{
        if(!verificaItemParteNenhum(encontraItemPartePorParte(parte)) && retornaListaPartesConcluidas().includes(parte)){
        let part = encontraPartePorId(parte)
        let url = `icon_${part.codigoParteProduto}_laranja.webp`
        modalTabs.innerHTML += `
            <div name='${part.codigoParteProduto}' id='opt${part.codigoParteProduto}' class="divModalTabs modalTabOption modalPart${part.codigoParteProduto} ">
            <img 
                            src="assets/img/icons/${verificaDisponibilidadePath(url,'default.png')}"
                            title='${part.descParteProduto}' 
                            alt="${part.descParteProduto}"
                            class="imgModalTabs"
                        >
            <h3>${part.descParteProduto}</h3>
            </div>
            
        `
        }else{
            let part = encontraPartePorId(parte)
            let url = `icon_${part.codigoParteProduto}_laranja.webp`
            modalTabs.innerHTML += `
            <div name='${part.codigoParteProduto}' id='locked' class="divModalTabs modalTabOption modalPart${part.codigoParteProduto} locked">
            <img 
                            src="assets/img/icons/${verificaDisponibilidadePath(url,'default.png')}"
                            title='${part.descParteProduto}' 
                            alt="${part.descParteProduto}"
                            class="imgModalTabs"
                        >
            <h3>${part.descParteProduto}</h3>
            </div>
            
        `
        }   
        })

    $('.modalTabOption').on('click',modalOption => {
       if (modalOption.currentTarget.id !== 'locked'){        
        let codParteProduto = $("#"+modalOption.currentTarget.id).attr("name")
        
        salvaTabAtual(currentModalTabOption,listaReferencia)
        selectModalOption(codParteProduto,listaReferencia)
    }else{
        openToast('VOCÊ PRECISA SELECIONAR UM ITEM E SEU ACABAMENTO PARA INSERIR UMA OBSERVAÇÃO','error')
    }

    })

   
}function atualizaLabels(idPart){
    const idItemPart = encontraItemPartePorParte(parseInt(idPart))
    const idAcabamento = encontraAcabamentoPorParte(parseInt(idPart))

    const descPart = encontraPartePorId(parseInt(idPart)).descParteProduto
    const descItemParte = encontraItemPartePorId(idItemPart).descItemParteProduto
    const descAcabamento = encontraAcabamentoPorId(idAcabamento).descAcabamento

    $("#labelInputItemPartObsModal").text(`OBS. de modelagem (${descPart} ${descItemParte})`)
    $("#labelInputTrimObsModal").text(`OBS. de acabamento (${descPart} ${descAcabamento})`)
}function loadModalData(ParteProduto,listadeEdicao){
    
    selectModalOption(ParteProduto.codigoParteProduto,listadeEdicao)
}



function selectModalOption(idPart,lista){
    currentModalTabOption = idPart
    unselectModalOption(idPart)
    $(`.modalPart${idPart}`).addClass('active')
    $(`.modalPart${idPart} img`).attr('src',`assets/img/icons/icon_${idPart}_branco.webp`)

    atualizaLabels(idPart)
    carregaMensagemObs(idPart,lista)
}


function unselectModalOption(){
    const idActive = $(`.modalTabOption.active`).attr('name')
    $(`.modalTabOption.active img`).attr('src',`assets/img/icons/icon_${idActive}_laranja.webp`)
    $(`.modalTabOption.active`).removeClass('active')
}


function carregaMensagemObs(parteProduto,listaObsTratada){
    
    textareaModalItemParte.value = ''
    textareaModalAcabamento.value = ''
    if(parseInt(parteProduto) in listaObsTratada[0]){
        textareaModalItemParte.value = listaObsTratada[0][parseInt(parteProduto)].split('-')[1]||''
    }
    if(parseInt(parteProduto) in listaObsTratada[1]){
        textareaModalAcabamento.value = listaObsTratada[1][parseInt(parteProduto)].split('-')[1]||''
    }
    
   
    console.log(listadeEdicao)
}
function salvaTabAtual(parteProduto,listaObsEditada){
    if(typeof(textareaModalItemParte.value) !== undefined){
        listaObsEditada[0][parseInt(parteProduto)] = `${encontraItemPartePorParte(currentModalTabOption)}-${textareaModalItemParte.value}`
    }
    if(typeof(textareaModalAcabamento.value) !== undefined){
        listaObsEditada[1][parseInt(parteProduto)] = `${encontraAcabamentoPorParte(currentModalTabOption)}-${textareaModalAcabamento.value}`
    }
    
    
    if(ready){
        editModdeling()
    }
}








function validaObsModelagem(listaObs){
    let retorno = true
    console.log(listaItensAcabamentosSelecionados)
    Object.keys(listaObs[0]).map((key) => {
        if(parseInt(listaObs[0][key].split('-')[0]) !== encontraItemPartePorParte(key)){
            console.log(verificaItemParteNenhum(encontraItemPartePorParte(key)))
            if(verificaItemParteNenhum(encontraItemPartePorParte(key))){
                
                delete listaObsItemOs[0][key] 
                delete listaObsItemOs[1][key] 
            }else{
                openComplemetsModal(key, parseInt(listaObs[0][key].split('-')[0]))
                openToast("CONFIRME SE AS OBSERVAÇÕES DE "+encontraPartePorId(key).descParteProduto+" ESTÃO VALIDAS",'error')
                retorno =  false
            }
        }
    });
    if(!retorno){
        return retorno
    }
    console.log("MEIO:",listaObs)
    Object.keys(listaObs[1]).map((key) => {
        if(parseInt(listaObs[1][key].split('-')[0]) !== encontraAcabamentoPorParte(key)){
                if(verificaItemParteNenhum(encontraItemPartePorParte(key))){
                    delete listaObsItemOs[0][key] 
                    delete listaObsItemOs[1][key] 
                }else{
                    openComplemetsModal(key,'',parseInt(listaObs[1][key].split('-')[0]))
                    openToast("CONFIRME SE AS OBSERVAÇÕES DE "+encontraPartePorId(key).descParteProduto+" ESTÃO VALIDAS",'error')
                    retorno =  false
                }
                
            
        }
    });
    console.log("ret",retorno)
    return retorno
}

function criaCopiaDeEdicao(lista){
    let retorno = []
    for(i=0;i<lista.length;i++)
    {
        retorno.push(JSON.parse(JSON.stringify(lista[i])))
    }
    return retorno
}


function trataDadosObs(arrayItemParteOBS,arrayAcabamentosOBS){
    const retornoItensPartes = {}
    const retornoAcabamento = {}
    for(obs=0;obs< arrayItemParteOBS.length;obs++){

        itemObs = arrayItemParteOBS[obs].split('-')
        itemObs.push(parseInt(itemObs[0]))
        itemObs[0] = parseInt(encontraItemPartePorId(parseInt(itemObs[0])).codigoParteProduto)
        retornoItensPartes[itemObs[0]] = [itemObs[2],itemObs[1]].join('-')

    }
    for(obs=0;obs< arrayAcabamentosOBS.length;obs++){

        acabamentoObs = arrayAcabamentosOBS[obs].split('-')
        acabamentoObs.push(parseInt(acabamentoObs[0]))
        acabamentoObs[0] = parseInt(encontraAcabamentoPorId(parseInt(acabamentoObs[0])).codigoParteProduto)
        retornoAcabamento[acabamentoObs[0]] = [acabamentoObs[2],acabamentoObs[1]].join('-')

    }
    return [retornoItensPartes, retornoAcabamento]
}
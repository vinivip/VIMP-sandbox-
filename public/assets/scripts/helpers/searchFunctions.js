function verificaDisponibilidadePath(path,alt){
    let urlimg = path
    if(!(listaArquivosDisponiveis.includes(urlimg))){
        urlimg = alt
    }
    return urlimg
}
function encontraListaPartesPorProduto(){
    const partesDoProduto = []
    for(i=0; i<partes.length; i++){
        if (partes[i].codigoProduto == currentProduct){
            partesDoProduto.push(parseInt(partes[i].codigoParteProduto))
        }
    }
    return partesDoProduto
}
function encontraItemPartePorAcabamento(codAcabamento){
    const objAcabamento = encontraAcabamentoPorId(codAcabamento)
    for(i=0; i< listaItensPartesSelecionados.length; i++){
        let itemParte = encontraItemPartePorId(listaItensPartesSelecionados[i])
        if (objAcabamento.codigoParteProduto == itemParte.codigoParteProduto){
            return listaItensPartesSelecionados[i]
        }   
    }
}

function encontraItemPartePorParte(codParte,listaBusca=listaItensPartesSelecionados){
    for(i=0; i< listaBusca.length; i++){
       
            let itemParte = encontraItemPartePorId(listaBusca[i])
        if (codParte == itemParte.codigoParteProduto){
            return listaBusca[i]
            }
       }
    
}
function encontraAcabamentoPorParte(codParte,listaBusca=listaItensAcabamentosSelecionados){
    for(i=0; i< listaBusca.length; i++){
        if (listaBusca[i] !== 0 ){
        let acabamento = encontraAcabamentoPorId(listaBusca[i])
        if (codParte == acabamento.codigoParteProduto){
            return listaBusca[i]
        }
        }
    }
    return false
}
function encontraAcabamentoPorId(codAcabamento) {
    return acabamentos.find(item => item.codigoAcabamento === codAcabamento.toString());
}

function encontraItemPartePorId(codItemParte) {
    return itensPartes.find(item => item.codigoItemParteProduto === codItemParte.toString());
}

function encontraPartePorId(codParte) {
    return partes.find(item => item.codigoParteProduto === codParte.toString());
}
function retornaListaPartesConcluidas(){
    const retorno = []
    for(a = 0; a<listaItensAcabamentosSelecionados.length; a++){
        
        if(listaItensAcabamentosSelecionados[a] !== 0){
            const acabamento = encontraAcabamentoPorId(listaItensAcabamentosSelecionados[a])
            retorno.push(parseInt(acabamento.codigoParteProduto))
        }
        
    }
    return retorno
}

function verificaItemParteNenhum(idItemParte){

    return encontraItemPartePorId(idItemParte).descItemParteProduto == "NENHUM"

}
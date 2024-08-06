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
function encontraItemPartePorParte(codParte){
    for(i=0; i< listaItensPartesSelecionados.length; i++){
       let itemParte = encontraItemPartePorId(listaItensPartesSelecionados[i])
       if (codParte == itemParte.codigoParteProduto){
           return listaItensPartesSelecionados[i]
        }
    }
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
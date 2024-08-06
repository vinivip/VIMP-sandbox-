function selecionaProduto(codProduto){
    var arrPartes = [];
    for (i=0;i<partes.length;i++){
        if(partes[i].codigoProduto == codProduto){
           arrPartes.push(partes[i].codigoParteProduto);
        }
    }
    return arrPartes;
}

function selecionaParte(codParte){
    var arrPartes = [];
    for (i=0;i<itensPartes.length;i++){
        if(itensPartes[i].codigoParteProduto == codParte){
            arrPartes.push(itensPartes[i].codigoItemParteProduto);
        }
    }
    //inicializa arrOpcoesDisponiveis com os itens da parte-chave 
    if(partesChaves.includes(codParte)){
        //se o item selecionado pertence a uma parte-chave, carrega os novos dados
        arrOpcoesDisponiveis  = [];
        //limpa as op��es dispon�vels para carregar a nova lista de acordo com a nova escolha 
        //adiciona os itens da parte chave, que sempre estar�o dispon�veis
        
        for (i=0;i<itensPartes.length;i++){
            if(itensPartes[i].codigoParteProduto == codParte){
                arrOpcoesDisponiveis.push(parseInt(itensPartes[i].codigoItemParteProduto));
            }
        }
    }
    return arrPartes;
}

function verificaMudancaItensSelecionados(arrSelecionados,arrDisponiveis){ 
    const newArray = [...arrSelecionados]
    const witchElement = arrSelecionados.some(el => {
       if(!arrDisponiveis.includes(el)) {
        
        var objItemParte = encontraItemPartePorId(el);
        newArray.splice(newArray.indexOf(el), 1); //remove o elemento que ficou indispon�vel
        var cont=0;
        arrDisponiveis.some(item => {
            if(encontraItemPartePorId(item).codigoParteProduto == objItemParte.codigoParteProduto && cont==0){
                newArray.push(item);
                cont++
            }
        })
      }
    })
    return [...newArray]
}

function selecionaItemParte(codItemParte){
    //acabamentos parte
    //apaga todos os itens ateriores
   
    var arrAcabamentos = [];
    for(i=0;i<arrRelacionamentosAcabamentos.length;i++){
        var listaAcabamentos = arrRelacionamentosAcabamentos[i].slice();
        listaAcabamentos.shift();
        if (listaAcabamentos.includes(parseInt(codItemParte))){
            var acabamento = encontraAcabamentoPorId(arrRelacionamentosAcabamentos[i][0]);
            arrAcabamentos.push(parseInt(acabamento.codigoAcabamento));
        }
    }
    
    $arrRetornoAcabamentos = arrAcabamentos;
    //carrega os dados do item da parte selecionada
    var objItemParteSelecionada = encontraItemPartePorId(codItemParte);
    if(partesChaves.includes(objItemParteSelecionada.codigoParteProduto)){
        //se o item selecionado pertence a uma parte-chave, carrega os novos dados
        //seleciona as opcoe disponiveis em cada uma das demais partes do produto
        //com base na opcao de corpo selecionada
        var arrItensParte = [];
        for(i=0;i<arrRelacionamentosPartes.length;i++){
            var listaItensParte = arrRelacionamentosPartes[i].slice();
            listaItensParte.shift();
            if (listaItensParte.includes(parseInt(codItemParte))){
                arrItensParte.push(arrRelacionamentosPartes[i][0]);
            }
        }
        //****************************************

        arrOpcoesDisponiveis  = [];
        //limpa as opcoes disponivels para carregar a nova lista de acordo com a nova escolha 
        //adiciona os itens da parte chave, que sempre estar�o dispon�veis
        var parteChave = objItemParteSelecionada.codigoParteProduto;
        for (i=0;i<itensPartes.length;i++){
            if(itensPartes[i].codigoParteProduto == parteChave){
                arrOpcoesDisponiveis.push(parseInt(itensPartes[i].codigoItemParteProduto));
            }
        }
        //carrega a nova lista de itens dispon�veis 
        for (i=0;i<arrItensParte.length;i++){
            arrOpcoesDisponiveis.push(arrItensParte[i]);
        }
    }
}
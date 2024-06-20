var produtos,partes,itensPartes,acabamentos;
var arrRelacionamentosPartes = [];
var arrRelacionamentosAcabamentos = [];
var $arrRetornoAcabamentos = [];
var $arrRetornoItensPartes = [];
var arrOpcoesDisponiveis  = [];
var arrDefault = [];

function carregaListaProdutos(){
    $.ajax({
        timeout: 10000,
        type: "POST", url: "retorna_dados_produtos.php",
        error: function(){
            alert("Falha na conexão...! Tente novamente.");   
        },
        success: function(retorno) {
            var dados = JSON.parse(retorno);
            produtos = dados[0];
            partes = dados[1];
            itensPartes = dados[2];
            acabamentos = dados[3];
            partesChaves = dados[4];

            //console.log(dados);
            console.log(produtos);
            console.log(partes);
            console.log(itensPartes);
            console.log(acabamentos);
            console.log(partesChaves);

            select = document.getElementById("selectProduto");
            for (i=0;i<produtos.length;i++){
                console.log(produtos[i]);
                select.options[select.options.length] = new Option(produtos[i].descProduto, produtos[i].codigoProduto);
            }                
        }			
    });
}
function selecionaProduto(codProduto){
    console.log(codProduto);
    var arrPartes = [];
    for (i=0;i<partes.length;i++){
        if(partes[i].codigoProduto == codProduto){
            //select.options[select.options.length] = new Option(partes[i].descParteProduto, partes[i].codigoParteProduto);
           arrPartes.push(partes[i].codigoParteProduto);
        }
    }
    return arrPartes;
}

function selecionaParte(codParte){
    var arrPartes = [];
    //document.getElementById("divSelectItemParte").innerHTML = '<select id="selectItemParte" onchange="selecionaItemParte(this.value)"></select>';
    //select = document.getElementById("selectItemParte");
    for (i=0;i<itensPartes.length;i++){
        if(itensPartes[i].codigoParteProduto == codParte){
            arrPartes.push(itensPartes[i].codigoItemParteProduto);
            //select.options[select.options.length] = new Option(itensPartes[i].descItemParteProduto, itensPartes[i].codigoItemParteProduto);
        }
    }
    
    //inicializa arrOpcoesDisponiveis com os itens da parte-chave 
    if(partesChaves.includes(codParte)){//se o item selecionado pertence a uma parte-chave, carrega os novos dados
        arrOpcoesDisponiveis  = [];//limpa as opções disponívels para carregar a nova lista de acordo com a nova escolha 
        //adiciona os itens da parte chave, que sempre estarão disponíveis
        for (i=0;i<itensPartes.length;i++){
            if(itensPartes[i].codigoParteProduto == codParte){
                arrOpcoesDisponiveis.push(parseInt(itensPartes[i].codigoItemParteProduto));
            }
        }
    }
    
    console.log(arrOpcoesDisponiveis);
    
    return arrPartes;
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

function verificaMudancaItensSelecionados(arrSelecionados,arrDisponiveis){ 
    const witchElement = arrSelecionados.some(el => {
       if(!arrDisponiveis.includes(el)) {
        console.log("elemento: ", el)
        var objItemParte = encontraItemPartePorId(el);
        arrSelecionados.splice(arrSelecionados.indexOf(el), 1);//remove o elemento que ficou indisponível
        var cont=0;
        arrDisponiveis.some(item => {
            if(encontraItemPartePorId(item).codigoParteProduto == objItemParte.codigoParteProduto && cont==0){
                arrSelecionados.push(item);
                cont++
            }
        })
        console.log(objItemParte);
        console.log(arrSelecionados);
      }
    })
}

function selecionaItemParte(codItemParte){
    //acabamentos parte
    //apaga todos os itens ateriores
    //document.getElementById("divSelectAcabamento").innerHTML = '<select id="selectAcabamento" onchange="selecionaAcabamento(this.value)"></select>';
    //select = document.getElementById("selectAcabamento");
    var arrAcabamentos = [];
    for(i=0;i<arrRelacionamentosAcabamentos.length;i++){
        var listaAcabamentos = arrRelacionamentosAcabamentos[i].slice();
        listaAcabamentos.shift();
        if (listaAcabamentos.includes(parseInt(codItemParte))){
            var acabamento = encontraAcabamentoPorId(arrRelacionamentosAcabamentos[i][0]);
            //select.options[select.options.length] = new Option(acabamento.descAcabamento, acabamento.codigoAcabamento);
            arrAcabamentos.push(parseInt(acabamento.codigoAcabamento));
        }
    }
    
    $arrRetornoAcabamentos = arrAcabamentos;
    
    var objItemParteSelecionada = encontraItemPartePorId(codItemParte);//carrega os dados do item da parte selecionada
    
    
    if(partesChaves.includes(objItemParteSelecionada.codigoParteProduto)){//se o item selecionado pertence a uma parte-chave, carrega os novos dados
        //seleciona as opções disponíveis em cada uma das demais partes do produto
        //com base na opção de corpo selecionada
        var arrItensParte = [];
        for(i=0;i<arrRelacionamentosPartes.length;i++){
            var listaItensParte = arrRelacionamentosPartes[i].slice();
            listaItensParte.shift();
            if (listaItensParte.includes(parseInt(codItemParte))){
                arrItensParte.push(arrRelacionamentosPartes[i][0]);
            }
        }
        //****************************************

        arrOpcoesDisponiveis  = [];//limpa as opções disponívels para carregar a nova lista de acordo com a nova escolha 
        //adiciona os itens da parte chave, que sempre estarão disponíveis
        var parteChave = objItemParteSelecionada.codigoParteProduto;
        for (i=0;i<itensPartes.length;i++){
            if(itensPartes[i].codigoParteProduto == parteChave){
                //arrOpcoesDisponiveis.push([parseInt(parteChave),parseInt(itensPartes[i].codigoItemParteProduto)]);
                arrOpcoesDisponiveis.push(parseInt(itensPartes[i].codigoItemParteProduto));
            }
        }
        
        //carrega a nova lista de itens disponíveis 
        for (i=0;i<arrItensParte.length;i++){
            //var itemParte = encontraItemPartePorId(arrItensParte[i]);
            //console.log(itemParte);
            //var objParte = encontraPartePorId(itemParte.codigoParteProduto);
            //console.log(encontraPartePorId(itemParte.codigoParteProduto));
            //var arrParParteOpcao = [parseInt(objParte.codigoParteProduto),arrItensParte[i]];
            //arrOpcoesDisponiveis.push(arrParParteOpcao);
            arrOpcoesDisponiveis.push(arrItensParte[i]);
        }
    }

    //console.log("ArrayAcabamentos: ",$arrRetornoAcabamentos);
    //console.log("ArrayOpcoesDisponiveis: ",arrOpcoesDisponiveis);
    //listaOpcoesPartes(arrOpcoesDisponiveis);
}

function selecionaAcabamento(codAcabamento){
    console.log(codAcabamento);
}

/*function listaOpcoesPartes(arrOpcoes){
    var indiceAtual = 0;
    //var txt = "";
    for(i=0;i<arrOpcoes.length;i++){
        var codParte = arrOpcoes[i][0];
        var codTipoParte = arrOpcoes[i][1];
        if(indiceAtual != codParte){
            indiceAtual = codParte;
            var objParte = encontraPartePorId(codParte);
            //txt += '<br><br>'+objParte.descParteProduto+'<br>';
            console.log(objParte.descParteProduto);
            //console.log("txt: ",txt);
        }
        var objTipoParte = encontraItemPartePorId(codTipoParte);
        console.log(objTipoParte.descItemParteProduto);
        //txt += objTipoParte.descItemParteProduto+' | ';
    }
    
    //document.getElementById('complemento').innerHTML = txt;
} */
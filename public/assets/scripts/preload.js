// Document selectors
var navParts = document.getElementById('navParts')
var selectOS = document.getElementById('changeItem')
var typePart = document.getElementById('typeContent')
var selectAcabamentos =  document.getElementById('SelectAcabamentos')

// Exceções de exeptions

// var exceptions = {
//     '21-8':'21(raeglan)',
//     '22-8':'22(raeglan)',
//     '21-1':'21(raeglan)',
//     '22-1':'22(raeglan)',
// }

// Valores default (temporarios)
var currentProduct 
var currentPart 
var currentCore 
var currentItem 
var currentAcabamento
var currentEnabled=[]



// Arrays itens, partes e produtos
var produtos 
var partes 
var itensPartes 
var acabamentos 
var partesChaves 


//Input OS
var arrListaItensPartesSelecionados = []
var arrListaItensAcabamentosSelecionados = [[5,106,105,23,26,77],[],[],[],[],[],[],[]]
var arrConfigExibCostas = []
var listaItensPartesSelecionados = []
var listaItensAcabamentosSelecionados = []
var itensOS =[]



async function preload(){  
    const response = await fetch("https://www.vipsportsproducao.com.br/vimp/retorna_dados_produtos.php")
    
    const data = await response.json()

    produtos = await data[0];
    partes = await data[1];
    itensPartes = await data[2];
    //console.log("teste",itensPartes)
    acabamentos = await data[3];
    partesChaves = await data[4];
    

    //*************************************************************** */
    //APAGAR QUANDO FOR PARA PRODUÇÂO
    //Inicializa lista de itens da OS (deverá ser subitituido pelos itens da OS verdadeiros)
    var modelagem = [
        [], 
        [3, 83, 22, 15, 81, 82],
        [2, 83, 22, 15, 81, 82],
        [9, 83, 22, 15, 81, 82],
        [3, 83, 80, 15, 81, 82],
        [3, 83, 21, 15, 81, 82],
        [3, 83, 22, 19, 81, 82],
        [3, 83, 22, 18, 81, 82]
    ]
    for (i in produtos){ 
        itensOS = [...itensOS,
            {
                codigoProduto: produtos[0].codigoProduto, 
                descProduto: produtos[i].descProduto,
                descItem: `descrição-${produtos[i].descProduto}`,
                modelagem: modelagem[i]
            }
        ]
    }

//********************************************************************* */



    for(i = 0; i< itensOS.length;i++){
        arrListaItensPartesSelecionados.push(itensOS[i].modelagem)
    }

    app()
}
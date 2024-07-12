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
var arrListaItensPartesSelecionados = [[8,23,18,81,82,83],[],[],[59,63],[],[],[]]
var arrListaItensAcabamentosSelecionados = [[],[],[],[],[],[],[]]
var arrConfigExibCostas = []
var listaItensPartesSelecionados = []
var itensOS =[]

async function preload(){  
    const response = await fetch("https://www.vipsportsproducao.com.br/vimp/retorna_dados_produtos.php")
    const data = await response.json()

    produtos = await data[0];
    partes = await data[1];
    itensPartes = await data[2];
    acabamentos = await data[3];
    partesChaves = await data[4];
    
    
    for (i in produtos){ 
        itensOS = [...itensOS,
            {
                codigoProduto: produtos[i].codigoProduto, 
                descProduto: produtos[i].descProduto,
                descItem: `descrição-${produtos[i].descProduto}` 
            }
        ]
        
        
    }
    
    app()
}
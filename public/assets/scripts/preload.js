// Document selectors
var navParts = document.getElementById('navParts')
var selectOS = document.getElementById('changeItem')
var typePart = document.getElementById('typeContent')
var selectAcabamentos =  document.getElementById('SelectAcabamentos')
var saveButton = document.getElementById('sideMenuSave')
var tagsList = document.getElementById('selectionTags')
var mensagesLog = document.getElementById('mensagesLog')
var selectSetores = document.getElementById('selectAreaSelects')

// Valores default 
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
var setores 


//Input OS
var arrListaItensPartesSelecionados = []
var arrListaItensAcabamentosSelecionados = []
var arrListaComentariosSetor = []
var arrConfigExibCostas = []
var listaItensPartesSelecionados = []
var listaItensAcabamentosSelecionados = []
var itensOS =[]

//Global States
var editing = true
var ready = false
var listaComentariosSetor = []
var produtosImplementados = [1]


async function preload(){  
    const response = await fetch("https://www.vipsportsproducao.com.br/vimp/retorna_dados_produtos.php")
    
    const data = await response.json()

    produtos = await data[0];
    partes = await data[1];
    itensPartes = await data[2];
    acabamentos = await data[3];
    partesChaves = await data[4];
    setores = await data[5]


    // CARREGA LISTA DE ITENS DA OS

    const osJson = await fetch("assets/scripts/OS.json")
    const dataOS = await osJson.json()
    for (i=0;i < dataOS.idItem.length;i++){ 
        itensOS = [...itensOS,
            {
                codigoProduto: await dataOS.codigoProduto[i], 
                descProduto: await dataOS.descItem[i],
                modelagem: await dataOS.modelagem[i],
                acabamentos: await dataOS.acabamentos[i],
                sectorComments: await dataOS.obsSetores[i]
            }
        ]
    }
    
//********************************************************************* */

    for(i = 0; i< itensOS.length;i++){
        arrListaItensPartesSelecionados.push(itensOS[i].modelagem)
        arrListaItensAcabamentosSelecionados.push(itensOS[i].acabamentos)
        arrListaComentariosSetor.push(itensOS[i].sectorComments)
    }
    
    app()
    
}
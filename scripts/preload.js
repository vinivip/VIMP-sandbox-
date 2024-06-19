// Document selectors
var navParts = document.getElementById('navParts')
var selectOS = document.getElementById('changeItem')
var typePart = document.getElementById('typeContent')

// Lista de icones disponiveis



// Valores default (temporarios)
var currentProduct 
var currentPart 
var currentCore 
var currentItem 
var currentEnabled=[]

// Arrays itens, partes e produtos
var produtos 
var partes 
var itensPartes 
var acabamentos 
var partesChaves 

//Input OS
var arrListaItensPartesSelecionados = [[],[],[],[59,63],[],[],[]]
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
// Document selectors
var navParts = document.getElementById('navParts')
var selectOS = document.getElementById('changeItem')
var typePart = document.getElementById('typeContent')
var selectAcabamentos =  document.getElementById('SelectAcabamentos')
var saveButton = document.getElementById('sideMenuSave')
var tagsList = document.getElementById('selectionTags')
var mensagesLog = document.getElementById('mensagesLog')
var selectSetores = document.getElementById('selectAreaSelects')

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

    codeToMensages = (lSetores)=>{
        let arrSetores = []
        for(m = 0; m < lSetores.length; m++){
            if(findSector(lSetores[m])){
                arrSetores.push(findSector(lSetores[m]))
            }
            
        }
        console.log(arrSetores)
        return arrSetores
    }
    findSector = (codigoSetor)=>{
        for (i=0;i < setores.length;i++){
            if(setores[i].codigoSetor == codigoSetor){
                return setores[i].descSetor
            }
        }
    }

   
    

    //*************************************************************** */
    //APAGAR QUANDO FOR PARA PRODUÇÂO
    //Inicializa lista de itens da OS (deverá ser subitituido pelos itens da OS verdadeiros)
    // var listaProduto= [
    //     1, 
    //     2,
    //     1,
    //     1,
    //     1,
    //     1,
    //     1,
    //     1
    // ]
    // var modelagem = [
    //     [], 
    //     [30, 35, 36, 41, 43, 71],
    //     [3, 83, 22, 15, 81, 82],
    //     [9, 83, 22, 15, 81, 82],
    //     [3, 83, 80, 15, 81, 82],
    //     [3, 83, 21, 15, 81, 82],
    //     [3, 83, 22, 19, 81, 82],
    //     [3, 83, 22, 18, 81, 82]
    // ]
    // var listaAcabamentosOS = [
    //     [], 
    //     [16, 10, 111, 77, 112, 5],
    //     [16, 10, 111, 77, 112, 5],
    //     [16, 10, 111, 77, 112, 5],
    //     [16, 10, 111, 77, 112, 5],
    //     [16, 10, 111, 77, 112, 5],
    //     [16, 10, 111, 77, 112, 5],
    //     [16, 10, 111, 77, 112, 5]
    // ]
    // var listaCommentsOS = [
    //     [], 
    //     [],
    //     [],
    //     [],
    //     [],
    //     [],
    //     [],
    //     []
    // ]

    const osCrua = await fetch("assets/scripts/OS.json")
    const dataOS = await osCrua.json()
    console.log("itens os",dataOS)
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

console.log("itens os: ",itensOS)

    for(i = 0; i< itensOS.length;i++){
        arrListaItensPartesSelecionados.push(itensOS[i].modelagem)
        arrListaItensAcabamentosSelecionados.push(itensOS[i].acabamentos)
        arrListaComentariosSetor.push(itensOS[i].sectorComments)
    }

    app()
    
}

var navParts = document.getElementById('navParts')
var selectOS = document.getElementById('changeItem')
var typePart = document.getElementById('typeContent')

var partesChaves = []

var produtos = []
var partes = []
var itensPartes = []
var acabamentos = []

var itensOS = []
var listaItensPartesSelecionados = []
var arrListaItensPartesSelecionados = []


var currentProduct = 1
var currentPart = 1
var currentCore = 3
var currentItem = 1



function runing()
{
    
     
}
function useSelect()
{
    $(`.np-active`).removeClass('np-active')
    $(`.prod${currentProduct}`).hide();
    $(`.part${currentPart}`).hide();
    currentProduct = this.value
    listaItensPartesSelecionados = arrListaItensPartesSelecionados[$("#changeItem").prop('selectedIndex')]
    console.log(listaItensPartesSelecionados)
    currentPart = selecionaProduto(currentProduct)[0]
    
    $('.partTitle').text(encontraPartePorId(parseInt(currentPart)).descParteProduto)
    // typePartsRender(itensPartes,typePart)
    // navPartsRender(partes,navParts);
    $(`.prod${currentProduct}`).fadeIn(1000);
    $(`.part${currentPart}`).fadeIn(1000);
    
    $(`li#${currentPart}`).addClass('np-active')
    $(`li#${currentPart} img`).attr('src',`assets/icons/icon_${currentPart}_branco.webp`)

}


async function app(){
    const response = await fetch("https://www.vipsportsproducao.com.br/vimp/retorna_dados_produtos.php")
    const data = await response.json()

    produtos = await data[0];
    partes = await data[1];
    itensPartes = await data[2];
    acabamentos = await data[3];
    partesChaves = await data[4];
    
    arrListaItensPartesSelecionados = [[3,15,22,81,82,83],[],[],[],[],[],[]]
   

    for (i in produtos){ 
        itensOS = [...itensOS,
            {
                codigoProduto: produtos[i].codigoProduto, 
                descProduto: produtos[i].descProduto,
                descItem: `descrição-${produtos[i].descProduto}` 
            }
        ]
        
        
    }
    
    $('#partTitle').text(partes[0].descParteProduto)
    
    
    build()
    
    currentProduct = itensOS[0].codigoProduto
    currentPart = itensOS[0].codigoProduto
    $(`.prod${currentProduct}`).show()
    $(`.part${currentPart}`).show()
    
    runing()
}




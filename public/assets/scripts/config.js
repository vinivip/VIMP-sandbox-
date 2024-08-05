// Document selectors
var navParts = document.getElementById('navParts')
var selectOS = document.getElementById('changeItem')
var typePart = document.getElementById('typeContent')
var selectAcabamentos =  document.getElementById('SelectAcabamentos')
var saveButton = document.getElementById('sideMenuSave')
var tagsList = document.getElementById('selectionTags')
var mensagesLog = document.getElementById('mensagesLog')
var selectSetores = document.getElementById('selectAreaSelects')

// Valores default (temporarios)
var currentProduct 
var currentPart 
var currentItemParteChave 
var currentItem 
var currentAcabamento
var currentEnabled = []

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
var itensOS = []

//Global States
var msg = ''
var editing = true
var ready = false
var listaComentariosSetor = []
var produtosImplementados = [1] // Define os produtos que estão disponíveis para modelagem
var refDisponiveis = []
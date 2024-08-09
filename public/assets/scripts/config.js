// Document selectors
var navParts = document.getElementById('navParts')
var selectOS = document.getElementById('changeItem')
var typePart = document.getElementById('typeContent')
var selectAcabamentos =  document.getElementById('SelectAcabamentos')
var saveButton = document.getElementById('sideMenuSave')
var tagsList = document.getElementById('selectionTags')
var mensagesLog = document.getElementById('mensagesLog')
var selectSetores = document.getElementById('selectAreaSelects')
var modalTabs = document.getElementById('modalTabs')
var textareaModalItemParte = document.getElementById("inputObsModalItemPartes");
var textareaModalAcabamento = document.getElementById("inputObsModalAcabamento");
// Valores default (temporarios)
var currentProduct 
var currentPart 
var currentItemParteChave 
var currentItem 
var currentAcabamento
var currentEnabled = []
var currentModalTabOption

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
var arrObsItemParte = []
var arrObsAcabamento = []
var arrConfigExibCostas = []
var listaItensPartesSelecionados = []
var listaItensAcabamentosSelecionados = []
var itensOS = []

//item da OS
var listaObsItemOs = []
var listadeEdicao


//Global States
var msg = ''
var editing = true
var ready = false
var produtosImplementados = [1] // Define os produtos que estão disponíveis para modelagem



//lib hierarquia
var produtos,partes,itensPartes,acabamentos;
var arrRelacionamentosPartes = [];
var arrRelacionamentosAcabamentos = [];
var $arrRetornoAcabamentos = [];
var $arrRetornoItensPartes = [];
var arrOpcoesDisponiveis  = [];
var arrDefault = [];
var arrAcabamentoDefault = [];
var arrExibicaoApenasCostas = [];//lista de itens das parte que ser�o exibidos apenas nas costas
var ordemCamadasPorParte = [];//array para ordenar a camada em que cada item ser� exibido.
var objSubRelacionamentos = []; //array para subrelacionamentos entre partes (ex. Manga/Cava)
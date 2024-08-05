async function preload(){      
    await fetchGeneralData()
    await fetchItensOs()
    build() 
}
function build(){
    rendSelectItensOs(itensOS,selectOS);
    rendPartesOptions(partes,navParts);
    rendItemParteMins(itensPartes,typePart);
    rendTagsList(itensPartes,tagsList)
    rendSelectSetores(setores, selectSetores)
    app() 
}
function app()
{   
    useSelect() 
}



function saveModdeling()
{  
        if(verificaPendenciaModelagem()){
                $('#descSelectOS').off()
                $('.descSelectOS').hide()
                $('#descSelectOS').off()
                $('#changeItem').fadeIn()
                editing = false
                saveButton.disabled = true
                openToastS("MODELAGEM SALVA COM SUCESSO!")
                return
        }
        openToast("VOCÊ POSSUI ACABAMENTOS NÃO DEFINIDOS")
            
}
function editModdeling()
{
    if(!editing){
        $('#changeItem').hide()
        $('#descSelectOS').html($("#changeItem option:selected").text()+' (editando)');
        $('.descSelectOS').fadeIn()
        $('#descSelectOS').on('click',()=>{       
            openToast("VOCÊ DEVE SALVAR A MODELAGEM ANTES DE IR PARA OUTRO ITEM DA OS")
        })

    editing = true
    saveButton.disabled = false
    }
}







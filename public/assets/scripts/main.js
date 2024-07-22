async function app(){   
   
    build()
    useSelect()
    
}

function saveModdeling(){
    
        if(verificaPendenciaModelagem()){
                $('#descSelectOS').off()
                $('.descSelectOS').hide()
                $('#descSelectOS').off()
                $('#changeItem').fadeIn()
                editing = false
                saveButton.disabled = true
                return
        }
        openToast("VOCÊ POSSUI ACABAMENTOS NÃO DEFINIDOS")
        // editModdeling()
        


    
}
function editModdeling(){

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

var msg = ''
function openToast(Mensage){
    
    if(msg){
        console.log(msg)
        clearTimeout(msg)
        closeToast()
    }

    $('#toast').html(Mensage)

    $('.toastNoSavedWarning').animate({
        "right": "+=1005px"
    },'fast')
    msg = setTimeout(closeToast, 5000)
    return 
}
function closeToast(){
    $('.toastNoSavedWarning').animate({
        "top": "-=205px",
    },'fast')
    $('.toastNoSavedWarning').animate({
        "top": "+=205px",
        "right": "-=1005px",
    },'fast')
    msg = ''
}





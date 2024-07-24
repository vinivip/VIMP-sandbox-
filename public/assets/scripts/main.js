async function app(){   
    console.log(setores)
    build()
    useSelect()

    $("#sendButton").on('click',e=>{
        e.preventDefault() 
        let sel = document.getElementById('selectArea')
        const mensagem = [viewChecked().join(' | ')]
        mensagem.push($('#Comment').val())
        mensagens.push(mensagem.join(' - '))
        loadMensages()
        console.log(mensagens)
    }
   )
   $("#buttonCommentSector").on('click',e=>{
    e.preventDefault() 
    $("#selectArea").fadeIn()
   })
   $('#selectArea').on('mouseleave',()=>{
        $("#selectArea").fadeOut()
   })
}

function viewChecked(){
    const selectedSetores = []
    const setores = document.getElementsByClassName("chkSetor")
    for(i=0;i<setores.length;i++){
        if(setores[i].checked){
            selectedSetores.push(setores[i].name)

        }
    }
    return selectedSetores
}


function saveModdeling(){
    
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

function openToastS(Mensage){
    
    if(msg){
        clearTimeout(msg)
        closeToastS()
    }

    $('#toasts').html(Mensage)

    $('.toastSavedWarning').animate({
        "right": "+=1005px"
    },'fast')
    msg = setTimeout(closeToastS, 5000)
    return 
}
function closeToastS(){
    $('.toastSavedWarning').animate({
        "top": "-=205px",
    },'fast')
    $('.toastSavedWarning').animate({
        "top": "+=205px",
        "right": "-=1005px",
    },'fast')
    msg = ''
}



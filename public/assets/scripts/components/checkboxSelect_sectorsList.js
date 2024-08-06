function viewChecked(){
    const selectedSetores = []
    const setores = document.getElementsByClassName("chkSetor")
    for(i=0;i<setores.length;i++){
        if(setores[i].checked){
            selectedSetores.push(setores[i].name)
        }   
    }
    
    if(selectedSetores.length == 0 ){
        return 
    }
    let retorno = selectedSetores.join()

    return retorno

}

function rendSelectSetores(lista, element){

    lista.map(setor=>{

        element.innerHTML += `<label for="${setor.codigoSetor}"><input class="chkSetor" id="${setor.codigoSetor}" name="${setor.codigoSetor}" type="checkbox">${setor.descSetor}</label>`

    })

    $("#sendButton").on('click',e=>{
        e.preventDefault() 
        editModdeling()
        
        let setores = viewChecked()
        let mensagem = $('#Comment').val()
        //console.log(mensagem.trim().length)
        //console.log(setores)
        if(setores){
            if(mensagem.trim().length){
                
                listaComentariosSetor.push(setores+'-'+mensagem.trim())
                rendItensMensages()
            }else{
                openToast("VOCÊ DEVE ESCREVER ALGUMA MENSAGEM PARA ENVIAR UMA OBSERVAÇÃO")
             
            }
        }else{
               openToast("VOCÊ DEVE SELECIONAR AOMENOS UM SETOR PARA ENVIAR UMA OBSERVAÇÃO")
        }
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
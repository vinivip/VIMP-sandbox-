async function app(){   
   
    build()
    useSelect()
    
}

function saveModdeling(){
    if(editing){
            $('#descSelectOS').off()
            
            // $('.descSelectOS').removeClass('editing')
            $('.descSelectOS').hide()
            $('#descSelectOS').off()
            $('#changeItem').fadeIn()
    }

    editing = false
    saveButton.disabled = true
    //console.log(editing)
    
}


function closeEditingWarning(){
    $('.toastNoSavedWarning').animate({
        "top": "-=205px",
    },'fast')
    $('.toastNoSavedWarning').animate({
        "top": "+=205px",
        "right": "-=1005px",
    },'fast')
}
function editModdeling(){

    

    if(!editing){
        $('#changeItem').hide()
        $('#descSelectOS').html($("#changeItem option:selected").text()+' (editando)');
        // $('.descSelectOS').addClass('editing')
        $('.descSelectOS').fadeIn()
        
        $('#descSelectOS').on('click',()=>{
            // $('.toastNoSavedWarning').animate({
            //     "top": "+=205px",
            // },'fast')
            $('.toastNoSavedWarning').animate({
                "right": "+=1005px",
            },'fast')
            $('.toastNoSavedWarning').animate({
                "right": "+=0px",
            },5000)
            closeEditingWarning()
            //console.log('teste')
        })

        editing = true
        // selectOS.disabled = true
        // $('#changeItem').attr("readonly", 'readonly')
        // $('#changeItem').attr("tabindex", '-1')
        saveButton.disabled = false
        //console.log(editing)
    }

}


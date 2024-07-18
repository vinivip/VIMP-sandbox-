async function app(){   
   
    build()
    useSelect()
    
}

function saveModdeling(){
    if(editing){
            $('.nav-os').off()
            $('.toastNoSavedWarning').slideUp()
    }

    editing = false
    saveButton.disabled = true
    
    // selectOS.disabled = false
    selectOS.attr("readonly", 'disabled')
    console.log(editing)
    
}
function editModdeling(){

    

    if(!editing){
        $('#descSelectOS').html($("#changeItem option:selected").text());
        $('#descSelectOS').click(()=>{$('.toastNoSavedWarning').fadeIn()})

        editing = true
        // selectOS.disabled = true
        $('#changeItem').attr("readonly", 'readonly')
        $('#changeItem').attr("tabindex", '-1')
        saveButton.disabled = false
        console.log(editing)
    }

}


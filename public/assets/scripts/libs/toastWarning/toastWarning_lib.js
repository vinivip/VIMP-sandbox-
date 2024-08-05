function openToast(Mensage)
{
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
function closeToast()
{
    $('.toastNoSavedWarning').animate({
        "top": "-=205px",
    },'fast')
    $('.toastNoSavedWarning').animate({
        "top": "+=205px",
        "right": "-=1005px",
    },'fast')
    msg = ''
}

function openToastS(Mensage)
{
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

function closeToastS()
{
    $('.toastSavedWarning').animate({
        "top": "-=205px",
    },'fast')
    $('.toastSavedWarning').animate({
        "top": "+=205px",
        "right": "-=1005px",
    },'fast')
    msg = ''
}

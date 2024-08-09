function openToast(Mensage, type = 'error'){
    if(msg){
        clearTimeout(msg)
        closeToast()
    }
    $('#toast').html(Mensage)
    $('.toastIcon').html(type)
    $('.toastWarning').addClass(type)
    $('.toastWarning').animate({
        "right": "+=1005px"
    },'fast')
    msg = setTimeout(()=>closeToast(type), 5000)
    function closeToast(type){
    $('.toastWarning').animate({
        "top": "-=205px",
    },'fast')
    $('.toastWarning').animate({
        "top": "+=205px",
        "right": "-=1005px",
    },'fast')
    $('.toastWarning').removeClass(type)
    msg = ''
}
    
    
    return 
}

function buildModals(){
    angar.innerHTML += `
    <div class="toastWarning"> 
        <div class="toastContent">
            <span  class="material-symbols-outlined toastIcon">error</span>
            <p id="toast"></p>
        </div>
    </div>
    
    `
    angar.innerHTML +=`
         <section class="modalBackdrop">
            <div class="modalAlign">
                <div class="confirmModal"> 
                <h1 class="material-symbols-outlined confirmModalIcon">
                check_circle
                </h1>
                <p class="confirmModalDesc">
                    Deseja Continuar
                </p>
                <div class = "confirmModalButtonsContainer">
                <button class="confirmModalButton">sim</button>
                <button class="confirmModalButton">não</button>
                </div>
            </div>
            </div>
         </section>
    `
}

const angar = document.getElementsByClassName('modalsAngar')[0]
buildModals()
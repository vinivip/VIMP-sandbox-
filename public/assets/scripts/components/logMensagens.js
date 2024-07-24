function loadMensages(){
    mensagesLog.innerHTML = ''
    mensagens.map(mensagem =>{
        let msg = mensagem.split("-")
        mensagesLog.innerHTML += `
        <li class="sectorMensage">
                <span class="setoresMsg">${msg[0]}</span>
                <p class="mensageMsg">${msg[1]}</p>          
        </li>
        `
        
        
       
    })
}
function rendSelectSetores(lista, element){

    lista.map(setor=>{

        element.innerHTML += `<label for="${setor.codigoSetor}"><input class="chkSetor" id="${setor.codigoSetor}" name="${setor.descSetor}" type="checkbox">${setor.descSetor}</label>`

    })

}
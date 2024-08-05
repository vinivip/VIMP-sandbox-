function deleteComment(idMsg){
    if(ready){
        editModdeling()
    }
    listaComentariosSetor.splice(idMsg, 1)
    rendItensMensages()

}
codeToMensages = (lSetores)=>{
    let arrSetores = []
    for(m = 0; m < lSetores.length; m++){
        if(findSector(lSetores[m])){
            arrSetores.push(findSector(lSetores[m]))
        }
        
    }
    return arrSetores
}
findSector = (codigoSetor)=>{
    for (i=0;i < setores.length;i++){
        if(setores[i].codigoSetor == codigoSetor){
            return setores[i].descSetor
        }
    }
}

function rendItensMensages(){
    mensagesLog.innerHTML = ''
    listaComentariosSetor.map((mensagem,index) =>{
        let msg = mensagem.split("-")
        mensagesLog.innerHTML += `
        <li class="sectorMensage">
                <span class="setoresMsg">${codeToMensages(msg[0]).join(" | ")}</span>
                <div class="mensageMsgContainer">
                    <p class="mensageMsg">
                        ${msg[1]}
                    </p> 
                    <button onclick="deleteComment(${index})" class="material-symbols-outlined">
                        delete
                    </button>
                </div>
        </li>
        `
    })
}
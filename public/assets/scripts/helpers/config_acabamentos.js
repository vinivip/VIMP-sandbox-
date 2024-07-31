var rel_modelo_acabamento = {
    "17":"1",
    "20":"1",
    "21":"1",
    "22":"1",
    "46":"1",
}

var rel_tipo_item_parte = {
    "22": "1",
    "23": "1",
    "21": "2",
    "86": "2"
}

function retornaCaminhoModelo(codAcabamento)
{

    if(rel_modelo_acabamento.keys().includes(codAcabamento)){
       return `${rel_modelo_acabamento[codAcabamento]}.${rel_tipo_item_parte[currentItem]}` 
    }
    
    return codAcabamento



}
async function fetchGeneralData() {
    
    const response = await fetch("https://www.vipsportsproducao.com.br/vimp/retorna_dados_produtos.php")
    const data = await response.json()

    produtos = await data[0];
    partes = await data[1];
    itensPartes = await data[2];
    acabamentos = await data[3];
    partesChaves = await data[4];
    setores = await data[5]

    return await setores
    
}

async function fetchItensOs() {
    const osCrua = await fetch("../data_files/OS.json")
    const dataOS = await osCrua.json()
    for (i=0;i < dataOS.idItem.length;i++){ 
        itensOS = [...itensOS,
            {
                codigoProduto: await dataOS.codigoProduto[i], 
                descProduto: await dataOS.descItem[i],
                modelagem: await dataOS.modelagem[i],
                acabamentos: await dataOS.acabamentos[i],
                sectorComments: await dataOS.obsSetores[i],
                obsItemParte: await dataOS.obsItemParte[i],
                obsAcabamento: await dataOS.obsAcabamento[i]
            }
        ]
    }
    for(i = 0; i< itensOS.length;i++){
        arrListaItensPartesSelecionados.push(itensOS[i].modelagem)
        arrListaItensAcabamentosSelecionados.push(itensOS[i].acabamentos)
        arrListaComentariosSetor.push(itensOS[i].sectorComments)
        arrObsItemParte.push(itensOS[i].obsItemParte)
        arrObsAcabamento.push(itensOS[i].obsAcabamento)
    }

    return await itensOS
    
}
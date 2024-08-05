
ordemCamadasPorParte['1']=0;
ordemCamadasPorParte['20']=1;
ordemCamadasPorParte['3']=2;
ordemCamadasPorParte['2']=3;
ordemCamadasPorParte['4']=4;
ordemCamadasPorParte['5']=5;

//PRODUTO
var cod_camisa = 1;

//PARTES
var camisa_corpo = 1;
var camisa_pescoco = 2;
var camisa_manga = 3;
var camisa_bolso_frente = 4;
var camisa_bolso_costas = 5;
var camisa_cava = 20;

//TIPO PARTES
//CAMISA CORPO
var camisa_corpo_baby_look = 2;
var camisa_corpo_machao = 6;
var camisa_corpo_normal = 3;
var camisa_corpo_raglan = 8;
var camisa_corpo_raglan_bl = 1;
var camisa_corpo_recorte_de_tecido = 9;
var camisa_corpo_regata = 5;
var camisa_corpo_colete = 4;
var camisa_corpo_polo = 10;
var camisa_corpo_avental = 45;

//CAMISA MANGA
var camisa_manga_nenhuma = 80;
var camisa_manga_longa = 21;
var camisa_manga_curta = 22;
var camisa_manga_raglan_curta = 23;
var camisa_manga_raglan_longa = 86;

var arrMangaNenhuma = [camisa_manga_nenhuma,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_recorte_de_tecido,camisa_corpo_regata,camisa_corpo_colete,camisa_corpo_avental,];
var arrMangaCurta = [camisa_manga_curta,camisa_corpo_baby_look,camisa_corpo_normal,camisa_corpo_polo,camisa_corpo_recorte_de_tecido];
var arrMangaLonga = [camisa_manga_longa,camisa_corpo_baby_look,camisa_corpo_normal,camisa_corpo_polo,camisa_corpo_recorte_de_tecido];
var arrMangaRaglanCurta = [camisa_manga_raglan_curta,camisa_corpo_raglan,camisa_corpo_raglan_bl];
var arrMangaRaglanLonga = [camisa_manga_raglan_longa,camisa_corpo_raglan,camisa_corpo_raglan_bl];

arrRelacionamentosPartes.push(arrMangaNenhuma);
arrRelacionamentosPartes.push(arrMangaCurta);
arrRelacionamentosPartes.push(arrMangaLonga);
arrRelacionamentosPartes.push(arrMangaRaglanCurta);
arrRelacionamentosPartes.push(arrMangaRaglanLonga);


//CAMISA PESCOÇO
var camisa_pescoco_abanhado = 19;
var camisa_pescoco_gola_redonda = 15;
var camisa_pescoco_gola_decote_v = 18;
var camisa_pescoco_gola_esportiva = 14;
var camisa_pescoco_gola_galileu = 17;
var camisa_pescoco_gola_padre = 13;
var camisa_pescoco_gola_polo = 12;
var camisa_pescoco_sem_acabamento = 11;
//var camisa_pescoco_tira_pronta = 20;
var camisa_pescoco_vies = 16;
var camisa_pescoco_nenhum = 88;

var arrPescocoAbanhado = [camisa_pescoco_abanhado,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido];
var arrPescocoGolaRedonda = [camisa_pescoco_gola_redonda,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
var arrPescocoGolaDecoteV = [camisa_pescoco_gola_decote_v,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
var arrPescocoGolaEsportiva = [camisa_pescoco_gola_esportiva,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
var arrPescocoGolaGalileu = [camisa_pescoco_gola_galileu,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
var arrPescocoGolaPadre = [camisa_pescoco_gola_padre,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
var arrPescocoGolaPolo = [camisa_pescoco_gola_polo,camisa_corpo_polo,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
var arrPescocoSemAcabamento = [camisa_pescoco_sem_acabamento,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
//var arrPescocoTiraPronta = [camisa_pescoco_tira_pronta,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
var arrPescocoVies = [camisa_pescoco_vies,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata,camisa_corpo_colete];
var arrPescocoNenhum = [camisa_pescoco_nenhum,camisa_corpo_avental];


arrRelacionamentosPartes.push(arrPescocoAbanhado);
arrRelacionamentosPartes.push(arrPescocoGolaRedonda);
arrRelacionamentosPartes.push(arrPescocoGolaDecoteV);
arrRelacionamentosPartes.push(arrPescocoGolaEsportiva);
arrRelacionamentosPartes.push(arrPescocoGolaGalileu);
arrRelacionamentosPartes.push(arrPescocoGolaPadre);
arrRelacionamentosPartes.push(arrPescocoGolaPolo);
arrRelacionamentosPartes.push(arrPescocoSemAcabamento);
//arrRelacionamentosPartes.push(arrPescocoTiraPronta);
arrRelacionamentosPartes.push(arrPescocoVies);
arrRelacionamentosPartes.push(arrPescocoNenhum);

//CAMISA BOLSO FRENTE
var camisa_bolso_frente_nenhum = 81;
var camisa_bolso_frente_invisivel = 25;
var camisa_bolso_frente_visivel = 24;
var camisa_bolso_frente_canguru = 87;

var arrCamisaBolsoFrenteNenhum = [camisa_bolso_frente_nenhum,camisa_corpo_avental,camisa_corpo_polo,camisa_corpo_colete,camisa_corpo_regata,camisa_corpo_recorte_de_tecido,camisa_corpo_raglan_bl,camisa_corpo_raglan,camisa_corpo_normal,camisa_corpo_machao,camisa_corpo_baby_look];
var arrCamisaBolsoFrenteInvisivel = [camisa_bolso_frente_invisivel,camisa_corpo_avental,camisa_corpo_polo,camisa_corpo_colete,camisa_corpo_regata,camisa_corpo_recorte_de_tecido,camisa_corpo_raglan_bl,camisa_corpo_raglan,camisa_corpo_normal,camisa_corpo_machao,camisa_corpo_baby_look];
var arrCamisaBolsoFrenteVisivel = [camisa_bolso_frente_visivel,camisa_corpo_avental,camisa_corpo_polo,camisa_corpo_colete,camisa_corpo_regata,camisa_corpo_recorte_de_tecido,camisa_corpo_raglan_bl,camisa_corpo_raglan,camisa_corpo_normal,camisa_corpo_machao,camisa_corpo_baby_look];
var arrCamisaBolsoFrenteCanguru = [camisa_bolso_frente_canguru,camisa_corpo_avental];

arrRelacionamentosPartes.push(arrCamisaBolsoFrenteNenhum);
arrRelacionamentosPartes.push(arrCamisaBolsoFrenteInvisivel);
arrRelacionamentosPartes.push(arrCamisaBolsoFrenteVisivel);
arrRelacionamentosPartes.push(arrCamisaBolsoFrenteCanguru);

//CAMISA BOLSO COSTAS
var camisa_bolso_costas_nenhum = 82;
var camisa_bolso_costas_com_divisao = 27;
var camisa_bolso_costas_sem_divisao = 28;

var arrCamisaBolsoCostasNenhum = [camisa_bolso_costas_nenhum,camisa_corpo_avental,camisa_corpo_polo,camisa_corpo_colete,camisa_corpo_regata,camisa_corpo_recorte_de_tecido,camisa_corpo_raglan_bl,camisa_corpo_raglan,camisa_corpo_normal,camisa_corpo_machao,camisa_corpo_baby_look];
var arrCamisaBolsoCostasComDivisao = [camisa_bolso_costas_com_divisao,camisa_corpo_polo,camisa_corpo_colete,camisa_corpo_regata,camisa_corpo_recorte_de_tecido,camisa_corpo_raglan_bl,camisa_corpo_raglan,camisa_corpo_normal,camisa_corpo_machao,camisa_corpo_baby_look];
var arrCamisaBolsoCostasSemDivisao = [camisa_bolso_costas_sem_divisao,camisa_corpo_polo,camisa_corpo_colete,camisa_corpo_regata,camisa_corpo_recorte_de_tecido,camisa_corpo_raglan_bl,camisa_corpo_raglan,camisa_corpo_normal,camisa_corpo_machao,camisa_corpo_baby_look];

arrRelacionamentosPartes.push(arrCamisaBolsoCostasNenhum);
arrRelacionamentosPartes.push(arrCamisaBolsoCostasComDivisao);
arrRelacionamentosPartes.push(arrCamisaBolsoCostasSemDivisao);

//CAMISA CAVA
var camisa_cava_nenhuma = 83;
var camisa_cava_colete = 68;
var camisa_cava_machao = 67;
var camisa_cava_regata = 66;
var camisa_cava_normal = 69;

var arrCamisaCavaNenhuma = [camisa_cava_nenhuma,camisa_corpo_avental,camisa_corpo_polo,camisa_corpo_recorte_de_tecido,camisa_corpo_raglan_bl,camisa_corpo_raglan,camisa_corpo_normal,camisa_corpo_baby_look];
var arrCamisaCavaColete = [camisa_cava_colete,camisa_corpo_colete];
var arrCamisaCavaMachao = [camisa_cava_machao,camisa_corpo_machao];
var arrCamisaCavaRegata = [camisa_cava_regata,camisa_corpo_regata];
var arrCamisaCavaNormal = [camisa_cava_normal,camisa_corpo_normal];

arrRelacionamentosPartes.push(arrCamisaCavaNenhuma);
arrRelacionamentosPartes.push(arrCamisaCavaColete);
arrRelacionamentosPartes.push(arrCamisaCavaMachao);
arrRelacionamentosPartes.push(arrCamisaCavaRegata);
arrRelacionamentosPartes.push(arrCamisaCavaNormal);


//EXIBIÇÃO APENAS QDO A PARTE ESTIVER SELECIONADA, POIS É UMA EXIBIÇÃO NAS COSTAS
var arrPartesCostasCamisa = [];
var arrPartesFrenteCamisa = [];
var arrConfigExibicaoCostasCamisa = [];
arrPartesCostasCamisa.push(camisa_bolso_costas);
arrPartesFrenteCamisa.push(camisa_pescoco);
arrPartesFrenteCamisa.push(camisa_bolso_frente);
arrConfigExibicaoCostasCamisa.push(arrPartesCostasCamisa);
arrConfigExibicaoCostasCamisa.push(arrPartesFrenteCamisa);
//console.log(arrConfigExibicaoCostasCamisa)

arrExibicaoApenasCostas.push([[],[]]);
arrExibicaoApenasCostas.push(arrConfigExibicaoCostasCamisa);
//console.log(arrExibicaoApenasCostas['1']);
//***********************************************************************
//***********************************************************************
//ACABAMENTOS
//CAMISA CORPO
var acabamento_camisa_corpo_abanhado = 2;
var acabamento_camisa_corpo_cos = 4;
var acabamento_camisa_corpo_elastico = 1;
var acabamento_camisa_corpo_sem_acabamento = 5;
var acabamento_camisa_corpo_vies = 3;

var arrAcabamentoCamisaCorpoAbanhado = [acabamento_camisa_corpo_abanhado,camisa_corpo_regata,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_colete,camisa_corpo_polo,camisa_corpo_recorte_de_tecido,camisa_corpo_avental];
var arrAcabamentoCamisaCorpoCos = [acabamento_camisa_corpo_cos,camisa_corpo_regata,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_colete,camisa_corpo_polo,camisa_corpo_recorte_de_tecido];
var arrAcabamentoCamisaCorpoElastico = [acabamento_camisa_corpo_elastico,camisa_corpo_regata,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_colete,camisa_corpo_polo,camisa_corpo_recorte_de_tecido];
var arrAcabamentoCamisaCorpoSemAcabamento = [acabamento_camisa_corpo_sem_acabamento,camisa_corpo_regata,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_colete,camisa_corpo_polo,camisa_corpo_recorte_de_tecido];
var arrAcabamentoCamisaCorpoVies = [acabamento_camisa_corpo_vies,camisa_corpo_regata,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_colete,camisa_corpo_polo,camisa_corpo_recorte_de_tecido,camisa_corpo_avental];

arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaCorpoAbanhado);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaCorpoCos);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaCorpoElastico);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaCorpoSemAcabamento);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaCorpoVies);


//CAMISA MANGA
var acabamento_camisa_manga_nenhum = 105;
var acabamento_camisa_manga_abanhado = 16;
var acabamento_camisa_manga_abanhado_sobreposto = 14;
var acabamento_camisa_manga_punho_chapado_da_malha = 21;
var acabamento_camisa_manga_punho_chapado_da_ribana = 46;
var acabamento_camisa_manga_punho_da_malha = 22;
var acabamento_camisa_manga_punho_ribana = 17;
var acabamento_camisa_manga_punho_tira_pronta = 20;
var acabamento_camisa_manga_sem_acabamento = 19;
var acabamento_camisa_manga_vies_chapado = 18;
var acabamento_camisa_manga_vies_da_malha = 43;
var acabamento_camisa_manga_vies_de_ribana = 44;

var arrAcabamentoCamisaMangaNenhum = [acabamento_camisa_manga_nenhum,camisa_manga_nenhuma];
var arrAcabamentoCamisaMangaAbanhado = [acabamento_camisa_manga_abanhado,camisa_manga_longa,camisa_manga_curta,camisa_manga_raglan_curta,camisa_manga_raglan_longa];
var arrAcabamentoCamisaMangaAbanhadoSobreposto = [acabamento_camisa_manga_abanhado_sobreposto,camisa_manga_longa,camisa_manga_curta,camisa_manga_raglan_curta,camisa_manga_raglan_longa];
var arrAcabamentoCamisaMangaPunhoChapadoMalha = [acabamento_camisa_manga_punho_chapado_da_malha,camisa_manga_longa,camisa_manga_curta,camisa_manga_raglan_curta,camisa_manga_raglan_longa];
var arrAcabamentoCamisaMangaPunhoChapadoRibana = [acabamento_camisa_manga_punho_chapado_da_ribana,camisa_manga_longa,camisa_manga_curta,camisa_manga_raglan_curta,camisa_manga_raglan_longa];
var arrAcabamentoCamisaMangaPunhoMalha = [acabamento_camisa_manga_punho_da_malha,camisa_manga_longa,camisa_manga_curta,camisa_manga_raglan_curta,camisa_manga_raglan_longa];
var arrAcabamentoCamisaMangaPunhoRibana = [acabamento_camisa_manga_punho_ribana,camisa_manga_longa,camisa_manga_curta,camisa_manga_raglan_curta,camisa_manga_raglan_longa];
var arrAcabamentoCamisaMangaPunhoTiraPronta = [acabamento_camisa_manga_punho_tira_pronta,camisa_manga_longa,camisa_manga_curta,camisa_manga_raglan_curta,camisa_manga_raglan_longa];
var arrAcabamentoCamisaMangaPunhoSemAcabamento = [acabamento_camisa_manga_sem_acabamento,camisa_manga_longa,camisa_manga_curta,camisa_manga_raglan_curta,camisa_manga_raglan_longa];
var arrAcabamentoCamisaMangaViesChapado = [acabamento_camisa_manga_vies_chapado,camisa_manga_longa,camisa_manga_curta,camisa_manga_raglan_curta,camisa_manga_raglan_longa];
var arrAcabamentoCamisaMangaViesMalha = [acabamento_camisa_manga_vies_da_malha,camisa_manga_longa,camisa_manga_curta,camisa_manga_raglan_curta,camisa_manga_raglan_longa];
var arrAcabamentoCamisaMangaViesRibana = [acabamento_camisa_manga_vies_de_ribana,camisa_manga_longa,camisa_manga_curta,camisa_manga_raglan_curta,camisa_manga_raglan_longa];

arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaMangaNenhum);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaMangaAbanhado);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaMangaAbanhadoSobreposto);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaMangaPunhoChapadoMalha);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaMangaPunhoChapadoRibana);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaMangaPunhoMalha);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaMangaPunhoRibana);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaMangaPunhoTiraPronta);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaMangaPunhoSemAcabamento);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaMangaViesChapado);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaMangaViesMalha);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaMangaViesRibana);

//CAMISA GOLA
var acabamento_camisa_gola_nenhum = 106;//*
var acabamento_camisa_gola_pano_chapado_friso_malha = 6;//*
var acabamento_camisa_gola_pano_malha_friso_chapado = 7;//
var acabamento_camisa_gola_pano_e_friso_chapado = 8;//
var acabamento_camisa_gola_pano_e_friso_malha = 9;//
var acabamento_camisa_gola_ribana = 10;//
var acabamento_camisa_gola_malha = 11;//
var acabamento_camisa_gola_pronta = 13;//
var acabamento_camisa_gola_chapada_malha = 45;//
var acabamento_camisa_gola_chapada_ribana = 47;//
var acabamento_camisa_gola_malha_com_ziper = 95;//
var acabamento_camisa_gola_tira_pronta = 110;//

var arrAcabamentoCamisaGolaNenhum = [acabamento_camisa_gola_nenhum,camisa_pescoco_abanhado,camisa_pescoco_vies,camisa_pescoco_sem_acabamento,camisa_pescoco_nenhum];
var arrAcabamentoCamisaGolaPanoChapadoFrisoMalha = [acabamento_camisa_gola_pano_chapado_friso_malha,camisa_pescoco_gola_redonda,camisa_pescoco_gola_decote_v,camisa_pescoco_gola_esportiva,camisa_pescoco_gola_galileu,camisa_pescoco_gola_padre];
var arrAcabamentoCamisaGolaChapadaMalha = [acabamento_camisa_gola_chapada_malha,camisa_pescoco_gola_redonda,camisa_pescoco_gola_decote_v,camisa_pescoco_gola_polo];
var arrAcabamentoCamisaGolaChapadaRibana = [acabamento_camisa_gola_chapada_ribana,camisa_pescoco_gola_redonda,camisa_pescoco_gola_decote_v,camisa_pescoco_gola_polo];
var arrAcabamentoCamisaGolaMalha = [acabamento_camisa_gola_malha,camisa_pescoco_gola_redonda,camisa_pescoco_gola_decote_v,camisa_pescoco_gola_polo];
var arrAcabamentoCamisaGolaMalhaComZipper = [acabamento_camisa_gola_malha_com_ziper,camisa_pescoco_gola_redonda,camisa_pescoco_gola_decote_v];
var arrAcabamentoCamisaGolaRibana = [acabamento_camisa_gola_ribana,camisa_pescoco_gola_redonda,camisa_pescoco_gola_decote_v,camisa_pescoco_gola_polo];
var arrAcabamentoCamisaGolaPronta = [acabamento_camisa_gola_pronta,camisa_pescoco_gola_redonda,camisa_pescoco_gola_decote_v,camisa_pescoco_gola_esportiva,camisa_pescoco_gola_galileu,camisa_pescoco_gola_padre,camisa_pescoco_gola_polo];
var arrAcabamentoCamisaGolaPanoMalhaFrisoChapado = [acabamento_camisa_gola_pano_chapado_friso_malha,camisa_pescoco_gola_redonda,camisa_pescoco_gola_decote_v,camisa_pescoco_gola_esportiva,camisa_pescoco_gola_galileu,camisa_pescoco_gola_padre];
var arrAcabamentoCamisaGolaPanoEFrisoChapado = [acabamento_camisa_gola_pano_e_friso_chapado,camisa_pescoco_gola_redonda,camisa_pescoco_gola_decote_v,camisa_pescoco_gola_esportiva,camisa_pescoco_gola_galileu,camisa_pescoco_gola_padre];
var arrAcabamentoCamisaGolaPanoEFrisoMalha = [acabamento_camisa_gola_pano_e_friso_malha,camisa_pescoco_gola_redonda,camisa_pescoco_gola_decote_v,camisa_pescoco_gola_esportiva,camisa_pescoco_gola_galileu,camisa_pescoco_gola_padre];
var arrAcabamentoCamisaGolaTiraPronta = [acabamento_camisa_gola_tira_pronta,camisa_pescoco_gola_redonda,camisa_pescoco_gola_decote_v,camisa_pescoco_gola_esportiva,camisa_pescoco_gola_galileu,camisa_pescoco_gola_padre];


arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaGolaNenhum);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaGolaPanoChapadoFrisoMalha);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaGolaChapadaMalha);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaGolaChapadaRibana);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaGolaMalha);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaGolaMalhaComZipper);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaGolaRibana);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaGolaPronta);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaGolaPanoMalhaFrisoChapado);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaGolaPanoEFrisoChapado);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaGolaPanoEFrisoMalha);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaGolaTiraPronta);


//CAMISA BOLSO FRENTE
var acabamento_camisa_bolso_frente_nenhum = 111;
var acabamento_camisa_bolso_frente_aberto = 23;
var acabamento_camisa_bolso_frente_com_botao = 24;
var acabamento_camisa_bolso_frente_com_velcro = 25;

var arrAcabamentoCamisaBolsoFrenteNenhum = [acabamento_camisa_bolso_frente_nenhum,camisa_bolso_frente_nenhum];
var arrAcabamentoCamisaBolsoFrenteAberto = [acabamento_camisa_bolso_frente_aberto,camisa_bolso_frente_invisivel,camisa_bolso_frente_visivel,camisa_bolso_frente_canguru];
var arrAcabamentoCamisaBolsoFrenteComBotao = [acabamento_camisa_bolso_frente_com_botao,camisa_bolso_frente_invisivel,camisa_bolso_frente_visivel,camisa_bolso_frente_canguru];
var arrAcabamentoCamisaBolsoFrenteComVelcro = [acabamento_camisa_bolso_frente_com_velcro,camisa_bolso_frente_invisivel,camisa_bolso_frente_visivel,camisa_bolso_frente_canguru];

arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaBolsoFrenteNenhum);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaBolsoFrenteAberto);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaBolsoFrenteComBotao);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaBolsoFrenteComVelcro);


//CAMISA BOLSO COSTAS
var acabamento_camisa_bolso_costas_nenhum = 112;
var acabamento_camisa_bolso_costas_costurado = 26;
var acabamento_camisa_bolso_costas_elastico = 27;

var arrAcabamentoCamisaBolsoCostasNenhum = [acabamento_camisa_bolso_costas_nenhum,camisa_bolso_costas_nenhum];
var arrAcabamentoCamisaBolsoCostasCosturado = [acabamento_camisa_bolso_costas_costurado,camisa_bolso_costas_com_divisao,camisa_bolso_costas_sem_divisao];
var arrAcabamentoCamisaBolsoCostasElastico = [acabamento_camisa_bolso_costas_elastico,camisa_bolso_costas_com_divisao,camisa_bolso_costas_sem_divisao];

arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaBolsoCostasNenhum);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaBolsoCostasCosturado);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaBolsoCostasElastico);


//CAMISA CAVA
var acabamento_camisa_cava_nenhum = 77;
var acabamento_camisa_cava_rebatido = 74;
var acabamento_camisa_cava_punho_chapado_ribana = 75;
var acabamento_camisa_cava_punho_ribana = 76;
var acabamento_camisa_cava_vies = 73;

var arrAcabamentoCamisaCavaNenhum = [acabamento_camisa_cava_nenhum,camisa_cava_nenhuma,camisa_cava_machao,camisa_cava_regata,camisa_cava_normal,camisa_cava_colete];
var arrAcabamentoCamisaCavaRebatido = [acabamento_camisa_cava_rebatido,camisa_cava_machao,camisa_cava_regata,camisa_cava_normal,camisa_cava_colete];
var arrAcabamentoCamisaCavaPunhoChapadoRibana = [acabamento_camisa_cava_punho_chapado_ribana,camisa_cava_machao,camisa_cava_regata,camisa_cava_normal,camisa_cava_colete];
var arrAcabamentoCamisaCavaPunhoRibana = [acabamento_camisa_cava_punho_ribana,camisa_cava_machao,camisa_cava_regata,camisa_cava_normal,camisa_cava_colete];
var arrAcabamentoCamisaCavaVies = [acabamento_camisa_cava_vies,camisa_cava_machao,camisa_cava_regata,camisa_cava_normal,camisa_cava_colete];

arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaCavaNenhum);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaCavaRebatido);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaCavaPunhoChapadoRibana);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaCavaPunhoRibana);
arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaCavaVies);


//ARRAY DEFAUL CAMISAS
//arrDefault está declarado em lib_hierarquia
//OBS respeitar a ordem das partes na montagem do array
var listaDefault = [camisa_corpo_normal,camisa_cava_nenhuma,camisa_manga_curta,camisa_pescoco_gola_redonda,camisa_bolso_frente_nenhum,camisa_bolso_costas_nenhum]
var listaAcabamentoDefault = [acabamento_camisa_corpo_abanhado,acabamento_camisa_cava_nenhum,acabamento_camisa_manga_abanhado,acabamento_camisa_gola_ribana,acabamento_camisa_bolso_frente_nenhum,acabamento_camisa_bolso_costas_nenhum]
arrDefault['1'] = listaDefault;
arrAcabamentoDefault['1'] = listaAcabamentoDefault;

//RELAICONAMENTO DE CAMADAS DE ACABAMENTOS COMPARTILHADOS
var rel_modelo_acabamento = {
    17:"PUNHO",
    20:"PUNHO",
    21:"PUNHO",
    22:"PUNHO",
    46:"PUNHO",
}

var rel_tipo_item_parte = {
    22:"MANGA_CURTA",
    23:"MANGA_CURTA",
    21:"MANGA_LONGA",
    86:"MANGA_LONGA"
}


//PARTES
var camisa_corpo = 1;
var camisa_pescoco = 2;
var camisa_manga = 3;
var camisa_bolso_frente = 4;
var camisa_bolso_costas = 5;
var camisa_cava = 20;

var arrDefault = [['1','5'],['1','5']];
console.log(arrDefault);


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

var arrMangaNenhuma = [camisa_manga_nenhuma,camisa_corpo_machao,camisa_corpo_recorte_de_tecido,camisa_corpo_regata,camisa_corpo_colete,camisa_corpo_avental,];
var arrMangaCurta = [camisa_manga_curta,camisa_corpo_baby_look,camisa_corpo_normal,camisa_corpo_polo,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido];
var arrMangaLonga = [camisa_manga_longa,camisa_corpo_baby_look,camisa_corpo_normal,camisa_corpo_polo,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido];

arrRelacionamentosPartes.push(arrMangaNenhuma);
arrRelacionamentosPartes.push(arrMangaCurta);
arrRelacionamentosPartes.push(arrMangaLonga);


//CAMISA PESCOÇO
var camisa_pescoco_abanhado = 19;
var camisa_pescoco_gola_redonda = 15;
var camisa_pescoco_gola_decote_v = 18;
var camisa_pescoco_gola_esportiva = 14;
var camisa_pescoco_gola_galileu = 17;
var camisa_pescoco_gola_padre = 13;
var camisa_pescoco_gola_polo = 12;
var camisa_pescoco_sem_acabamento = 11;
var camisa_pescoco_tira_pronta = 20;
var camisa_pescoco_vies = 16;

var arrPescocoAbanhado = [camisa_pescoco_abanhado,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_avental];
var arrPescocoGolaRedonda = [camisa_pescoco_gola_redonda,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
var arrPescocoGolaDecoteV = [camisa_pescoco_gola_decote_v,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
var arrPescocoGolaEsportiva = [camisa_pescoco_gola_esportiva,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
var arrPescocoGolaGalileu = [camisa_pescoco_gola_galileu,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
var arrPescocoGolaPadre = [camisa_pescoco_gola_padre,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
var arrPescocoGolaPolo = [camisa_pescoco_gola_polo,camisa_corpo_polo,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
var arrPescocoSemAcabamento = [camisa_pescoco_sem_acabamento,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata,camisa_corpo_avental];
var arrPescocoTiraPronta = [camisa_pescoco_tira_pronta,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata];
var arrPescocoVies = [camisa_pescoco_vies,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_recorte_de_tecido,camisa_corpo_regata,camisa_corpo_colete,camisa_corpo_avental];


arrRelacionamentosPartes.push(arrPescocoAbanhado);
arrRelacionamentosPartes.push(arrPescocoGolaRedonda);
arrRelacionamentosPartes.push(arrPescocoGolaDecoteV);
arrRelacionamentosPartes.push(arrPescocoGolaEsportiva);
arrRelacionamentosPartes.push(arrPescocoGolaGalileu);
arrRelacionamentosPartes.push(arrPescocoGolaPadre);
arrRelacionamentosPartes.push(arrPescocoGolaPolo);
arrRelacionamentosPartes.push(arrPescocoSemAcabamento);
arrRelacionamentosPartes.push(arrPescocoTiraPronta);
arrRelacionamentosPartes.push(arrPescocoVies);

//CAMISA BOLSO FRENTE
var camisa_bolso_frente_nenhum = 81;
var camisa_bolso_frente_invisivel = 25;
var camisa_bolso_frente_visivel = 24;

var arrCamisaBolsoFrenteNenhum = [camisa_bolso_frente_nenhum,camisa_corpo_avental,camisa_corpo_polo,camisa_corpo_colete,camisa_corpo_regata,camisa_corpo_recorte_de_tecido,camisa_corpo_raglan_bl,camisa_corpo_raglan,camisa_corpo_normal,camisa_corpo_machao,camisa_corpo_baby_look];
var arrCamisaBolsoFrenteInvisivel = [camisa_bolso_frente_invisivel,camisa_corpo_avental,camisa_corpo_polo,camisa_corpo_colete,camisa_corpo_regata,camisa_corpo_recorte_de_tecido,camisa_corpo_raglan_bl,camisa_corpo_raglan,camisa_corpo_normal,camisa_corpo_machao,camisa_corpo_baby_look];
var arrCamisaBolsoFrenteVisivel = [camisa_bolso_frente_visivel,camisa_corpo_avental,camisa_corpo_polo,camisa_corpo_colete,camisa_corpo_regata,camisa_corpo_recorte_de_tecido,camisa_corpo_raglan_bl,camisa_corpo_raglan,camisa_corpo_normal,camisa_corpo_machao,camisa_corpo_baby_look];

arrRelacionamentosPartes.push(arrCamisaBolsoFrenteNenhum);
arrRelacionamentosPartes.push(arrCamisaBolsoFrenteInvisivel);
arrRelacionamentosPartes.push(arrCamisaBolsoFrenteVisivel);

//CAMISA BOLSO COSTAS
var camisa_bolso_costas_nenhum = 82;
var camisa_bolso_costas_com_divisao = 27;
var camisa_bolso_costas_sem_divisao = 28;

var arrCamisaBolsoCostasNenhum = [camisa_bolso_costas_nenhum,camisa_corpo_avental,camisa_corpo_polo,camisa_corpo_colete,camisa_corpo_regata,camisa_corpo_recorte_de_tecido,camisa_corpo_raglan_bl,camisa_corpo_raglan,camisa_corpo_normal,camisa_corpo_machao,camisa_corpo_baby_look];
var arrCamisaBolsoCostasComDivisao = [camisa_bolso_costas_com_divisao,camisa_corpo_avental,camisa_corpo_polo,camisa_corpo_colete,camisa_corpo_regata,camisa_corpo_recorte_de_tecido,camisa_corpo_raglan_bl,camisa_corpo_raglan,camisa_corpo_normal,camisa_corpo_machao,camisa_corpo_baby_look];
var arrCamisaBolsoCostasSemDivisao = [camisa_bolso_costas_sem_divisao,camisa_corpo_avental,camisa_corpo_polo,camisa_corpo_colete,camisa_corpo_regata,camisa_corpo_recorte_de_tecido,camisa_corpo_raglan_bl,camisa_corpo_raglan,camisa_corpo_normal,camisa_corpo_machao,camisa_corpo_baby_look];

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




//***********************************************************************
//***********************************************************************
//ACABAMENTOS
//CAMISA CORPO
var acabamento_camisa_corpo_abanhado = 2;
var acabamento_camisa_corpo_cos = 4;
var acabamento_camisa_corpo_elastico = 1;
var acabamento_camisa_corpo_sem_acabamento = 5;
var acabamento_camisa_corpo_vies = 3;

var arrAcabamentoCamisaCorpoAbanhado = [acabamento_camisa_corpo_abanhado,camisa_corpo_regata,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_colete,camisa_corpo_polo,camisa_corpo_recorte_de_tecido];
var arrAcabamentoCamisaCorpoCos = [acabamento_camisa_corpo_cos,camisa_corpo_regata,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_colete,camisa_corpo_polo,camisa_corpo_recorte_de_tecido];
var arrAcabamentoCamisaCorpoElastico = [acabamento_camisa_corpo_elastico,camisa_corpo_regata,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_colete,camisa_corpo_polo,camisa_corpo_recorte_de_tecido];
var arrAcabamentoCamisaCorpoSemAcabamento = [acabamento_camisa_corpo_sem_acabamento,camisa_corpo_regata,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_colete,camisa_corpo_polo,camisa_corpo_recorte_de_tecido];
var arrAcabamentoCamisaCorpoVies = [acabamento_camisa_corpo_vies,camisa_corpo_regata,camisa_corpo_baby_look,camisa_corpo_machao,camisa_corpo_normal,camisa_corpo_raglan,camisa_corpo_raglan_bl,camisa_corpo_colete,camisa_corpo_polo,camisa_corpo_recorte_de_tecido];

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
var arrAcabamentoCamisaMangaAbanhado = [acabamento_camisa_manga_abanhado,camisa_manga_longa,camisa_manga_curta];
var arrAcabamentoCamisaMangaAbanhadoSobreposto = [acabamento_camisa_manga_abanhado_sobreposto,camisa_manga_longa,camisa_manga_curta];
var arrAcabamentoCamisaMangaPunhoChapadoMalha = [acabamento_camisa_manga_punho_chapado_da_malha,camisa_manga_longa,camisa_manga_curta];
var arrAcabamentoCamisaMangaPunhoChapadoRibana = [acabamento_camisa_manga_punho_chapado_da_ribana,camisa_manga_longa,camisa_manga_curta];
var arrAcabamentoCamisaMangaPunhoMalha = [acabamento_camisa_manga_punho_da_malha,camisa_manga_longa,camisa_manga_curta];
var arrAcabamentoCamisaMangaPunhoRibana = [acabamento_camisa_manga_punho_ribana,camisa_manga_longa,camisa_manga_curta];
var arrAcabamentoCamisaMangaPunhoTiraPronta = [acabamento_camisa_manga_punho_tira_pronta,camisa_manga_longa,camisa_manga_curta];
var arrAcabamentoCamisaMangaPunhoSemAcabamento = [acabamento_camisa_manga_sem_acabamento,camisa_manga_longa,camisa_manga_curta];
var arrAcabamentoCamisaMangaViesChapado = [acabamento_camisa_manga_vies_chapado,camisa_manga_longa,camisa_manga_curta];
var arrAcabamentoCamisaMangaViesMalha = [acabamento_camisa_manga_vies_da_malha,camisa_manga_longa,camisa_manga_curta];
var arrAcabamentoCamisaMangaViesRibana = [acabamento_camisa_manga_vies_de_ribana,camisa_manga_longa,camisa_manga_curta];

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
var acabamento_camisa_gola_nenhum = 106;
var acabamento_camisa_gola_pano_chapado_friso_malha = 6;
var acabamento_camisa_gola_pano_malha_friso_chapado = 7;
var acabamento_camisa_gola_pano_e_friso_chapado = 8;
var acabamento_camisa_gola_pano_e_friso_malha = 9;
var acabamento_camisa_gola_ribana = 10;
var acabamento_camisa_gola_malha = 11;
var acabamento_camisa_gola_pronta = 13;
var acabamento_camisa_gola_chapada_malha = 45;
var acabamento_camisa_gola_chapada_ribana = 47;
var acabamento_camisa_gola_malha_com_ziper = 95;
/*
camisa_pescoco_abanhado
camisa_pescoco_gola_redonda
camisa_pescoco_gola_decote_v
camisa_pescoco_gola_esportiva
camisa_pescoco_gola_galileu
camisa_pescoco_gola_padre
camisa_pescoco_gola_polo
camisa_pescoco_sem_acabamento
camisa_pescoco_tira_pronta
camisa_pescoco_vies
 */

var arrAcabamentoCamisaGolaNenhum = [acabamento_camisa_gola_nenhum,camisa_pescoco_abanhado];

arrRelacionamentosAcabamentos.push(arrAcabamentoCamisaGolaNenhum);
<?php 

$listaArquivos = array();
    $pastas = array('assets/img/icons','../miniaturas','../models');
    foreach ($pastas as $pasta){
        
        chdir($pasta);
        foreach (glob("*.*") as $arquivo) {
        $listaArquivos[] = $arquivo;
    }
    $json = json_encode($listaArquivos);
}
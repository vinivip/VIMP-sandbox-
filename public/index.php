<?php 
    include '../app/helpers/listaElementosDisponiveis.php'
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="assets/styles/styles.css" rel="stylesheet"/>
    <title>VIMP 2.0</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="icon" type="image/x-icon" href="assets/img/logo.svg">
    <script>
        var listaArquivosDisponiveis = <?=$json; ?>;
    </script>
</head>

<body onload="preload()">
    <div class="toastNoSavedWarning ">
        
        <div class="toastContent">
            <span  class="material-symbols-outlined">error</span>
            <p id="toast"></p>
        </div>
    </div>
    <div class="toastSavedWarning ">
        
        <div class="toastContent">
            <span  class="material-symbols-outlined">check_circle</span>
            <p id="toasts"></p>
        </div>
    </div>
    <header>
        <nav id="nav-os" class="nav-os">
            <img src="assets/img/logo.svg" alt="logoVIMP">
            <select id="changeItem"></select>
            <h3 class="descSelectOS">
                <div id="descSelectOS"></div>
                
            </h3>
        </nav>
        
    </header>
    <main class="unikouContainer">
        <div class="containerMsg">
            <div>
                <span class="material-symbols-outlined">
                    engineering
                </span>
                <h1>ESTA MODELAGEM NÃO ESTÁ DISPONÍVEL...</h1>
                <h3>Estamos trabalhando nisso!</h3>   
            </div>
              
        </div>
</main>
    <main class="modellingContainer">
        
        
        <section  id="view" class="view">
                <h1 class="partTitle">CORPO</h1>
                <section class= "modelingContainer" >
                    <div class="modelingMenuDiv">
                        <nav id="sideMenu">
                            <button id="sideMenuDelete">
                                <span class="material-symbols-outlined">
                                        delete
                                </span>
                            </button>
                            <button id="sideMenuComments">
                                <span class="material-symbols-outlined">
                                        chat
                                </span>
                            </button>
                            <button  id="sideMenuDuplicate">
                                <span class="material-symbols-outlined">
                                        markdown_copy
                                </span>
                            </button>
                            <button onclick="saveModdeling()" id="sideMenuSave" disabled> 
                                <span class="material-symbols-outlined">
                                        save
                                </span>
                            </button>
                        </nav>
                    </div>
                         
                    <div id="slices"  class="modelingSlicesDiv">
                    
                        <div  class="slice" >
                            <svg id="containerSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5757.32 4614.32" class="infill" >
                            </svg>
                            
                        </div>
                        
                        
                        
                        
                         
                    </div>
                    
                </section>
                <ul id="selectionTags">
                            
                            </ul> 
    
        </section>
        <section id="menu" class="menu" >
            <nav id="partsNavigation">
                <ul id="navParts">
                    
                </ul>
            </nav>
            <section id="bandeja" class="bandeja">
                <section id="piecePart" class="selectAcordion">
                    <div id="type" class="field">
                        <h3 id="typeTrigger">
                            <span class="material-symbols-outlined">
                                    Apparel
                            </span>
                            <span class="partTitle"></span>
                        </h3>
                        <div class="typeContent open" id="typeContent">

                        </div>
                        <div class="" id="finishingContent">
                            <h3>
                                <span class="material-symbols-outlined">
                                Note_stack_add
                                </span>
                                ACABAMENTO 
                                <select class="selectAcabamentos" name="" id="SelectAcabamentos"></select></h3>
                        </div>
                    </div>
                </section>
                <section id="sectorComments" class="sectorComments">
                    <div id="sectorCommentsLog" class="log">
                        <p class="sectorMensagesWarning">Nenhum comentário de setor</p>
                        <ul id="mensagesLog" class="sectorMensagesContainer">
                            
                        </ul>
                    </div>
                    <form id="sectorsCommentImput" class="entry">
                        <div class="inputs">
                            <div  class="selectArea" id="selectArea">
                                <div id="selectAreaSelects" class="selectAreaSelects"></div>
                            </div>
                            <div><button id="buttonCommentSector">+Setor</button></div>
                            <textarea name="Comment" id="Comment">
                                
                            </textarea> 
                        </div>
                        <button  id="sendButton" class="buttonCircle">
                            <span class="material-symbols-outlined">
                                  arrow_forward
                            </span>
                        </button>
                    </form>
                </section>
            </section>
            

        </section>
    </main>

    <script src="assets/scripts/helpers/jquery-3.7.1.slim.min.js"></script>
    <script src="https://www.vipsportsproducao.com.br/vimp/lib_hierarquia.js"></script>
    <script src="https://www.vipsportsproducao.com.br/vimp/config_camisa.js"></script>


    <script src="assets/scripts/helpers/togglers.js"></script>
    
    
    <script src="assets/scripts/components/itemsOS.js"></script>
    <script src="assets/scripts/components/navparts.js"></script>
    <script src="assets/scripts/components/typeParts.js"></script>
    <script src="assets/scripts/components/acabamentos.js"></script>
    <script src="assets/scripts/components/modelsSlices.js"></script>
    <script src="assets/scripts/components/tagsList.js"></script>
    <script src="assets/scripts/components/logMensagens.js"></script>

    <script src="assets/scripts/build.js"></script>
    <script src="assets/scripts/main.js"></script>
    <script src="assets/scripts/preload.js"></script>
</body>
</html>
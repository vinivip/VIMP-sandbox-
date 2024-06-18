<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="styles.css" rel="stylesheet"/>
    <title>VIMP 2.0</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</head>
<body onload="preload()">
    <header style="background-color: green;">
        <nav id="nav-os" class="nav-os">
            <img src="assets/logo.svg" alt="logoVIMP">
            <select id="changeItem">
                
            </select>
        </nav>
    </header>
    <main >
        <section style="background-color: blue;" id="view" class="view">
                <h1 class="partTitle">CORPO</h1>
                <section class= "modelingContainer" style="height: 85%;">
                    <div style="display: inline-block; width:15%; background-color: red; text-align: center; ">
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
                            <button id="sideMenuDuplicate">
                                <span class="material-symbols-outlined">
                                        markdown_copy
                                </span>
                            </button>
                        </nav>
                    </div>
                         
                    <div id="slices"  class="" style="display: inline-block; width:95%; background-color: green; height:100%; position:relative ">
                        <div id="slice.body" class="" style="height: 100% ; display: flex;justify-content: center;">
                            
                            <img  src="templates/teste01.png" style="max-height: 100%;">
                        </div>
                        <div id="slice.body" class="" style="height: 100% ; display: flex; justify-content: center;position:relative; margin-top: -100%;">
                        
                            <img  src="templates/teste01.png" style="max-height: 100%;">
                        </div>
                        
                        
                    </div>
                </section>
                <ul>
                    <li>corpo-normal x</li>
                </ul>   
    
        </section>
        <section style="background-color: pink;" class="menu" id="menu">
            <nav id="partsNavigation">
                <ul id="navParts">
                    
                </ul>
            </nav>
            <section id="bandeja" class="bandeja">
                <section id="piecePart" class="selectAcordion">
                    <div id="type" class="field">
                        <h3 id="typeTrigger">
                            <button>
                                <span class="material-symbols-outlined">
                                    chevron_right
                                </span>
                            </button>
                            <span class="partTitle"></span>
                        </h3>
                        <div class="typeContent open" id="typeContent">

                        </div>
                    </div>
                    <div id="finishing" class="field">
                        <h3>
                            <button>
                                <span class="material-symbols-outlined">
                                    chevron_right
                                </span>
                            </button>
                            ACABAMENTO
                        </h3>
                        <div class=".content" id="finishingContent">
                            
                        </div>
                    </div>
                </section>
                <section id="sectorComments" class="sectorComments">
                    <div id="sectorCommentsLog" class="log">
                        <p>Nenhum comentário de setor</p>
                        <ul>
                        </ul>
                    </div>
                    <form action="" id="sectorsCommentImput" class="entry">
                        <div class="inputs">
                            <div style="display: none;" class="selectArea" id="selectArea">
                                <label for="art"><input name="art" type="checkbox">arte</label>
                                <label for="cut"><input name="cut" type="checkbox">corte</label>
                                <label for="separation"><input name="separation" type="checkbox">separação</label>
                                <label for="needleWork"><input name="needleWork" type="checkbox">bordado</label>
                                <label for="print"><input name="print" type="checkbox">impressão</label>
                                <label for="serigraphy"><input name="serigraphy" type="checkbox">siregrafia</label>
                                <label for="sublimation"><input name="sublimation" type="checkbox">sublimação</label>
                                <label for="delivery"><input name="delivery" type="checkbox">entrega</label>
                            </div>
                            <div><button id="buttonCommentSector">+Setor</button></div>
                            <textarea name="Comment" id=""></textarea> 
                        </div>
                        <button id="sendButton" class="buttonCircle">
                            <span class="material-symbols-outlined">
                                  arrow_forward
                            </span>
                        </button>
                    </form>
                </section>
            </section>
            

        </section>
    </main>

    <script src="scripts/libs/jquery-3.7.1.slim.min.js"></script>
    <script src="https://www.vipsportsproducao.com.br/vimp/lib_hierarquia.js"></script>
    <script src="https://www.vipsportsproducao.com.br/vimp/config_camisa.js"></script>


    <script src="scripts/libs/togglers.js"></script>
    

    <script src="scripts/components/itemsOS.js"></script>
    <script src="scripts/components/navparts.js"></script>
    <script src="scripts/components/typeParts.js"></script>

    <script src="scripts/build.js"></script>
    <script src="scripts/main.js"></script>
    <script src="scripts/preload.js"></script>
</body>
</html>
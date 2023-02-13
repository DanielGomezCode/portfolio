// -------- Variables Home -------- //

var EtiquetaInicio = document.getElementsByClassName('inicio__etiqueta')[0]
var TituloInicio = document.getElementsByClassName('inicio__titulo')[0]
var ProfesionInicio = document.getElementsByClassName('inicio__escritura')[0]
var TextoTituloInicio = document.getElementsByClassName('inicio__descripcion__titulo')[0]
var TextoParrafoInicio = document.getElementsByClassName('inicio__descripcion__texto')[0]
var InicioBoton = document.getElementsByClassName('inicio__boton')[0]
var InicioInferiorTituloUno = document.getElementsByClassName('inicio__titulo__uno')[0]
var InicioInferiorTituloDos = document.getElementsByClassName('inicio__titulo__dos')[0]
var InicioInferiorTituloTres = document.getElementsByClassName('inicio__titulo__tres')[0]
var InicioInferiorParrafoUno = document.getElementsByClassName('inicio__parrafo__uno')[0]
var InicioInferiorParrafoDos = document.getElementsByClassName('inicio__parrafo__dos')[0]
var InicioInferiorParrafoTres = document.getElementsByClassName('inicio__parrafo__tres')[0]

// --------- Variables Menu ---------- //
var subtituloMenu = document.getElementsByClassName('navbar__cabecera__contenido__subtitulo')[0]
var navLinkHome = document.getElementsByClassName('navbar__link__inicio')[0]
var navLinkAbout = document.getElementsByClassName('navbar__link__acerca')[0]
var navLinkservicios = document.getElementsByClassName('navbar__link__servicios')[0]
var navLinkPortfolio = document.getElementsByClassName('navbar__link__portafolio')[0]
var navLinkContacto = document.getElementsByClassName('navbar__link__contacto')[0]
var linkCvNav = document.getElementsByClassName('navbar__cv')[0]
var navCopyright = document.getElementsByClassName('navbar__license')[0]

// Efecto cambio de boton

var idiomaBtn = document.getElementsByClassName('languaje-btn')[0]

var cambio = false;

idiomaBtn.addEventListener('click', function(){
    cambio = !cambio;

    if(cambio){
        idiomaBtn.textContent = 'LENGUAJE: ENG'; // INGLES ==============
        // ------- Home --------- //
        EtiquetaInicio.textContent = 'Portfolio'
        TituloInicio.textContent = 'mi name is...'
        ProfesionInicio.textContent = 'and im'
        TextoTituloInicio.textContent = '"DISCOVER MY Skills: Explore MY PROJECTS!"'
        TextoParrafoInicio.textContent = '"HELLO USER! I WOULD LOVE TO INVITE YOU TO TAKE A LOOK AT MY PROJECTS IN MY WEB PORTFOLIO. IT WILL BE A PLEASURE TO SHOW YOU MY SKILLS AND ACHIEVEMENTS. I HOPE TO SEE YOU THERE!"'
        InicioBoton.textContent = 'SEE PROJECTS'
        InicioInferiorTituloUno.textContent = 'current technologies'
        InicioInferiorTituloDos.textContent = 'years of experience'
        InicioInferiorTituloTres.textContent = 'PROJECTS DONE'
        InicioInferiorParrafoUno.textContent = 'LANGUAGES, LIBRARIES, FRAMEWORKS, CONTENT MANAGEMENT, ETC'
        InicioInferiorParrafoDos.textContent = 'WORKING AND LEARNING WEB KNOWLEDGE'
        InicioInferiorParrafoTres.textContent = 'SINCE THE CREATION OF LANDING PAGES, STORES AND WEB ACADEMIES.'
        
        // ------- Memu --------- //
        subtituloMenu.textContent = 'EXPLORE INNOVATION AND CREATIVITY THROUGH ONE CLICK'
        navLinkHome.textContent = 'HOME'
        navLinkAbout.textContent = '¿ABOUT ME?'
        navLinkservicios.textContent = 'SERVICES'
        navLinkPortfolio.textContent = 'PORTFOLIO'
        navLinkContacto.textContent = 'CONTACT ME'
        linkCvNav.textContent = 'DOWNLOAD CV'
        navCopyright.textContent = '@2023 Copyright | All rights reserved'


    }else if(!cambio){
        idiomaBtn.textContent = 'IDIOMA: ESP'; // ESPAÑOL ==============
        // ------- Home --------- //
        EtiquetaInicio.textContent = 'Portafolio'
        TituloInicio.textContent = 'mi nombre es...'
        ProfesionInicio.textContent = 'Y soy'
        TextoTituloInicio.textContent = '"DESCUBRE MIS habilidades: ¡Explora MIS PROYECTOS!"'
        TextoParrafoInicio.textContent = '"¡HOLA USUARIO! ME ENCANTARÍA INVITARTE A ECHAR UN VISTAZO A MIS PROYECTOS EN MI PORTAFOLIO WEB. SERÁ UN PLACER MOSTRARTE MIS HABILIDADES Y LOGROS. ¡ESPERO VERTE ALLÍ!"'
        InicioBoton.textContent = 'VER PROYECTOS'
        InicioInferiorTituloUno.textContent = 'TECNOLOGIAS ACTUALES'
        InicioInferiorTituloDos.textContent = 'AÑOS DE EXPERIENCIA'
        InicioInferiorTituloTres.textContent = 'PROYECTOS HECHOS'
        InicioInferiorParrafoUno.textContent = 'LENGUAJES, LIBRERIAS, FRAMEWORKS, GESTION DE CONTENIDO, ETC'
        InicioInferiorParrafoDos.textContent = 'TRABAJANDO Y APRENDIENDO CONOCIMIENTOS WEB'
        InicioInferiorParrafoTres.textContent = 'DESDE CREACIÓN DE LANDING PAGES, TIENDAS Y ACADEMIAS WEB.'

        // ------- Memu --------- //
        subtituloMenu.textContent = 'EXPLORA LA INNOVACIÓN Y CREATIVIDAD A TRAVÉS DE UN SOLO CLIC'
        navLinkHome.textContent = 'INICIO'
        navLinkAbout.textContent = '¿QUIEN SOY?'
        navLinkservicios.textContent = 'SERVICIOS'
        navLinkPortfolio.textContent = 'PORTAFOLIO'
        navLinkContacto.textContent = 'CONTACTAME'
        linkCvNav.textContent = 'DESCARGAR CV'
        navCopyright.textContent = '@2023 Copyright | TODOS LOS DERECHOS RESERVADOS'
    }
})
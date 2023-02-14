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

// ---------- Variables About ----------- //
var tituloAbout = document.getElementsByClassName('about-titulo')[0]
var subtituloAbout = document.getElementsByClassName('about-parrafo')[0]
var EtiquetaAbout =document.getElementsByClassName('about-etiquetas')[0]
var TargetasTituloAbout = document.getElementsByClassName('about-targetas-titulo')[0]
var TargetasParrafoAbout = document.getElementsByClassName('about-targetas-subtitulo')[0]
var DescripcionAboutTitulo = document.getElementsByClassName('about-descripcion-titulo')[0]
var DescripcionAboutParrafo = document.getElementsByClassName('about-descripcion-parrafo')[0]
var tablaAboutEdad = document.getElementsByClassName('about-edad')[0]
var tablaAboutAños = document.getElementsByClassName('about-edad-actual')[0]
var tablaAboutIngles = document.getElementsByClassName('about-ingles')[0]
var tablaAboutNivel = document.getElementsByClassName('about-nivel')[0]
var tablaAboutEducacion = document.getElementsByClassName('about-educacion')[0]
var tablaAboutTecnica = document.getElementsByClassName('about-tecnico')[0]
var tablaAboutCiudad = document.getElementsByClassName('about-ciudad')[0]
var tablaAboutBogota = document.getElementsByClassName('about-bogota')[0]
var tablaAboutNumero = document.getElementsByClassName('about-telefono')[0]
var tablaAboutTelefono = document.getElementsByClassName('about-numero')[0]
var tablaAboutCorreo = document.getElementsByClassName('about-email')[0]
var tablaAboutEmail = document.getElementsByClassName('about-correo')[0]
var tablaAboutAfinacion = document.getElementsByClassName('about-afinación')[0]
var tablaAboutGustos = document.getElementsByClassName('about-gustos')[0]
var tablaAboutFortalezas = document.getElementsByClassName('about-fortalezas')[0]
var tablaAboutFuerzas = document.getElementsByClassName('about-fuerzas')[0]
var AboutBtnTwo = document.getElementsByClassName('about-right-btn')[0]
var AboutBtnThree = document.getElementsByClassName('about-right-link')[0]





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

        // ------- About --------- //
        tituloAbout.innerHTML = 'KN<br>OW<br>ME!!'
        subtituloAbout.textContent = '"WEB PROGRAMMING IS THE SOLID FOUNDATION TO BUILD A BRIGHT DIGITAL FUTURE AND FULL OF OPPORTUNITIES."'
        EtiquetaAbout.textContent =  'LEARN / PROGRAM / ENJOY'
        TargetasTituloAbout.textContent = 'SEE PORTFOLIO'
        TargetasParrafoAbout.textContent = 'FIND MORE INFORMATION ABOUT MY KNOWLEDGE IN MY PROJECTS'
        DescripcionAboutTitulo.textContent = 'ABOUT ME'
        DescripcionAboutParrafo.innerHTML = '"I am <strong class="change-color">Daniel Gómez</strong>, I am <strong class="change-color">19 years old</strong> and my passion for <strong class="change-color" ">Programming</strong> and <strong class="change-color">Design</strong> has led me to have <strong class="change-color">2 years of experience</strong> in the field I am passionate about technology and strive to improve my <strong class="change-color">web development</strong> skills on a daily basis, with the goal of creating innovative solutions and making my mark in the digital world. "</p>'
        tablaAboutEdad.textContent = 'AGE'
        tablaAboutAños.textContent = '19 YEARS'
        tablaAboutEducacion.textContent = 'EDUCATION'
        tablaAboutTecnica.textContent = 'technique'
        tablaAboutIngles.textContent = 'LEVEL'
        tablaAboutNumero.textContent = 'NUMBER'
        tablaAboutCorreo.textContent = 'EMAIL'
        tablaAboutAfinacion.textContent = 'TUNINGS'
        tablaAboutFuerzas.textContent = 'CONSTANCE - DISCIPLINE - LEADERSHIP'
        AboutBtnTwo.textContent = 'MORE INFORMATION'
        AboutBtnThree.textContent = 'SEE EXPERIENCE'

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

        // ------- About --------- //
        tituloAbout.innerHTML = 'CON <br> OCE <br> ME!!'
        subtituloAbout.textContent = '"LA PROGRAMACIÓN WEB ES LA BASE SÓLIDA PARA CONSTRUIR UN FUTURO DIGITAL BRILLANTE Y LLENO DE OPORTUNIDADES."'
        EtiquetaAbout.textContent = 'APRENDE / PROGRAMA / DISFRUTA'
        TargetasTituloAbout.textContent = 'VER PORTAFOLIO'
        TargetasParrafoAbout.textContent = 'ENCUENTRA MAS INFORMACIÓN SOBRE MIS CONOCIMIENTOS EN MIS PROYECTOS'
        DescripcionAboutTitulo.textContent = 'ACERCA DE MI'
        DescripcionAboutParrafo.innerHTML = '"Soy <strong class="change-color">Daniel Gómez</strong>, tengo <strong class="change-color">19 años</strong> y mi pasión por la <strong class="change-color">programación</strong> y el <strong class="change-color">Diseño</strong> me ha llevado a tener <strong class="change-color">2 años de experiencia</strong> en el campo. Me apasiona la tecnología y me esfuerzo por mejorar mis habilidades en el <strong class="change-color">desarrollo web</strong> día a día, con el objetivo de crear soluciones innovadoras y dejar mi huella en el mundo digital."</p>'
        tablaAboutEdad.textContent = 'EDAD'
        tablaAboutAños.textContent = '19 AÑOS'
        tablaAboutEducacion.textContent = 'EDUCACIÓN'
        tablaAboutTecnica.textContent = 'TECNICO'
        tablaAboutIngles.textContent = 'NIVEL'
        tablaAboutNumero.textContent = 'NUMERO'
        tablaAboutCorreo.textContent = 'CORREO'
        tablaAboutAfinacion.textContent = 'AFINACIÓNES'
        tablaAboutFortalezas.textContent = 'FORTALEZAS'
        AboutBtnTwo.textContent = 'MAS INFORMACION'
        tablaAboutFuerzas.textContent = 'CONSTANCIA - DISCIPLINA - LIDERAZGO'
        AboutBtnThree.textContent = 'VER EXPERIENCIA'
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
})
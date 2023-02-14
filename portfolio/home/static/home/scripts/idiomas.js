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

// ---------- Variables Experience ----------- //
var ExperienciaTituloEstudios = document.getElementsByClassName('experience-titulo-estudios')[0]
var ExperienciaTituloTrabajos = document.getElementsByClassName('experience-titulo-trabajos')[0]
var ExperienciaEtiquetaEstudios = document.getElementsByClassName('experience-etiqueta-estudios')[0]
var ExterienciaEtiquetaTrabajos = document.getElementsByClassName('experience-etiqueta-trabajos')[0]
var ExperienciaSubtituloEstudios = document.getElementsByClassName('experiencia-subtitulo-estudios')[0]
var ExperienciaSubtituloTrabajos = document.getElementsByClassName('experiencia-subtitulo-trabajos')[0]
var ExperienciaCajaUnoTitulo = document.getElementsByClassName('experience-title-one')[0]
var ExperienciaCajaDosTitulo = document.getElementsByClassName('experience-title-two')[0]
var ExperienciaCajaTresTitulo = document.getElementsByClassName('experience-title-three')[0]
var ExperienciaCajaCuatroTitulo = document.getElementsByClassName('experience-title-four')[0]
var ExperienciaCajaUnoParrafo = document.getElementsByClassName('experience-text-one')[0]
var ExperienciaCajaDosParrafo = document.getElementsByClassName('experience-text-two')[0]
var ExperienciaCajaTresParrafo = document.getElementsByClassName('experience-text-three')[0]
var ExperienciaCajaCuatroParrafo = document.getElementsByClassName('experience-text-four')[0]

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
        tablaAboutCiudad.textContent = 'CITY'
        
        // ------- Experiencia --------- //
        ExperienciaSubtituloEstudios.textContent = 'KNOW MI TRAINING'
        ExperienciaTituloEstudios.textContent = 'STUDIES'
        ExperienciaEtiquetaEstudios.textContent = 'PORTFOLIO | STUDIES'
        ExperienciaTituloTrabajos.textContent = 'EXPERIENCE'
        ExperienciaSubtituloTrabajos.textContent = 'KNOW MY SKILL'
        ExterienciaEtiquetaTrabajos.textContent = 'PORTFOLIO | JOBS'
        ExperienciaCajaUnoTitulo.textContent = 'Bootcamp - Full stack web development - Programate Academy'
        ExperienciaCajaUnoParrafo.textContent = 'As a graduate of this technology training, I am proud to have been in this hard and continuous learning program in the field of technology. I have spent much of my time improving my skills and expanding my knowledge in web development. I perform fabulously in managing the creation and design of web interfaces and I am always looking for new challenges and opportunities to continue growing professionally. I can easily perform both frontend and backend.'
        ExperienciaCajaDosTitulo.textContent = 'Courses - Continuous learning'
        ExperienciaCajaDosParrafo.textContent = 'I have been a fan of technology since the moment I set out as a child that this would be my thing. Once I finished my academic training I began to learn technologies and content managers related to web development independently through applications such as youtube, crehana, udemy, etc.'
        ExperienciaCajaTresTitulo.textContent = 'TRADINGBLACK - Wordpress Developer'
        ExperienciaCajaTresParrafo.textContent = 'Tradingblack is an online academy whose focus is financial investments, trading, forex, etc. My work within this business was to develop, design and manage everything necessary to have an academy of online courses. Make publicity and information relevant to it, etc.'
        ExperienciaCajaCuatroTitulo.textContent = 'PROGRAMATE ACADEMY - Wordpress Developer'
        ExperienciaCajaCuatroParrafo.textContent = 'Programate Academy is an inclusive and supportive programming school that trains people so that they can develop in the ICT area. My work within this academy was to correct errors and create updated information within its website, improving aesthetics, filling content, etc.'









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
        tablaAboutCiudad.textContent = 'CIUDAD'

        // ------- Experiencia --------- //
        ExperienciaSubtituloEstudios.textContent = 'CONOCE MI FORMACIÓN'
        ExperienciaTituloEstudios.textContent = 'ESTUDIOS'
        ExperienciaEtiquetaEstudios.textContent = 'PORTAFOLIO | EDUCACIÓN'
        ExperienciaTituloTrabajos.textContent = 'EXPERIENCIA'
        ExperienciaSubtituloTrabajos.textContent = 'CONOCE MI HABILIDAD'
        ExterienciaEtiquetaTrabajos.textContent = 'PORTAFOLIO | TRABAJOS'
        ExperienciaCajaUnoTitulo.textContent = 'Bootcamp - Desarrollo web full stack - Programate Academy'
        ExperienciaCajaUnoParrafo.textContent = 'Como egresado de esta formacion tecnologica, me enorgullece haber estado en este programa de aprendizaje arduo y continuo en el campo de la tecnología. He dedicado gran parte de mi tiempo a mejorar mis habilidades y ampliar mis conocimientos en desarrollo web. Me desempeño fabulosamente en el manejo de creacion y diseño de interfaces web y siempre estoy buscando nuevos desafíos y oportunidades para seguir creciendo profesionalmente. Puedo desempeñarme facilmente tanto en frontend como en backend.'
        ExperienciaCajaDosTitulo.textContent = 'Cursos - Aprendizaje continuo'
        ExperienciaCajaDosParrafo.textContent = 'He sido fanatico de la tecnologia desde el momento que de niño me propuse que esto seria lo mio. Una vez acabe mi formación academica empece a aprender autonomamente tecnologias y gestores de contenido relacionadas al desarrollo web mediante aplicaciones como youtube, crehana, udemy, etc.'
        ExperienciaCajaTresTitulo.textContent = 'TRADINGBLACK - Desarrollador Wordpress'
        ExperienciaCajaTresParrafo.textContent = 'Tradingblack es una academia online cuyo enfoque son las inversiones financieras, trading, forex, etc. Mi labor dentro de este negocio fue desarrollar, diseñar y gestionar todo lo nesesario para tener una academia de cursos en linea. Realizar publicidad y informacion relevante para esta, etc.'
        ExperienciaCajaCuatroTitulo.textContent = 'PROGRAMATE ACADEMY - Desarrollador Wordpress'
        ExperienciaCajaCuatroParrafo.textContent = 'Programate Academy es una escuela de programación inclusiva y solidaria que forma personas para que puedan desarrollarse en el area TIC. Mi labor dentro de esta academia fue corregir errores y crear información actualizada dentro de su sitio web, mejorando estetica, llenando contenido, etc.'

    }
})
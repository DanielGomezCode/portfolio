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
    }
})
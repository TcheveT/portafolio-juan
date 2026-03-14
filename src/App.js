import React, { useRef, useEffect, useState } from 'react';

import './css/App.css';
import imgEstudio from './images/university.png'
import imgHtml from './images/html.png'
import imgJs from './images/javasc.png'
import imgReact from './images/react.png'
import imgBug from './images/bugs.jpg'
import imgNode from './images/node.png'
import imgCss from './images/css.png'
import imgDeve from './images/desarrollo.png'
import imgElectron from './images/electron.png'
import imgGitHub from './images/github.png'
import imgSql from './images/sql.png'
import imgMuwieri from './images/muwieri.png'
import imgUbicacion from './images/ubicacion.png'
import imgLink from './images/link.png'
import imgEmail from './images/email.png'
import imgMenos from './images/menos.png'
import imgMas from './images/mas.png'
import imgCheve from './images/cheve.png'
import imgCarro from './images/lavado.png'
import ImageCarousel from './assets/components/carrusel';
import imgInicio from './images/inicioSistema.png'
import imgSesion from './images/iniciarSe.png'
import imgGraficas from './images/graficas.png'
import imgRegistro from './images/registro.png'
import imgSunny from './images/sunny.png'
import imgClima from './images/appClima.png'
import imgTrivia from './images/trivia.png'
import imgEmailBlanco from './images/emailBlanco.png'
import gifMenu from './images/menu.png'
import imgSalirX from './images/salirX.png'
import imgLike from './images/like.png'
import imgLikeN from './images/likeN.png'


const images = [
  imgInicio,
  imgSesion,
  imgGraficas,
  imgRegistro
];
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const contentRefs = useRef([]);
  const [escritorioVisible, setEscritorioVisible] = useState(false);
  const [vistaPlataforma,   setVistaPlataforma]   = useState(false);
  const [vistaMovil,        setVistaMovil]        = useState(false);
  const [vistaWeb,          setVistaWeb]          = useState(false);
  const [vistaLaptop,       setVistaLaptop]       = useState(false);
  const [isCarouselOpen,    setIsCarouselOpen]    = useState(false);
  const [hoverProyecto,     setHoverProyecto]     = useState(false);
  const [hoverClima,        setHoverClima]        = useState(false);
  const [hoverTrivia,       setHoverTrivia]       = useState(false);
  const [menuVisible,       setMenuVisible]       = useState(false);
  const [barrasVisible,     setBarrasVisible]     = useState(false);
  const [hoverLike,         setHoverLike]         = useState(false);
//2360

  const handleScroll = () => {
    if (containerRef.current) {
      const top = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      console.log('sii')
      if (top <= windowHeight) {
        
        setTimeout(() => {
          setEscritorioVisible(true)
        }, 300)
        window.removeEventListener('scroll', handleScroll);
      }
    }
  };
 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount in case already in view
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const controlVistasExperiencia = (proyecto) =>{

    setVistaPlataforma(proyecto   === 'plataforma' ? !vistaPlataforma: false);
    setEscritorioVisible(proyecto === 'escritorio' ? !escritorioVisible: false);
    setVistaLaptop(proyecto       === 'laptop'     ? !vistaLaptop: false);
    setVistaMovil(proyecto        === 'movil'      ? !vistaMovil: false);
    setVistaWeb(proyecto          === 'web'        ? !vistaWeb: false);
  }
  const openCarousel = () => {
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };
  const abrirClima = () =>{
    window.open(`${process.env.PUBLIC_URL}/proyectClima/index.html`, '_blank');
  }
  const abrirTrivia = () => {
    window.open('https://echeve7.github.io/react_trivia/', '_blank');
  }
  const abrirSunny = () => {
    window.open(`${process.env.PUBLIC_URL}/proyectoSunny/index.html`, '_blank');
  }
  const enviarEmail = () => {
    window.location.href = 'mailto:juanecheveste9@gmail.com';
  }


  const vistaScroll = (sectionId, event) => {
    
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollMenu = (sectionId) => {
    setMenuVisible(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.contenedor-lenguajes');
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.5;

      if (sectionPosition < screenPosition) {
        // Verifica si los elementos existen antes de intentar cambiar el estilo
        setTimeout(() => {
          setBarrasVisible(true);
        }, 500)
        
        const htmlBar = document.getElementById('myProgressBarHtml');
        const cssBar = document.getElementById('myProgressBarCss');
        const jsBar = document.getElementById('myProgressBarJs');
        const elecBar = document.getElementById('myProgressBarElec');
        const reactBar = document.getElementById('myProgressBarReact');
        const nodeBar = document.getElementById('myProgressBarNode');
        const gitHubBar = document.getElementById('myProgressBarGitHub');
        const sqlBar = document.getElementById('myProgressBarSql');

        if (htmlBar) htmlBar.style.width     = '80%';
        if (cssBar) cssBar.style.width       = '80%';
        if (jsBar) jsBar.style.width         = '50%';
        if (elecBar) elecBar.style.width     = '50%';
        if (reactBar) reactBar.style.width   = '40%';
        if (nodeBar) nodeBar.style.width     = '30%';
        if (gitHubBar) gitHubBar.style.width = '40%';
        if (sqlBar) sqlBar.style.width       = '40%';
      }

    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const setRef = (ref, index) => {
    contentRefs.current[index] = ref;
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      contentRefs.current.forEach((div, index) => {
        if (div) {
          const top = div.getBoundingClientRect().top;

          if (top <= windowHeight) {
            setTimeout(() => {
              div.classList.add('visible');
            }, index * 200); // Añade un pequeño retraso para cada div
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <>
   <div className='contenedor-principal'>
    <header>
        {/* <figure>
          <img></img>
        </figure> */}
        <h2>JPEH</h2>
        {
          menuVisible ? 
            <nav className='menu-flotante'>
              <ul>
                <li onClick={() => {scrollMenu('presentacion-juan'); toggleMenu() }}>
                  Presentación
                </li>
                <li onClick={() => {scrollMenu('habilidades-juan'); toggleMenu()}  } >
                  Habilidades
                </li>
                <li onClick={() => {scrollMenu('seccion-proyecto'); toggleMenu()}  }>
                  Experiencia
                </li>
                <li onClick={() => {scrollMenu('proyectos-juan');   toggleMenu()}  }>
                  Proyectos
                </li>
              </ul>
            </nav>
            : ''
        }
         <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={()=> {toggleMenu(); setMenuVisible(!menuVisible) }}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        {/*<img src={!menuVisible ? gifMenu : imgSalirX} onClick={() => setMenuVisible(!menuVisible)}></img>*/}
    </header>
      <div className='frontend-dev'>
      
          <p className='movimiento-izquierda'><b>Hola soy Juan, desarrollador frontend</b> 
          <br></br> Apasionado por la creación 
            de páginas web que <br></br> no solo sean estéticamente atractivas, 
            sino <br></br>también intuitivas y fáciles de navegar. </p>
          {/*  <br></br>Mi enfoque 
          está en diseñar sitios que ofrezcan una experiencia de usuario 
          fluida y sean totalmente adaptables a cualquier dispositivo. */}
        
        <figure className='movimiento-derecha'>
          <img src={imgCheve}></img>
        </figure>
      </div>
   </div>


    <div className='container-presentacion' id='presentacion-juan' >
      <div className='presentacion' >
        <h2 ref={(ref) => setRef(ref, 1)}> ¡Gusto en conocerte! </h2>
        <p ref={(ref) => setRef(ref, 2)}>Soy egresado de la Universidad Autónoma de Nayarit, donde estudié 
          la licenciatura en Sistemas Computacionales. Me he enfocado principalmente 
          en las tecnologías de la web, aunque siempre estoy abierto a aprender y 
          explorar nuevas tecnologías.
        </p>
        {/* <p ref={(ref) => setRef(ref, 3)}>
          Actualmente, estoy en búsqueda de empleo en el área de tecnología. En mi tiempo 
          libre, disfruto ver deportes, películas y jugar videojuegos.
        </p>  */}
      </div>
    </div>
    <div className='mis-habilidades'>
      <div className='contenedor-habilidades' id='habilidades-juan' ref={(ref) => setRef(ref, 9)}>
        <div className='contenedor-info-head'>
          <figure>
            <img src={imgEstudio}></img>
          </figure>
          <h2>Formación</h2>
        </div>

        <div className='contenedor-info'>
          <h3>Universidad Autónoma de Nayarit</h3>
          <p>Lic. en Sistemas Computacionales</p>
          <p>2017 - 2023</p>
        </div>
        <div className='contenedor-info'>
          <h3>Ingles Intermedio</h3>
          <p>Vocablo Idiomas Tepic</p>
        </div>
        <div className='contenedor-info'>
          <h3>Cursos Completados</h3>
          <a target="_blank" href="https://platzi.com/p/cheve/">Historial de Cursos</a>
        </div>
      </div>
            {/* envolver titulo y la imagen para que no se muevan  */}
      <div className='contenedor-habilidades' ref={(ref) => setRef(ref, 10)}>
        <div className='contenedor-info-head'>
          <figure>
            <img src={imgDeve }></img>
          </figure>
          <h2>Skills</h2>
        </div>
        <div className='contenedor-lenguajes'>
          {/* <h3>Tecnologias Que Practico</h3> */}
          <div className={!barrasVisible ? 'contenedor-barra' : 'contenedor-barra space-even'}>
            <div className='contenedor-iconos'>
              <img src={imgHtml}></img>
              <p>HTML</p>
              
            </div>
            {barrasVisible ? 
              <div className="progress-container">
                <div className="progress-bar" id="myProgressBarHtml"></div>
                <p className="progress-text">80%</p>
              </div>
              :''
            }
            
            
          </div>
          <div className={!barrasVisible ? 'contenedor-barra' : 'contenedor-barra space-even'}>
            
            <div className='contenedor-iconos'>
              <img src={imgCss}></img>
              <p>CSS</p>
              
            </div>
            {
              barrasVisible ?
              <div className="progress-container">
                <div className="progress-bar" id="myProgressBarCss"></div>
                <p className="progress-text">80%</p>
              </div> : ''
            }
            
            
          </div>
          <div className={!barrasVisible ? 'contenedor-barra' : 'contenedor-barra space-even'}>
            
            <div className='contenedor-iconos'>
              <img src={imgJs}></img>
              <p>JavaScript</p>
              
            </div>
            {
              barrasVisible ?
                <div className="progress-container">
                  <div className="progress-bar" id="myProgressBarJs"></div>
                  <p className="progress-text">50%</p>
                </div>
              :''
            }
            
            
          </div>
          <div className={!barrasVisible ? 'contenedor-barra' : 'contenedor-barra space-even'}>
            
            <div className='contenedor-iconos'>
              <img src={imgElectron}></img>
              <p>Electron</p>
              
            </div>

            {
              barrasVisible ?
                <div className="progress-container">
                  <div className="progress-bar" id="myProgressBarElec"></div>
                  <p className="progress-text">50%</p>
                </div>
              :''
            }
            
            
          </div>
          <div className={!barrasVisible ? 'contenedor-barra' : 'contenedor-barra space-even'}>
            
            <div className='contenedor-iconos'>
              <img src={imgReact}></img>
              <p>React</p>
              
            </div>

            {
              barrasVisible ?
                <div className="progress-container">
                  <div className="progress-bar" id="myProgressBarReact"></div>
                  <p className="progress-text">40%</p>
                </div>
              : ''
            }
            
            
          </div>
          <div className={!barrasVisible ? 'contenedor-barra' : 'contenedor-barra space-even'}>
            
            <div className='contenedor-iconos '>
              <img id='node-img' src={imgNode}></img>
              <p>Node Js</p>
              
            </div>
            {
              barrasVisible ? 
                <div className="progress-container">
                <div className="progress-bar" id="myProgressBarNode"></div>
                <p className="progress-text" width={30}>30%</p>
                </div>
              :''
            }
            
            
          </div>
          <div className={!barrasVisible ? 'contenedor-barra' : 'contenedor-barra space-even'}>
            
            <div className='contenedor-iconos '>
              <img id='node-img' src={imgGitHub}></img>
              <p>GitHub</p>
              
            </div>
            {
              barrasVisible ? 
              <div className="progress-container">
                <div className="progress-bar" id="myProgressBarGitHub"></div>
                <p className="progress-text">40%</p>
              </div>
              : ''
            }
           
            
          </div>
          <div className={!barrasVisible ? 'contenedor-barra' : 'contenedor-barra space-even'}>
            
            <div className='contenedor-iconos '>
              <img id='node-img' src={imgSql}></img>
              <p>SQL</p>
              
            </div>
            {
              barrasVisible ?
                <div className="progress-container">
                  <div className="progress-bar" id="myProgressBarSql"></div>
                  <p className="progress-text">40%</p>
                </div>
              :''
            }
            
            
          </div>
          
        </div>
        
      </div>
      
    </div>
    <div className='experiencia' id='seccion-proyecto'>
      {
        isCarouselOpen? <ImageCarousel images={images} isOpen={isCarouselOpen} onClose={closeCarousel}/>:''
      }
      
        <h2 ><b>Experiencia</b> <br></br> Profesional</h2>

        <div className='caja-experiencia' >
          <div className='caja-experiencia-head' >
            <p  ref={containerRef}>Desarrollo de Sistema de Escritorio </p>
            <p>Diciembre 2025 - Febrero 2026</p>
            <img src={!escritorioVisible ? imgMas :imgMenos} onClick={() => controlVistasExperiencia('escritorio')}></img>
          </div>
          <div className={` caja-experiencia-body  ${escritorioVisible ? 'caja-experiencia-body caja-experiencia-visible' :''} `}>
            <div className='caja-division' >
              <div className='caja-experiencia-acotaciones' >
                  {/* <img src={imgUbicacion}></img> 
                  <p>CICESE-UT3</p>  */}
                <p>Freelance</p>
                {/* <div className='caja-lista-acotaciones'>
                  <img  src={imgLink}></img> 
                  <a  className='carrusel-vista'  onClick={ (e) => {vistaScroll('seccion-proyecto', e);openCarousel()}} >Ver Proyecto</a>
                </div> */}
                
              </div>
              <b>Objetivo: </b>
              <p className='texto-informacion'>
                Sistema de escritorio desarrollado para gestionar y optimizar las operaciones de 
                un autolavado, similar a un punto de venta.
              </p><br></br>
              <b>Contexto: </b>
              <p>Proyecto personal desarrollado para su comercialización, 
                destinado a mejorar la eficiencia y el control en autolavados.</p><br></br>
              <b>Tareas Realizadas:</b>
              <p className='lista-tareas'>-Desarrollo del sistema completo desde cero.</p>
              <p className='lista-tareas'>-Creación e implementación de la base de datos.</p>
              <p className='lista-tareas'>-Creación de la interfaz de usuario.</p>
              <p className='lista-tareas'>-Pruebas exhaustivas.</p>
              <br></br>
              {/* <div className='contenedor-referencia'>
                <p><b>Referencia:</b> Dr. Juan Martinez Miranda - Responsable técnico</p>
                <figure className='img-email'>
                  <a href="mailto:jmiranda@cicese.mx"><img  src={imgEmail}></img></a>
                </figure>
              </div> */}
              
              <div className='caja-experiencia-tecnologias'>
                <p>JavaScript</p>
                <p>Electron</p>
                <p>React</p>
                <p>JSX</p>
                <p>CSS</p>
                <p>SQLite</p>
                <p>SweetAlert</p>
                <p>Chart.js</p>
              </div>

            </div>
            <figure className='img-app'> 
              <img  src={imgCarro}></img>
            </figure>
            

          </div>
        </div>

        <div className='caja-experiencia'>
          <div className='caja-experiencia-head'>
            <p>Desarrollo de Sitio Web</p>
            {/* <p>Muwieri</p> */}
            <p>Septiembre 2024</p>
            <img src={!vistaWeb ? imgMas :imgMenos} onClick={()=> controlVistasExperiencia('web') }></img>
          </div>
          <div className={` caja-experiencia-body  ${vistaWeb ? 'caja-experiencia-visible' :''}`}>
            <div className='caja-division'>
              <div className='caja-experiencia-acotaciones'>
                <div className='caja-lista-acotaciones'>
                  <img src={imgUbicacion}></img> 
                  <p>BugStudio</p> 
                </div> 
                <p>Freelance</p>
                <div className='caja-lista-acotaciones'>
                  <img src={imgLink}></img> 
                  <a href="https://bugstudiomx.com/" target="_blank">Ver Proyecto</a>
                </div>
                
              </div>
              <b>Objetivo: </b>
              <p className='texto-informacion'>
              Crear una página web estática para una agencia de marketing que se adapte a las distintas resoluciones
              de dispositivos modernos, mostrando sus servicios y un formulario de contacto que envía mensajes
              a través de WhatsApp.
              </p><br></br>
              <b>Tareas Realizadas:</b>
              <p className='lista-tareas'>-Desarrollo desde cero.</p>
              <p className='lista-tareas'>-Implementación de diseño responsivo para adaptarse a distintos dispositivos.</p>
              <p className='lista-tareas'>-Configuración de un formulario que envía mensajes a WhatsApp.</p>
              <p className='lista-tareas'>-Pruebas de compatibilidad y rendimiento.</p>
              <p className='lista-tareas'>-Publicación del sitio utilizando Hostinger.</p>
              <br></br>
              
              
              <div className='caja-experiencia-tecnologias'>
                <p>JavaScript</p>
                <p>React</p>
                <p>HTML</p>
                <p>CSS</p>

              </div>

            </div>
            <figure className='img-app'> 
              <img className='icon-bug'  src={imgBug}></img>
              <figcaption></figcaption>
            </figure>
          </div>
        </div>

        

        <div className='caja-experiencia'>
          <div className='caja-experiencia-head'>
            <p>Plataforma Digital</p>
            {/* <p>Muwieri</p> */}
            <p>Diciembre 2022 - Febrero 2023</p>
            <img src={!vistaPlataforma ? imgMas :imgMenos} onClick={()=> controlVistasExperiencia('plataforma') }></img>
          </div>
          <div className={` caja-experiencia-body  ${vistaPlataforma ? 'caja-experiencia-visible' :''}`}>
            <div className='caja-division'>
              <div className='caja-experiencia-acotaciones'>
                <div className='caja-lista-acotaciones'>
                  <img src={imgUbicacion}></img> 
                  <p>CICESE-UAT</p> 
                </div> 
                <p>Colaboración</p>
                <div className='caja-lista-acotaciones'>
                  <img src={imgLink}></img> 
                  <a href="https://todos.cicese.mx/sitio/noticia.php?t=texto&stat=Ci&n=1894" target="_blank">Ver Proyecto</a>
                </div>
                
              </div>
              <b>Objetivo: </b>
              <p className='texto-informacion'>
                Mejora de plataforma digital que ayuda al Tamizaje, Seguimiento y Vigilancia Epidemiológica 
                de Problemas de Salud Mental y Adicciones, mediante la inclusión de mapas, gráficas y mejoras 
                en la interfaz de usuario.
              </p><br></br>
              <b>Tareas Realizadas:</b>
              <p className='lista-tareas'>-Implementación de mapas con OpenLayers para señalar las ubicaciones de las escuelas.</p>
              <p className='lista-tareas'>-Visualización de datos a través de gráficas usando Chart.js.</p>
              <p className='lista-tareas'>-Adición de pop-ups.</p>
              <p className='lista-tareas'>-Desarrollo de una interfaz para la configuración de las gráficas.</p>
              <p className='lista-tareas'>-Pruebas.</p>
              <p className='lista-tareas'>-Implementación.</p>
              <p className='lista-tareas'>-Documentación.</p>
              <br></br>
              <div className='contenedor-referencia'>
                <p><b>Referencia:</b> Dr. Juan Martinez Miranda - Responsable técnico</p>
                <figure className='img-email'>
                  <a href="mailto:jmiranda@cicese.mx"><img  src={imgEmail}></img></a>
                </figure>
              </div>
              
              <div className='caja-experiencia-tecnologias'>
                <p>JavaScript</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>GitHub</p>
                <p>OpenLayers</p>
                <p>Chart.js</p>
              </div>

            </div>
            <figure className='img-app'> 
              <img  src={imgMuwieri}></img>
              <figcaption>Muwieri</figcaption>
            </figure>
          </div>
        </div>

        <div className='caja-experiencia'>
          <div className='caja-experiencia-head'>
            <p>Desarrollo de Aplicación de Escritorio</p>
            {/* <p>Muwieri</p> */}
            <p>Octubre 2022 - Diciembre 2022</p>
            <img src={!vistaLaptop ?  imgMas: imgMenos} onClick={() => controlVistasExperiencia('laptop')}></img> 
          </div>
          <div className={` caja-experiencia-body  ${vistaLaptop ? 'caja-experiencia-visible' :''}`}>
            <div className='caja-division'>
              <div className='caja-experiencia-acotaciones'>
                <div className='caja-lista-acotaciones'>
                  <img src={imgUbicacion}></img> 
                  <p>CICESE-UAT</p>
                </div>
                 
                <p>Practicas Profesionales</p>
                <div className='caja-lista-acotaciones'>
                  <img src={imgLink}></img> 
                  <a href="https://ut3.cicese.mx/proyectos/9/muwieri-y-helpath" target="_blank">Ver Proyecto</a>
                </div>
                
              </div>
              <b>Objetivo: </b>
              <p className='texto-informacion'>
                Finalizar el desarrollo de una aplicación de escritorio para 
                realizar tamizajes de salud mental y adicciones en estudiantes 
                de secundaria, asegurando su funcionalidad y estabilidad.
              </p><br></br>
              <b>Tareas Realizadas:</b>
              <p className='lista-tareas'>-Completar el desarrollo del sistema.</p>
              <p className='lista-tareas'>-Corregir errores existentes.</p>
              <p className='lista-tareas'>-Realizar pruebas exhaustivas.</p>
              <p className='lista-tareas'>-Implementación de cambios en la interfaz de usuario.</p>
              <p className='lista-tareas'>-Implementar el sistema en laptops.</p>
              <p className='lista-tareas'>-Documentación.</p>
              <br></br>
              <div className='contenedor-referencia'>
                <p><b>Referencia:</b> Dr. Juan Martinez Miranda - Responsable técnico</p>
                <figure className='img-email'>
                  <a href="mailto:jmiranda@cicese.mx"><img  src={imgEmail}></img></a>
                </figure>
              </div>
              
              <div className='caja-experiencia-tecnologias'>
                <p>JavaScript</p>
                <p>Electron</p>
                <p>Express</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>SQLite</p>
              </div>

            </div>
            <figure className='img-app'> 
              <img  src={imgMuwieri}></img>
              <figcaption>Muwieri</figcaption>
            </figure>
            

          </div>
        </div>

        <div className='caja-experiencia'>
          <div className='caja-experiencia-head'>
            <p>Desarrollo de Aplicación Móvil</p>
            {/* <p>Muwieri</p> */}
            <p>Agosto 2022 - Octubre 2022</p>
            <img src={!vistaMovil ? imgMas :imgMenos} onClick={() => controlVistasExperiencia('movil')}></img>
          </div>
          <div className={` caja-experiencia-body  ${vistaMovil ? 'caja-experiencia-visible' :''}`}>
            <div className='caja-division'>
              <div className='caja-experiencia-acotaciones'>
                <div className='caja-lista-acotaciones'>
                  <img src={imgUbicacion}></img> 
                  <p>CICESE-UAT</p>
                </div>
                
                <p>Practicas Profesionales</p>
                <div className='caja-lista-acotaciones'>
                  <img src={imgLink}></img> 
                  <a href="https://ut3.cicese.mx/proyectos/9/muwieri-y-helpath" target="_blank">Ver Proyecto</a>
                </div>
                
              </div>
              <b>Objetivo: </b>
              <p className='texto-informacion'>
                Adaptar un sistema de escritorio a una aplicación móvil 
                para facilitar el tamizaje de salud mental y adicciones 
                entre estudiantes de secundaria.
              </p><br></br>
              <b>Tareas Realizadas:</b>
              <p className='lista-tareas'>-Adaptación de un sistema de escritorio a una aplicación móvil desde cero.</p>
              <p className='lista-tareas'>-Creación e implementación de la base de datos.</p>
              <p className='lista-tareas'>-Integración con una API proporcionada por la institución para el 
                envío y recepción de datos.
              </p>
              <p className='lista-tareas'>-Implementación de cambios en la interfaz de usuario.</p>
              <p className='lista-tareas'>-Pruebas.</p>
              <p className='lista-tareas'>-Implementación.</p>
              <p className='lista-tareas'>-Documentación.</p>
              <br></br>
              <div className='contenedor-referencia'>
                <p><b>Referencia:</b> Dr. Juan Martinez Miranda - Responsable técnico</p>
                <figure className='img-email'>
                  <a href="mailto:jmiranda@cicese.mx"><img  src={imgEmail}></img></a>
                </figure>
              </div>
              
              <div className='caja-experiencia-tecnologias'>
                <p>JavaScript</p>
                <p>Apache Cordova</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>SQLite</p>
              </div>

            </div>
            <figure className='img-app'> 
              <img  src={imgMuwieri}></img>
              <figcaption>Muwieri</figcaption>
            </figure>
            

          </div>
        </div>
    </div>

    <div  className='container-presentacion proyectos-personales'>
      <div className='presentacion pre-proyectos' id='proyectos-juan'>
        <h2 ref={(ref) => setRef(ref, 4)}>Mis Proyectos </h2>
        <p ref={(ref) => setRef(ref, 5)}>A continuación, presento algunos de los proyectos personales que he desarrollado 
          para mejorar mis habilidades en el desarrollo web y la programación. Cada proyecto 
          me ha permitido explorar diferentes tecnologías y enfrentar nuevos desafíos, fortaleciendo 
          así mi conocimiento y experiencia en el campo.
        </p>
      </div>
    </div>
    <div className='contenedor-proyectos-personales'>
      <div onMouseOver={() => setHoverProyecto(true)} onMouseLeave={() => setHoverProyecto(false)} className='caja-proyectos' ref={(ref) => setRef(ref, 6)}>
        <figure>
          <img src={imgSunny}></img>
          {
            hoverProyecto ? 
            <div className='texto-descripcion-oculto'>
              <p>
                <b>Objetivo:</b><br></br>
                Demostrar habilidades en la creación de interfaces de usuario estáticas bien estructuradas, así 
                como la aplicación de estilos y diseño responsivo.
              </p>
            </div> : ''
          }
        </figure>
        <div className='descripcion-proyecto'>
          <p className='titulo-proyecto'>Reto de Frontend Mentor - Maquetado Web</p> 
          {/*         */}
          
          {
            hoverProyecto ? <p className='link-proyecto hover-underline' onClick={abrirSunny}>Ver Proyecto</p> : ''
          }
        </div>
        
      </div> 

      {/* <div onMouseOver={() => setHoverClima(true)} onMouseLeave={() => setHoverClima(false)} className='caja-proyectos' ref={(ref) => setRef(ref, 7)}>
        <figure>
          <img src={imgClima}></img>
          {
            hoverClima ? 
            <div className='texto-descripcion-oculto'>
              <p>
                <b>Objetivo:</b><br></br> 
                Desarrollar habilidades en la integración de APIs y 
                la manipulación del DOM mediante JavaScript, así como mejorar 
                la capacidad de crear interfaces interactivas y dinámicas.
              </p>
            </div> : ''
          }
        </figure>
        <div className='descripcion-proyecto'>
          <p className='titulo-proyecto'>Aplicación del Clima</p> 
          {/*         */}
          
          {/* {
            hoverClima ? <p className='link-proyecto hover-underline' onClick={abrirClima}>Ver Proyecto</p> : ''
          }
        </div> */}
        
      {/* </div>  */} 

      <div onMouseOver={() => setHoverTrivia(true)} onMouseLeave={() => setHoverTrivia(false)} className='caja-proyectos' ref={(ref) => setRef(ref, 8)}>
        <figure>
          <img src={imgTrivia}></img>
          {
            hoverTrivia ? 
            <div className='texto-descripcion-oculto'>
              <p>
                <b>Objetivo:</b><br></br>
                Fortalecer habilidades en el desarrollo de aplicaciones web modernas usando 
                React, manejo de estados y efectos, así como la integración y manejo de datos 
                provenientes de APIs externas.
              </p>
            </div> : ''
          }
        </figure>
        <div className='descripcion-proyecto'>
          <p className='titulo-proyecto'>Trivia de Peliculas</p> 
          {/*         */}
          
          {
            hoverTrivia ? <p className='link-proyecto hover-underline' onClick={abrirTrivia}>Ver Proyecto</p> : ''
          }
        </div>
        
      </div> 

    </div>
    <div className='contenedor-trabajemos'>
      <div className='trabajemos-junos'>
        <h2>Comencemos un Proyecto</h2>
        <p className='texto-tabajemos'>
          ¡Hola! Si tienes una idea en mente y necesitas darle vida, estaré encantado de ayudarte. <br></br> 
          ¡Trabajemos juntos y hagamos que tu proyecto sea una realidad! 🚀
        </p>
        <div className='caja-hagamoslo' onMouseOver={() => setHoverLike(true)} onMouseLeave={() => setHoverLike(false)} onClick={enviarEmail}>
          <img src={hoverLike ? imgLikeN : imgLike}></img>
          <p>Hagámoslo</p>
        </div>

      </div>
    </div>
    <footer>
      <h3>JPEH</h3>
      <div className='correo-footer' onClick={enviarEmail}>
        <img src={imgEmailBlanco} ></img>
        <p>juanecheveste9@gmail.com</p>
        
      </div>
      
      <p className='realizado-fecha'>Realizado en 2026</p>
    </footer>
   </>
  );
}

export default App;

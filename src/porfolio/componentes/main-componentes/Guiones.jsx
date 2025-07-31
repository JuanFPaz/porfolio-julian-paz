/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-absolute-path */
import { useState, useEffect, useRef } from 'react'
// Iconos
import youtube from './icons/utube.svg'

import './styles/Guiones.css'
const proyectosBotones = [
  {
    id: 0,
    titulo: 'Resumen Malèna',
    src: youtube
  },

  {
    id: 1,
    titulo: 'Resumen The Babysitter',
    src: youtube
  },
  {
    id: 2,
    titulo: 'Resumen Slither',
    src: youtube
  },
  {
    id: 3,
    titulo: 'Resumen Eden',
    src: youtube
  },

  {
    id: 4,
    titulo: 'Resumen 365 Días',
    src: youtube
  },
  {
    id: 5,
    titulo: 'Resumen Blody Hell',
    src: youtube
  },
  {
    id: 6,
    titulo: 'Resumen 3096 Days',
    src: youtube
  },

  {
    id: 7,
    titulo: 'Resumen Black Snake Moan',
    src: youtube
  }
]

const proyectosContenido = [
  {
    id: 0,
    titulo: 'Resumen Malèna',
    genero: 'Romance/Drama',
    año: '2000',
    canalName: 'El Pana Resumen',
    linkCanal: 'https://www.youtube.com/channel/UC48SiD4b1enoizobezFeO9A',
    link: 'https://www.youtube.com/embed/1NAQn9eaeqU?si=0VuOt_03wmvQOEeu',
    html: `
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Fuga nam eveniet nisi atque veritatis?</b> Dolorem explicabo, voluptatum doloribus placeat voluptates repellat quaerat perferendis, optio et eum enim asperiores quae excepturi.</p>
    `
  },
  {
    id: 1,
    titulo: 'Resumen The Babysitter',
    genero: 'Terror/Comedia',
    año: '2017',
    canalName: 'El Pana Resumen',
    linkCanal: 'https://www.youtube.com/channel/UC48SiD4b1enoizobezFeO9A',
    link: 'https://www.youtube.com/embed/kEJcXgrTfLs?si=MkncovvpJ7OirmWB',
    html: `
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Fuga nam eveniet nisi atque veritatis?</b> Dolorem explicabo, voluptatum doloribus placeat voluptates repellat quaerat perferendis, optio et eum enim asperiores quae excepturi.</p>
    `
  },
  {
    id: 2,
    titulo: 'Resumen Slither',
    genero: 'Terror/Accion',
    año: '2006',
    canalName: 'El Pana Resumen',
    linkCanal: 'https://www.youtube.com/channel/UC48SiD4b1enoizobezFeO9A',
    link: 'https://www.youtube.com/embed/K8LdD-c_0wg?si=HoDE-YRuibjT55Er',
    html: `
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Fuga nam eveniet nisi atque veritatis?</b> Dolorem explicabo, voluptatum doloribus placeat voluptates repellat quaerat perferendis, optio et eum enim asperiores quae excepturi.</p>
    `
  },
  {
    id: 3,
    titulo: 'Resumen Eden',
    genero: 'Suspenso/Crimen',
    año: '2012',
    canalName: 'El Pana Resumen',
    linkCanal: 'https://www.youtube.com/channel/UC48SiD4b1enoizobezFeO9A',
    link: 'https://www.youtube.com/embed/bX4AxLKLXHQ?si=zeHz-g88S1SM1afD',
    html: `
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Fuga nam eveniet nisi atque veritatis?</b> Dolorem explicabo, voluptatum doloribus placeat voluptates repellat quaerat perferendis, optio et eum enim asperiores quae excepturi.</p>
    `
  },
  {
    id: 4,
    titulo: 'Resumen 365 Días',
    genero: 'Romance/Suspenso',
    año: '2020',
    canalName: 'El Pana Resumen',
    linkCanal: 'https://www.youtube.com/channel/UC48SiD4b1enoizobezFeO9A',
    link: 'https://www.youtube.com/embed/H3IaV69-OZ8?si=u_PMBRShQ4ZR62RA',
    html: `
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Fuga nam eveniet nisi atque veritatis?</b> Dolorem explicabo, voluptatum doloribus placeat voluptates repellat quaerat perferendis, optio et eum enim asperiores quae excepturi.</p>
    `
  },
  {
    id: 5,
    titulo: 'Resumen Blody Hell',
    genero: 'Terror/Accion',
    año: '2020',
    canalName: 'El Pana Resumen',
    linkCanal: 'https://www.youtube.com/channel/UC48SiD4b1enoizobezFeO9A',
    link: 'https://www.youtube.com/embed/2jGovmXA3tE?si=09JakJsUe01aV9VS',
    html: `
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Fuga nam eveniet nisi atque veritatis?</b> Dolorem explicabo, voluptatum doloribus placeat voluptates repellat quaerat perferendis, optio et eum enim asperiores quae excepturi.</p>
    `
  },
  {
    id: 6,
    titulo: 'Resumen 3096 Days',
    genero: 'Crimen/Drama',
    año: '2013',
    canalName: 'El Pana Resumen',
    linkCanal: 'https://www.youtube.com/channel/UC48SiD4b1enoizobezFeO9A',
    link: 'https://www.youtube.com/embed/PSYRqTzZuRc?si=OZUr3GyzWo0BbdCt',
    html: `
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Fuga nam eveniet nisi atque veritatis?</b> Dolorem explicabo, voluptatum doloribus placeat voluptates repellat quaerat perferendis, optio et eum enim asperiores quae excepturi.</p>
    `
  },
  {
    id: 7,
    titulo: 'Resumen Black Snake Moan',
    genero: 'Suspenso/Musical',
    año: '2006',
    canalName: 'El Pana Resumen',
    linkCanal: 'https://www.youtube.com/channel/UC48SiD4b1enoizobezFeO9A',
    link: 'https://www.youtube.com/embed/7kJYCf0e6yU?si=k6B2aRXZS21wfpCc',
    html: `
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Fuga nam eveniet nisi atque veritatis?</b> Dolorem explicabo, voluptatum doloribus placeat voluptates repellat quaerat perferendis, optio et eum enim asperiores quae excepturi.</p>
    `
  }
]

function Proyectos ({ id }) {
  const [boton, setBoton] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) {
      console.log('Ref es :' + ref)
    } else {
      ref.current.innerHTML = proyectosContenido[boton].html
    }
  }, [boton])

  function handleButton (idx) {
    setBoton(idx)
  }

  return (
    <section>
      <div id={id} className='container-lg'>
        <div className='proyectos-encabezado'>
          <h1>Guiones</h1>
        </div>
        <div className='proyectos-contenido d-lg-flex flex-lg-row'>
          <div className='proyectos-botones'>
            <ul className='d-flex flex-lg-column'>
              {proyectosBotones.map(b => (
                <li key={b.id}>
                  <button className={boton === b.id ? 'seleccionado' : ''} onClick={() => { handleButton(b.id) }}>
                    <img className='iconTec' src={b.src} />
                    {b.titulo}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='proyectos-descripcion'>
            <div className='proyectos-titulo'>
              <h2>{`${proyectosContenido[boton].titulo} (${proyectosContenido[boton].año})`}</h2>
              <p>Genero:{proyectosContenido[boton].genero} - Guion para <a href={proyectosContenido[boton].linkCanal} target='blank'> {proyectosContenido[boton].canalName} </a></p>
            </div>
            <div className='proyectos-resumen'>
              <div className='proyectos-img-container'>
                <div className='proyectos-img'>
                  <iframe src={proyectosContenido[boton].link} title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerPolicy='strict-origin-when-cross-origin' allowfullscreen />
                </div>
              </div>
              <div className='proyectos-text'>
                <div ref={ref} className='proyectos-parrafos' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proyectos

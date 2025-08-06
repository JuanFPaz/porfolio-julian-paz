/* eslint-disable import/no-absolute-path */
import gm from './icons/gmail.svg'
import whatsapp from './icons/ws480.svg'
import './styles/Contacto.css'

function Contacto ({ id }) {
  return (
    <section>
      <div id={id} className='container-lg'>
        <div className='contacto-encabezado'>
          <h1>Contacto</h1>
        </div>
        <div className='contacto-contenido'>
          <p>
            <b>¡Gracias por haber visitado mi Portfolio!</b> Espero que haya sido de tu agrado y que hayas encontrado interesante el contenido de mi sitio.
            <br />
            <br />
            Si deseas contactarte conmigo, a continuación encontrarás unos enlaces para que puedas enviarme un mensaje a mi <b>Whatsapp</b> o mi <b>correo electrónico</b>.
          </p>
        </div>
        <div className='contacto-enlaces'>
          <a href='https://wa.me/1139360712?text=¡Hola Julian Paz!' target='blank' rel='noreferrer'>
            <img src={whatsapp} alt='Link a chat de Julian Paz en Whatsapp.' />
          </a>
          <a href='mailto:julipaz00@hotmail.com' target='blank' rel='noreferrer'>
            <img src={gm} alt='Link a Correo electronico julipaz00@hotmail.com' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contacto

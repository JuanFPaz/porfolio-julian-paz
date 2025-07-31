/* eslint-disable import/no-absolute-path */
import gm from './icons/gmail.svg'
import linkedin from './icons/linkedin.svg'
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Alias aliquam</b>, doloribus iste tempore placeat quo? Officia, laboriosam ullam nemo eligendi pariatur obcaecati sit accusamus, esse quia voluptatem eum minus consectetur!
          </p>
        </div>
        <div className='contacto-enlaces'>
          <a href='https://www.linkedin.com/in/jpaz94/' target='blank'>
            <img src={linkedin} alt='Link a perfil de Linkedin Juan Paz.' />
          </a>
          <a href='mailto:jpaz.dev94@gmail.com' target='blank' rel='noreferrer'>
            <img src={gm} alt='Link a Correo electronico jpaz.dev94@gmail.com' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contacto

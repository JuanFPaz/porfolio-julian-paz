/* eslint-disable import/no-absolute-path */
/* eslint-disable no-unused-vars */
import './Section.css'
import './styles/SobreMi.css'
import profile from '/foto/alfred.webp'

function SobreMi ({ id }) {
  return (
    <section>
      <div id={id} className='container-lg'>
        <div className='sobreMi-encabezado'>
          <h1>Sobre Mi</h1>
        </div>
        <div className='row'>
          <div className='col-12 col-md-8'>
            <div className='sobreMi-main'>
              <p>Soy de Buenos Aires, Argentina. Tengo 36 años, soy <b>trabajador freelance</b> con estudios en <b>realización audiovisual</b> y cursos de <b>escritura de guion</b>. En mis <b>tiempos libres</b> me dedico a leer libros, ver películas y series para ampliar mi campo creativo.</p>
              <p>Empecé a trabajar como <b>escritor freelance</b> en tiempos del confinamiento obligatorio, y a partir de entonces tomé algunos trabajos para algunos clientes como <b>Ghost Writer</b> de canales de Youtube de diferentes países de Latinoamerica, y por eso tengo incorporado el español neutro como idioma secundario.</p>
              <p>Actualmente <b>buscó nuevos desafíos</b> en el mismo campo para ganar más <b>experiencia</b> como escritor y <b>acoplarme</b> a una dinámica de grupo más organizada, para tener experiencia cuando tenga la oportunidad de financiar <b>mis propios proyectos </b>audiovisuales.</p>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <div className='sobreMi-aside'>
              <img src={profile} alt='mi-foto' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi

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
              <p>Soy de Buenos Aires, Argentina. Tengo 36 años, soy trabajador freelance con estudios en realización audiovisual y cursos de escritura de guion. Desde chico que me apasiona la lectura, ver películes y series, pasatiempo que sigo conservando hasta el día de hoy.</p>
              <p>Empecé a trabajar como escritor freelance a mediados del 2021, y a partir de entonces tomé un trabajo como Ghost Writer en un canal de Youtube con resúmenes de películas, cuyo contenido va dirigido hacia un público joven de toda Latinoamérica. </p>
              <p>Actualmente buscó nuevos desafíos en el mismo campo para ganar más experiencia como escritor a cambio de ofrecer mis ideas creativas a proyectos audiovisuales, así puedo acostumbrarme a la dinámica grupal antes de saltar a realizar mis propios proyectos.</p>
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

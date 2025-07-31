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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Fuga nam eveniet nisi atque veritatis?</b> Dolorem explicabo, voluptatum doloribus placeat voluptates repellat quaerat perferendis, optio et eum enim asperiores quae excepturi.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <b>Cupiditate alias ut molestias</b> sed porro quia dolore dignissimos perferendis ullam error, cum quasi. Velit recusandae quibusdam aliquid eum, labore ipsam cumque.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam amet error, <b>est impedit ullam optio distinctio</b>, quae facilis ipsum aliquam excepturi, id magnam molestiae soluta! Consectetur natus consequuntur ipsa.</p>
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

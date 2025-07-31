/* eslint-disable import/no-absolute-path */
/* eslint-disable no-unused-vars */
import './styles/Inicio.css'
// import cv from '/pdf/CV-JuanPaz-2025.pdf'

function Inicio ({ id }) {
  return (
    <>
      <section>
        <div id={id} className='container-lg'>
          <div className='container-fluid'>
            <div className='row'>
              <h1>Lorem.</h1>
              <p>
                Lorem ipsum dolor sit <b>amet consectetur,</b>  adipisicing elit. Eum eligendi impedit mollitia repudiandae eveniet. Necessitatibus, voluptate cumque.
                <br />
                <br />
                Perferendis quia ab, <b>recusandae quasi</b> iusto adipisci autem. Delectus unde fuga natus tenetur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio

/* eslint-disable import/no-absolute-path */
/* eslint-disable no-unused-vars */
import './styles/Inicio.css'

function Inicio ({ id }) {
  return (
    <>
      <section>
        <div id={id} className='container-lg'>
          <div className='container-fluid'>
            <div className='row'>
              <h1>Hola soy Julian Paz</h1>
              <p>
                Soy un <b>escritor freelance</b> con experiencia como <b>Ghost Writer</b>, redactando guiones <b>entretenidos</b> y <b>dinamicos</b> que se requiere para <b>atrapar</b> a la audiencia.
                <br />
                <br />
                Actualmente estoy <b>buscando</b> nuevas oportunidades para formarme <b>profesionalmente</b> en el campo de la escritura.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio

/* eslint-disable react-refresh/only-export-components */
import Inicio from './main-componentes/Inicio'
import SobreMi from './main-componentes/SobreMi'
import Guiones from './main-componentes/Guiones'
import Contacto from './main-componentes/Contacto'
// import Experiencia from './main-componentes/Experiencia'
// import Skills from './main-componentes/Skills'
import './Main.css'
import './main-componentes/Section.css'

function Main () {
  return (
    <main>
      <Inicio id='inicio' />
      <SobreMi id='sobremi' />
      <Guiones id='guiones' />
      {/* <Experiencia id='experiencia' />
      <Skills id='habilidades' /> */}
      <Contacto id='contacto' />
    </main>
  )
}

export default Main

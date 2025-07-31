import './Footer.css'

function Footer () {
  return (
    <footer>
      <ul>
        <li>Desarrollado por <a href='https://jpaz.ar' target='blank'>Juan Paz</a>.</li>
        <li>Desplegado con Github Pages.</li>
        <li>{new Date().getFullYear()}</li>
      </ul>
    </footer>
  )
}

export default Footer

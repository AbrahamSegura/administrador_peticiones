import './CardHelp.css'
export default function CardHelp () {
  return (
    <section className='card-help'>
      <h2>Ayuda</h2>
      <h3>Tabla de "Petiiones"</h3>
      <p>Muestra todas las peticiones realizadas hasta el momento, tambien mostrando la fecha de
        emición de dicha petición y su estado, estos son:
      </p>
      <table className='table-help'>
        <thead>
          <tr><td>Color</td><td>Significado</td></tr>
        </thead>
        <tbody>
          <tr><td>Verde</td><td>Terminada</td></tr>
          <tr><td>Gris</td><td>En Proceso</td></tr>
          <tr><td>Roja</td><td>Cancelada</td></tr>
        </tbody>
      </table>
      <h3>Peticiones</h3>
      <p>Esto es un formulario donde puedes hacer una petición de servicio técnico al departa-
        mento de informatica
      </p>
      <h3>Pasos para realizar una petición:</h3>
      <ul>
        <li>Presionar el boton de "Peticiones", a continuación se mostrara un formulario.</li>
        <li>Selecciona el tipo de problema que presenta, en caso de que no conseguir una opción que corresponda a su problema, seleccione la opción de "Otros" y escriba una propia.</li>
        <li>Escriba una breve descripción de su problema.</li>
        <li>Has click en el boton de "Enviar" para enviar la solicitud.</li>
      </ul>
    </section>
  )
}

import './Container.css'
import RequestTable from '../RequestTable/RequestTable'
export default function Container () {
  return (
    <main className='container'>
      <header>
        <button className='btn-header'>
          <div className='btn-line' />
          <div className='btn-line' />
          <div className='btn-line' />
        </button>
        <form className='search'>
          <input type='text' placeholder='Buscar...' />
          <button><i>*</i></button>
        </form>
        <span className='img-cont'><img src='' alt='imagen de usuario' className='img-user' /></span>
      </header>
      <RequestTable />
    </main>
  )
}

import './TopBar.css'
import Search from '../Icons/Search'

export default function TopBar () {
  const handelWidth = () => {
    const navigation = document.querySelector('.navigation')
    const container = document.querySelector('.container')
    navigation.classList.toggle('actived')
    container.classList.toggle('big')
  }
  return (
    <header>
      <button className='btn-header' onClick={handelWidth}>
        <div className='btn-line' />
        <div className='btn-line' />
        <div className='btn-line' />
      </button>
      <form className='search'>
        <input type='text' placeholder='Buscar...' />
        <button><i> <Search /> </i></button>
      </form>
      <span className='img-cont'><img src='' alt='imagen de usuario' className='img-user' /></span>
    </header>
  )
}

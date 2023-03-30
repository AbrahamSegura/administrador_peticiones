import './Container.css'
import { Route } from 'wouter'
import RequestTable from '../RequestTable/RequestTable'
import TopBar from '../TopBar/TopBar'
import RequestContent from '../RequestContent/RequestContent'
import CardHelp from '../CardHelp/CardHelp'

export default function Container () {
  return (
    <main className='container'>
      <TopBar />
      <Route path='/' component={RequestTable} />
      <Route path='/Peticiones' component={RequestContent} />
      <Route path='/Ayuda' component={CardHelp} />
    </main>
  )
}

/*
<article class="card-box">
    <div class="card">
        <div>
            <div class="number">1,532</div>
            <div class="card-name">Total Estuantes</div>
        </div>
        <div class="icon-box"><i>*</i></div>
    </div>
    <div class="card">
        <div>
            <div class="number">23,532</div>
            <div class="card-name">Total Egresados</div>
        </div>
        <div class="icon-box"><i>*</i></div>
    </div>
    <div class="card">
        <div>
            <div class="number">132</div>
            <div class="card-name">Personal Docente</div>
        </div>
        <div class="icon-box"><i>*</i></div>
    </div>
    <div class="card">
        <div>
            <div class="number">55</div>
            <div class="card-name">Personal Administrativo</div>
        </div>
        <div class="icon-box"><i>*</i></div>
    </div>
</article>
*/

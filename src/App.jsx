import './App.css'
import { useState } from "react";
import isValideNAme from './services/isvalideName';
import isValidePassward from './services/isValidePassword';

function App() {
  const [user, setUser] = useState({})

  const handelSudmit = evt => {
    evt.preventDefault()
    const data = Object.fromEntries(new FormData(evt.target))
    const validate = {
      "user-name": isValideNAme(data["user-name"]),
      "user-password": isValidePassward(data["user-password"])
    }
    setUser(validate)
    evt.target.reset()
  }

  return (
    <div className="App">
      <section>
        <h2>Ingresar</h2>
        <article>
          <form method='post' onSubmit={handelSudmit}>
            <input type="text" name='user-name' id='userName' placeholder='ingresa tu usuario' />
            <input type="password" name="user-password" id="userPassword" placeholder='ingresa tu contraseña' />
            <button>Ingresar</button>
          </form>
        </article>
        {
          user["user-password"] === null ? <span>Usuario o Contraseña invalida</span> : null
        }
      </section>
    </div>
  )
}

export default App

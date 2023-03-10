import './App.css'
import { useContext } from 'react'
import User from './context/UserContext'
import { Route, useLocation } from 'wouter'
import LoginForm from './components/LoginForm/LoginForm'
import DashBoard from './components/Dashboard/DashBoad'

function App() {
  const { user } = useContext(User)
  const [location, setLocation] = useLocation()
  if (user['password'] === "") setLocation('/login')
  return (

    <div className="App">
      {user['password'] !== "" ? <DashBoard /> : <LoginForm />}
    </div>
  )
}

export default App

/*
 {user['username'] !== "" ?
          <Route path='/' component={DashBoard} /> :
          <Redirect path='/login' component={LoginForm} />}
*/
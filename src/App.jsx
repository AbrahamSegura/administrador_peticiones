import './App.css'
import { useContext } from 'react'
import User from './context/UserContext'
import { useLocation } from 'wouter'
import LoginForm from './components/LoginForm/LoginForm'
import DashBoard from './components/Dashboard/DashBoard'
function App() {
  const { user } = useContext(User)
  const [_location, setLocation] = useLocation()
  if (!user['password'] && !user['username']) setLocation('/login')
  return (

    <div className="App">
      {user['password'] && user['username'] ? <DashBoard /> : <LoginForm />}
    </div>
  )
}

export default App
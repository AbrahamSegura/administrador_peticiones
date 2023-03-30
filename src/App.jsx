import './App.css'
import { useContext, useEffect } from 'react'
import User from './context/UserContext'
import LoginForm from './components/LoginForm/LoginForm'
import DashBoard from './components/Dashboard/DashBoard'
import useRedirection from './hooks/useRedirection'
function App () {
  const { user } = useContext(User)
  const isLogin = !user.password && !user.username
  const { setLocation } = useRedirection()

  useEffect(() => {
    isLogin ? setLocation('/login') : setLocation('/')
  }, [])
  return (

    <div className='App'>
      {isLogin ? <LoginForm /> : <DashBoard />}
    </div>
  )
}

export default App

import { useContext } from 'react'
import User from '../context/UserContext'
export default function useUser () {
  const { user, setUser } = useContext(User)
  return { user, setUser }
}

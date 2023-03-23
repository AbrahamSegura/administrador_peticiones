import { useLocation } from 'wouter'

export default function useRedirection () {
  const [location, setLocation] = useLocation()
  return { location, setLocation }
}

import containValue from './containsValue'
export default function isValidePassward (elem) {
  const toString = String(elem)
  if (toString.length < 5 && containValue(toString)) return false
  return true
}
// codificar = btoa(string)
// decodificar = atob(string)

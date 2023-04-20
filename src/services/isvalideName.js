import containValue from './containsValue'
export default function isValidName (elem) {
  const toString = String(elem)
  if (toString.length < 5 || !containValue(elem)) return false
  return true
}

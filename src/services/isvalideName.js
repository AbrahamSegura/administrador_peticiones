export default function isValidName (elem) {
  const toString = String(elem)
  if (toString.length < 5) return false
  return true
}

export default function containValue (elem) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const special = ['.', '!', '_', '-', ';', '?', '¿', '¡', '$', '%', '/', '@']
  const containNumber = elem.includes(...numbers)
  const containSpecial = elem.includes(...special)
  if (containNumber || containSpecial) return false
  return true
}

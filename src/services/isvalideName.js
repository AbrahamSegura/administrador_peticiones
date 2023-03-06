export default function isValidNAme(elem) {
    const toString = String(elem)
    if (toString.length < 5) return null
    return toString
}

import encoder from "./encoder"
import containValue from "./containsValue"
export default function isValidePassward(elem) {
    const toString = String(elem)
    if (toString.length < 5 || !containValue(toString)) return null
    const endcode = encoder(toString)
    return endcode
}
//codificar = btoa(string)
//decodificar = atob(string)

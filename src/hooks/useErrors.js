import { useState } from 'react'

export default function useErrors (e = null) {
  const [err, setErr] = useState(null)
  setErr(e)
  return err
}

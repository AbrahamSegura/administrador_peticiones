import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function useClient (table) {
  const supabase = createClient(import.meta.env.URL_PROYECT, import.meta.env.API_ANON_KEY)
  const [data, setData] = useState([])
  useEffect(async () => {
    try {
      const { data } = await supabase.from(table).select()
      setData(data)
    } catch (error) {
      console.error(error)
    }
  })
  return data
}

import { useState, useEffect } from 'react'
import supabase from '../../DB/client'

export default function useDBClient ({ table, select }) {
  const [data, setData] = useState([])
  useEffect(async () => {
    try {
      const { data } = await supabase.from(table).select(select)
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }, [])
  return data
}

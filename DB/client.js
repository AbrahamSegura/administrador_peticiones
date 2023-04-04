import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.URL_PROYECT, import.meta.env.API_ANON_KEY)
export default supabase

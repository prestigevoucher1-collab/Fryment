import { createClient } from '@supabase/supabase-js'

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const rawKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabaseUrl = (!rawUrl || rawUrl.includes('your_supabase_url')) 
  ? 'https://placeholder.supabase.co' 
  : rawUrl

const supabaseAnonKey = (!rawKey || rawKey.includes('your_supabase_anon_key')) 
  ? 'placeholder' 
  : rawKey

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

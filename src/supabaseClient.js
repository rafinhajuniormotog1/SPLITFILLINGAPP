import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Use o seu Project URL (sem o /rest/v1/) e a sua API Key (anon public)
const supabaseUrl = 'https://ggvodyfavbbctqcbhzxn.supabase.co' 
const supabaseKey = 'sb_publishable_FJ-nv2j9Xl9AvbFKKVVmtg_XMxcKPYV' 

export const supabase = createClient(supabaseUrl, supabaseKey)
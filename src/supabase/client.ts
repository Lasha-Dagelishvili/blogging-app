import { createClient } from '@supabase/supabase-js';


const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseKey) {
    throw new Error('Supabase key is not defined in environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

const SUPABASE_PROJECT_URL = 'https://ofpdzthgvopnqmfyirrm.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_v8NAtRJHNmKxEPCxwaI5Mg_oiDGvvtI';

export const supabaseClient = supabase.createClient(SUPABASE_PROJECT_URL, SUPABASE_PUBLISHABLE_KEY);
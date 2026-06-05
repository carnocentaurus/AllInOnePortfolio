// db.js

import {supabaseClient} from './supabase.js';


export async function fetchLedgerEntries() {
    const {data, error} = await supabaseClient
        .from('ledger')
        .select('*')
        .order('created_at', {ascending: false});

    if (error) throw error;

    return data || [];
}
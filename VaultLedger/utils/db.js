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


export async function insertDeposit(amount) {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount < 1) throw new Error('Please enter valid amount!');

    const {data, error} = await supabaseClient
        .from('ledger')
        .insert([
            {
                amount: numericAmount,
                transaction_type: 'DEPOSIT'
            }
        ]);

    if (error) throw error;

    return data;
}
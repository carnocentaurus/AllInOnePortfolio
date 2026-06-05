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


export async function handleDeposit(amount) {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount < 1) {
        throw new Error('Please enter valid amount greater than 0!');
    }

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


export async function handleWithdraw(amount) {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount < 1) {
        throw new Error('Please enter valid amount greater than 0!');
    }

    const {data, error} = await supabaseClient
        .from('ledger')
        .insert([
            {
                amount: numericAmount,
                transaction_type: 'WITHDRAW'
            }
        ]);

    if (error) throw error;

    return data;
}
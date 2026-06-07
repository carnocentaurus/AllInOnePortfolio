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

    // fetch all existing entries to calculate the current balance
    const {data: entries, error: fetchError} = await supabaseClient
        .from('ledger')
        .select('amount', 'transaction_type')

    if (fetchError) throw fetchError;

    let currentBalance = 0;

    // computes the active balance in memory
    if (entries) {
        entries.forEach(entry => {
            // only reads deposit history
            if (entry.transaction_type === 'DEPOSIT') {
                currentBalance += Number(entry.amount);
            }
            else if (entry.transaction_type === 'WITHDRAW') {
                currentBalance -= Number(entry.amount);
            }
        });
    }

    if (numericAmount > currentBalance) {
        throw new Error(`Withdrawal denied: You dont have enough balance! Current balance is ${currentBalance.toFixed(2)}`);
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
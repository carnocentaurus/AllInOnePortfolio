// db.js

import {supabaseClient} from './supabase.js';


export async function fetchLedgerEntries() {
    const {data: {user}, error: authError} = await supabaseClient.auth.getUser();
    if (authError || !user) return [];

    const {data, error} = await supabaseClient
        .from('ledger')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', {ascending: false});

    if (error) throw error;

    return data || [];
}


export async function handleDeposit(amount) {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
        throw new Error('Please enter valid amount greater than 0!');
    }

    const {data: {user}, error: authError} = await supabaseClient.auth.getUser();
    if (authError || !user) {
        throw new Error('User session not found. Please login again.');
    }

    const {data, error} = await supabaseClient
        .from('ledger')
        .insert([
            {
                amount: numericAmount,
                transaction_type: 'DEPOSIT',
                user_id: user.id
            }
        ]);

    if (error) throw error;

    return data;
}


export async function handleWithdraw(amount) {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
        throw new Error('Please enter valid amount greater than 0!');
    }

    // get the active user's id directly from the supabase auth instance
    const {data: {user}, error: authError} = await supabaseClient.auth.getUser();
    if (authError || !user) {
        throw new Error('User session not found. Please login again.');
    }

    // fetch all existing entries to calculate the current balance
    const {data: entries, error: fetchError} = await supabaseClient
        .from('ledger')
        .select('amount, transaction_type')
        .eq('user_id', user.id) // filter active user's id

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
                transaction_type: 'WITHDRAW',
                user_id: user.id
            }
        ]);

    if (error) throw error;

    return data;
}
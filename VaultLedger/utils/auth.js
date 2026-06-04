// auth.js

import {supabaseClient} from './supabase.js';

export async function signUpUser(email, password) {
    if (!String(email).includes('@gmail.com')) {
        throw new Error('Email must contain `@gmail.com` at the end!');
        return;
    }

    const {data, error} = await supabaseClient.auth.signUp({email, password});
    if (error) throw error;

    return data;
}


export async function logInUser(email, password) {
    const {data, error} = await supabaseClient.auth.signInWithPassword({email, password});
    if (error) throw error;

    return data;
}


export async function logOutUser() {
    const {error} = await supabaseClient.auth.signOut();
    if (error) throw error;
}
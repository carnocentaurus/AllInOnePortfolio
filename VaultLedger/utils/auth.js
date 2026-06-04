// auth.js

import {supabaseClient} from './supabase.js';

export async function signUpUser(email, password) {
    if (!String(email).includes('@gmail.com')) {
        alert('Email must contain `@gmail.com` at the end!');
        return;
    }

    const {data, error} = await supabaseClient.auth.signUp({email, password});
    if (error) alert(`Sign up error: ${error.message}`);

    return data;
}
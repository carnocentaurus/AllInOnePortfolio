// auth.js

import {supabaseClient} from './supabase.js';


export async function signUpUser(email, password) {
    if (!String(email).includes('@gmail.com')) {
        throw new Error('Email must contain `@gmail.com` at the end!');
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


export async function updateUserEmail(newEmail) {
    if (!String(newEmail).includes('@gmail.com')) {
        throw new Error('Email must contain `@gmail.com` at the end!');
    }

    const {data, error} = await supabaseClient.auth.updateUser({email: newEmail});
    if (error) throw error;

    return data;
}


export async function updateUserPassword(newPassword) {
    const {data, error} = await supabaseClient.auth.updateUser({password: newPassword});
    if (error) throw error;

    return data;
}


// passes session updates back to main.js automatically
export async function hanldeAuthChanges(callback) {
    supabaseClient.auth.onAuthStateChange((event, session) => {
        callback(session);
    });
}
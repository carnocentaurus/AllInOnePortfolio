// main.js

import {
    signUpUser,
    logInUser,
    logOutUser,
    updateUserEmail,
    updateUserPassword,
    handleAuthChanges
} from './utils/auth.js';

import {
    fetchLedgerEntries,
    handleDeposit,
    handleWithdraw
} from './utils/db.js';

import {
    domElements,
    switchView,
    handleAuthDisplay,
    renderBalance,
    clearTransactionInputs,
    clearAccountInputs
} from './utils/ui.js';

let isSignUpMode = false;


// monitors user login status and handles screen layout routing automatically
handleAuthChanges(async (session) => {
    // if user is securely authenticated
    if (session) {
        // sync data and show dashboard
        switchView('dashboard-div');
        await syncLedgerDisplay();
    }
    // no active user
    else {
        // route them back safely to home screen
        switchView('home-div');
    }
});
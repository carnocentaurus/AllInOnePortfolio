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


// fetch data and refresh balance display
async function syncLedgerDisplay() {
    try {
        const data = await fetchLedgerEntries();
        renderBalance(data);
    }
    catch (error) {
        alert(`Failed to load balance: ${error.message}`);
    }
}


// user authentication
domElements.authForm.onsubmit = async (event) => {
    event.preventDefault();

    const email = domElements.emailInput.value;
    const password = domElements.passwordInput.value;

    try {
        if (isSignUpMode) {
            await signUpUser(email, password);
            alert('Account created successfully! Welcome aboard!');
            isSignUpMode = false;
            handleAuthDisplay(isSignUpMode);
        }
        else {
            await logInUser(email, password);
            alert('Log in authenticated!');
        }
    }
    catch (error) {
        alert(`Security Authentication Failed: ${error.message}`);
    }
}


// toggle between login and sign up text modifications
domElements.authAccountText.onclick = (event) => {
    if (event.target.id === 'auth-instead-text') {
        isSignUpMode = !isSignUpMode;
        handleAuthDisplay(isSignUpMode);
    }
}


// ledger transaction (deposit)
domElements.depositConfirmBtn.onclick = async () => {
    const amount = domElements.depositInput.value;

    try {
        await handleDeposit(amount);
        alert('Balance successfully added to ledger!');
        clearTransactionInputs();
        switchView('dashboard-div');
        await syncLedgerDisplay();
    }
    catch (error) {
        alert(`Transaction failed: ${error.message}`);
    }
}


// ledger transaction (withdraw)
domElements.withdrawConfirmBtn.onclick = async () => {
    const amount = domElements.withdrawInput.value;

    try {
        await handleWithdraw(amount);
        alert('Balance successfully deducted from ledger!');
        clearTransactionInputs();
        switchView('dashboard-div');
        await syncLedgerDisplay();
    }
    catch (error) {
        alert(`Transaction failed: ${error.message}`);
    }
}
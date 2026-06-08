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


// change email
domElements.changeEmailForm.onsubmit = async (event) => {
    event.preventDefault();

    const newEmail = domElements.newEmailInput.value;

    try {
        await updateUserEmail(newEmail);
        alert('Email update request received. Check your email to finalize changes');
        clearAccountInputs();
        switchView('manage-account-div');
    }
    catch (error) {
        alert(`Email update failed: ${error.message}`);
    }
}


// change password
domElements.changePasswordForm.onsubmit = async (event) => {
    event.preventDefault();

    const newPassword = domElements.newPasswordInput.value;

    try {
        await updateUserPassword(newPassword);
        alert('Password updated successfully!');
        clearAccountInputs();
        switchView('manage-account-div');
    }
    catch (error) {
        alert(`Password update failed: ${error.message}`);
    }
}


domElements.startBtn.onclick = () => {
    isSignUpMode = false;
    handleAuthDisplay(isSignUpMode);
    switchView('auth-div');
}

domElements.authBackBtn.onclick = () => switchView('home-div');
domElements.dashboardBackBtn.onclick = () => switchView('home-div');

domElements.withdrawBtn.onclick = () => switchView('withdraw-div');
domElements.depositBtn.onclick = () => switchView('deposit-div');
domElements.manageAccountBtn.onclick = () => switchView('manage-account-div');

domElements.changeEmailBtn.onclick = () => switchView('change-email-div');
domElements.changePasswordBtn.onclick = () => switchView('change-password-div');

domElements.withdrawCancelBtn.onclick = () => {
    clearTransactionInputs();
    switchView('dashboard-div');
}

domElements.depositCancelBtn.onclick = () => {
    clearTransactionInputs();
    switchView('dashboard-div');
}

domElements.manageAccountBackBtn.onclick = () => switchView('dashboard-div');

domElements.changeEmailCancelBtn.onclick = () => {
    clearAccountInputs();
    switchView('manage-account-div');
}

domElements.changePasswordCancelBtn.onclick = () => {
    clearAccountInputs();
    switchView('manage-account-div');
}


domElements.logOutBtn.onclick = async () => {
    try {
        await logOutUser();
        alert('Logged out successfully!');
    }
    catch (error) {
        alert(`Log out error: ${error.message}`);
    }
}
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
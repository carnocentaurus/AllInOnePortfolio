// ui.js

export const domElements = {
  // home
  homeDiv: document.getElementById('home-div'),
  startBtn: document.getElementById('start-btn'),

  // auth
  authDiv: document.getElementById('auth-div'),
  authForm: document.getElementById('auth-form'),
  emailInput: document.getElementById('email-input'),
  passwordInput: document.getElementById('password-input'),
  authBtn: document.getElementById('auth-btn'),
  authAccountText: document.getElementById('auth-account-text'),
  authInsteadText: document.getElementById('auth-instead-text'),
  authBackBtn: document.getElementById('auth-back-btn'),

  // dashboard
  dashboardDiv: document.getElementById('dashboard-div'),
  currentBalanceDisplay: document.getElementById('current-balance-display'),
  withdrawBtn: document.getElementById('withdraw-btn'),
  manageAccountBtn: document.getElementById('manage-account-div'),
  logOutBtn: document.getElementById('log-out-btn'),
  dashboardBackBtn: document.getElementById('dashboard-back-btn'),

  // withdraw
  withdrawDiv: document.getElementById('withdraw-div'),
  withdrawInput: document.getElementById('withdraw-input'),
  withdrawConfirmBtn: document.getElementById('withdraw-confirm-div'),
  withdrawCancelBtn: document.getElementById('withdraw-cancel-btn'),

  // deposit
  depositDiv: document.getElementById('deposit-div'),
  depositInput: document.getElementById('deposit-input'),
  depositConfirmBtn: document.getElementById('deposit-confirm-btn'),
  depositCancelBtn: document.getElementById('deposit-cancel-btn'),

  // manage account
  manageAccountDiv: document.getElementById('manage-accout-div'),
  changeEmailBtn: document.getElementById('change-email-btn'),
  changePasswordBtn: document.getElementById('change-password-btn'),
  manageAccountBackBtn: document.getElementById('manage-account-back-btn'),

  // change email
  changeEmailDiv: document.getElementById('change-email-div'),
  changeEmailForm: document.getElementById('change-email-form'),
  newEmailInput: document.getElementById('new-email-input'),
  changeEmailConfirmBtn: document.getElementById('change-email-confirm-btn'),
  changeEmailCancelBtn: document.getElementById('change-email-cancel-btn'),

  // change password
  changePasswordDiv: document.getElementById('change-password-div'),
  changePasswordForm: document.getElementById('change-password-form'),
  newPasswordInput: document.getElementById('new-password-input'),
  changePasswordConfirmBtn: document.getElementById('change-password-confirm-btn'),
  changePasswordCancelBtn: document.getElementById('change-password-cancel-btn')
};


export function swithView(targetViewId) {
    const allViews = [
        domElements.homeDiv, domElements.authDiv, domElements.dashboardDiv,
        domElements.withdrawDiv, domElements.depositDiv, domElements.manageAccountDiv,
        domElements.changeEmailDiv, domElements.changePasswordDiv
    ];

    allViews.forEach(view => {
        if (view.id === targetViewId) {
            view.id.classList.remove('hidden');
        }
        else {
            view.id.classList.add('hidden');
        }
    })
}
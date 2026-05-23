const { act } = require("react");

const SUPABASE_PROJECT_URL = 'https://yigdkkczudxmkdchzzwv.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_adM37VUFSG7zLzlMcLOEAw_mBDnKYII';
const supabaseClient = supabase.createClient(SUPABASE_PROJECT_URL, SUPABASE_PUBLISHABLE_KEY);

// landing screen div
const landingScreenDiv = document.getElementById('landing-screen-div');
const startBtn = document.getElementById('start-btn');

// auth div
const authDiv = document.getElementById('auth-div');
const authTitle = document.getElementById('auth-title');
const authForm = document.getElementById('auth-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const authBtn = document.getElementById('auth-btn');
const authAccountText = document.getElementById('auth-account-text');
const authInsteadText = document.getElementById('auth-instead-text');
const backBtn = document.getElementById('back-btn');

// dashboard div
const dashboardDiv = document.getElementById('dashboard-div');
const welcomeMsgDisplay = document.getElementById('welcome-msg-display');
const updatePasswordBtn = document.getElementById('update-password-btn');

// update password div
const updatePasswordDiv = document.getElementById('update-password-div');
const updatePasswordForm = document.getElementById('update-password-form');
const newPasswordInput = document.getElementById('new-password-input');

let isLogIn = true;


function showDiv(activeDiv) {
    landingScreenDiv.classList.add('hidden-div');
    authDiv.classList.add('hidden-div');
    dashboardDiv.classList.add('hidden-div');
    updatePasswordDiv.classList.add('hidden-div');

    activeDiv.classList.remove('hidden-div');
}


function handleTextDisplay() {
    if (isLogIn) {
        authTitle.textContent = 'Log in to your account';
        authBtn.innerText = 'Log In';
        // change the text node directly before the span
        authAccountText.childNodes[0].textContent = 'Dont have an account? ';
        authInsteadText.textContent = 'Sign Up';
    }
    else {
        authTitle.textContent = 'Create Account';
        authBtn.innerText = 'Create Account';
        authAccountText.childNodes[0].textContent = 'Already have an account? ';
        authInsteadText.textContent = 'Log In';
    }
}


// auth
authForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (isLogIn) {
        const {data, error} = await supabaseClient.auth.signInWithPassword({email, password});
        alert('Log in successful!');

        if (error) alert(`Log in error: ${error.message}`);
    }
    // account creation
    else {
        const {data, error} = await supabaseClient.auth.signUp({email, password});

        if (error) {
            alert(`Sign up error: ${error.message}`);
        }
        else {
            alert('Sign up success!');
            isLogIn = true;
            handleTextDisplay();
        }
    }
});


function handleLogOut() {
    const {error} = await supabaseClient.auth.signOut();

    if (error) {
        alert(`Log out error: ${error.message}`);
    }
    else {
        authForm.reset();
        showDiv(landingScreenDiv);
    }
}


startBtn.onclick = () => showDiv(authDiv);
backBtn.onclick = () => showDiv(landingScreenDiv);
updatePasswordBtn.onclick = () => showDiv(updatePasswordDiv);
// flip boolean upon clicking the link
authInsteadText.onclick = () => {
    isLogIn = !isLogIn;
    handleTextDisplay();
}

// shows log in screen on boot since isLogIn is true
handleTextDisplay(); 


// auth state changes
supabaseClient.auth.onAuthStateChange((event, session) => {
    if (session) {
        welcomeMsgDisplay.textContent = `Welcome, ${session.user.email}`;
        showDiv(dashboardDiv);
        authForm.reset();
    }
    else {
        welcomeMsgDisplay.textContent = '';
        showDiv(landingScreenDiv);
    }
});
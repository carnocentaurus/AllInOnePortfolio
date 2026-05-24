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

let isSignUp = false; // start as log in


function showDiv(activeDiv) {
    landingScreenDiv.classList.add('hidden-div');
    authDiv.classList.add('hidden-div');
    dashboardDiv.classList.add('hidden-div');
    updatePasswordDiv.classList.add('hidden-div');

    activeDiv.classList.remove('hidden-div');
}


function handleTextDisplay() {
    if (isSignUp) {
        authTitle.textContent = 'Create Account';
        authBtn.innerText = 'Create Account';
        // change the text node directly before the span
        authAccountText.childNodes[0].textContent = 'Already have an account? ';
        authInsteadText.textContent = 'Log In';
    }
    else {
        authTitle.textContent = 'Log in to your account';
        authBtn.innerText = 'Log In';
        authAccountText.childNodes[0].textContent = 'Dont have an account? ';
        authInsteadText.textContent = 'Sign Up';
    }
}


// auth
authForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (isSignUp) {
        if (!String(email).includes('@gmail.com')) {
            alert('Email must contain `@gmail.com` at the end!');
            return;
        }

        const {data, error} = await supabaseClient.auth.signUp({email, password});

        if (error) {
            alert(`Sign up error: ${error.message}`);
        }

        alert('Sign up success!');
        isSignUp = false;
        handleTextDisplay();
    }
    else {
        const {data, error} = await supabaseClient.auth.signInWithPassword({email, password});

        if (error) {
            alert(`Log in error: ${error.message}`);
            return;
        }

        alert('Log in successful!');
    }
});


async function handleLogOut() {
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
    isSignUp = !isSignUp;
    handleTextDisplay();
}

// shows log in screen on boot since isSignUp is false
handleTextDisplay();


// auth state changes
supabaseClient.auth.onAuthStateChange((event, session) => {
    if (session) {
        welcomeMsgDisplay.textContent = `Welcome, ${session.user.email}!`;
        showDiv(dashboardDiv);
        authForm.reset();
    }
    else {
        welcomeMsgDisplay.textContent = '';
        showDiv(landingScreenDiv);
    }
});


updatePasswordForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const newPassword = newPasswordInput.value;

    const {data, error} = await supabaseClient.auth.updateUser({password: newPassword});

    if (error) {
        alert(`Password update failed: ${error.message}`);
    }
    else {
        alert('Password updated successfully!');
        updatePasswordForm.reset();
    }
}); 
const SUPABASE_PROJECT_URL = 'https://yigdkkczudxmkdchzzwv.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_adM37VUFSG7zLzlMcLOEAw_mBDnKYII';
const supabaseClient = supabase.createClient(SUPABASE_PROJECT_URL, SUPABASE_PUBLISHABLE_KEY);

// landing screen div
const landingScreenDiv = document.getElementById('landing-screen-div');
const startBtn = document.getElementById('start-btn');

// auth div
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
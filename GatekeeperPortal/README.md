# Gatekeeper Portal
A secure, member-only skeleton website built with HTML, CSS, and vanilla JavaScript. Utilizes Supabase for robust authentication, including sign-up, login, and password management.

## Features
- User Registration (Sign Up) with email validation
- Secure Login/Authentication
- Persistent User Sessions
- Authenticated Dashboard
- Password Update functionality
- Responsive and clean UI

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Styling and layout |
| JavaScript (ES6) | Logic and event handling |
| Supabase | Authentication and Session Management |

## How It Works
1. The application initializes the Supabase client using a project URL and publishable key.
2. Users can switch between **Sign Up** and **Log In** modes.
3. During registration, the app performs a basic check to ensure a `@gmail.com` address is used.
4. Supabase handles the authentication logic:
   - `auth.signUp()` for new users.
   - `auth.signInWithPassword()` for existing users.
5. The `onAuthStateChange` listener automatically detects when a user logs in or out, updating the UI accordingly by toggling between the landing screen, auth screen, and dashboard.
6. Authenticated users can update their password using `auth.updateUser()`.

## Screenshots
- [Landing Screen](screenshots/landingScreen.png)
- [Authentication Screen](screenshots/authScreen.png)
- [User Dashboard](screenshots/dashboard.png)
- [Update Password](screenshots/updatePasswordScreen.png)

## How to Run
1. Navigate to the GatekeeperPortal folder:
   ```bash
   cd GatekeeperPortal
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Improvements
- Implement email confirmation workflows
- Add Multi-Factor Authentication (MFA)
- Support for Social OAuth providers (Google, GitHub, etc.)
- User profile customization and data storage

## API Reference
This project uses [Supabase Auth](https://supabase.com/auth), an open-source Firebase alternative for authentication.
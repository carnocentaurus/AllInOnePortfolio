# Vault Ledger
A secure, token-management ledger application built with HTML, CSS, and vanilla JavaScript. Utilizes Supabase for robust authentication and real-time ledger management, including deposits, withdrawals, and account updates.

## Features
- User Registration (Sign Up) and Secure Login
- Real-time Balance Tracking and Calculation
- Secure Transaction Management (Deposits/Withdrawals)
- Persistent User Sessions
- Account Management (Email and Password updates)
- Responsive and modern UI

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Styling and layout |
| JavaScript (ES6) | Logic and event handling |
| Supabase | Auth, Database (PostgreSQL), and Session Management |

## How It Works
1. The application initializes the Supabase client using a project URL and publishable key.
2. Users can switch between **Sign Up** and **Log In** modes.
3. Authentication is handled via Supabase Auth (`signUp()`, `signInWithPassword()`).
4. The `onAuthStateChange` listener automatically detects user session status, toggling the UI between the landing screen, auth screen, and dashboard.
5. The dashboard calculates the "Current Balance" by fetching 'DEPOSIT' and 'WITHDRAW' entries from the `ledger` table and performing an in-memory aggregation.
6. Transactions are secured using user-specific IDs and balance validation guards to prevent overdrafts.
7. Authenticated users can update their secure credentials (email/password) directly through the account management interface.

## Screenshots
- [Home Screen](./screenshots/HomeScreen.png)
- [Authentication Screen](./screenshots/AuthScreen.png)
- [User Dashboard](./screenshots/DashboardScreen.png)
- [Withdrawal/Deposit Screen](./screenshots/TransactionScreen.png)
- [Manage Account Screen](./screenshots/ManageAccountScreen.png)
- [Change Email/Password Screen](./screenshots/ChangeCredentialsScreen.png)

## How to Run
1. Navigate to the VaultLedger folder:
   ```bash
   cd VaultLedger
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Improvements
- Implement detailed transaction history logs with filtering
- Add data visualization (charts/graphs) for balance trends
- Support for multiple vault categories or token types
- Export ledger data to CSV or PDF formats

## API Reference
This project uses [Supabase Auth](https://supabase.com/auth) and [Supabase Database](https://supabase.com/database), providing an open-source alternative for scalable backend management.
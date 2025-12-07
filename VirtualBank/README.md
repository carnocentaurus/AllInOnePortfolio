# VirtualBank  
A fully interactive banking simulation system with PIN login, deposits, withdrawals, editable user profile, automatic balance formatting, and persistent data using **localStorage**.

## Features
### Secure Login  
- PIN-based access (`8356`)
- Blocks entry until correct PIN is entered  
- On login, the app loads saved data:
  - Saved profile image  
  - Saved full name  
  - Saved balance (with validation)
### Account Profile System  
- Change first and last name  
- Live profile-image upload + preview  
- Image is converted to **Base64** and saved locally  
- Profile saved to localStorage for persistence  
- Auto-capitalizes first/last names  
- Validations for empty names and character limits  
### Banking Operations  
#### **Withdraw**
- Opens a dedicated withdraw section  
- Validates:
  - Minimum amount (≥ 1)  
  - Valid number  
  - Not higher than current balance  
- Updates balance + localStorage  
- Clean transition back to dashboard
#### **Deposit**
- Dedicated deposit section  
- Validates:
  - Minimum amount  
  - Maximum deposit (1,000,000)  
  - Balance limit (99,000,000)  
- Adds to balance and saves to localStorage  
### Balance Display  
- Always formatted with commas + two decimals  
- Example: `123456.7 → 123,456.70`  
- Auto-validated during login to prevent NaN issues  
### LocalStorage Usage  
Saved keys:
- `VirtualBankProfileImg` – Base64 version of uploaded profile image  
- `FullName` – First + last name  
- `balance` – Numeric balance stored as JSON  
### Clean UI Navigation  
Each action (deposit, withdraw, edit account) hides the main dashboard and shows a dedicated section.  
Cancel operations bring you back safely.

## How the App Works
### 1. **PIN Verification**
```js
if (pinInput.value !== pin) alert("Wrong PIN!");
```
If correct:
- Loads saved image  
- Loads saved name  
- Loads balance (with safety check)  
- Reveals the banking dashboard  
### 2. **Image Upload System**
- Uses `FileReader()`  
- Converts uploaded image → Base64  
- Saves it  
- Updates live preview automatically  
### 3. **Withdrawing & Depositing**
- Converts string input → Number  
- Performs all needed validations  
- Updates DOM + localStorage  
- Smoothly returns to dashboard
### 4. **Editing Account**
- Retrieves saved image  
- Formats name  
- Saves name  
- Validation checks for blank names or overly long names  

## Tech Stack
| Technology | Purpose |
|-----------|----------|
| HTML5     | UI layout |
| CSS3      | Page styling |
| Vanilla JavaScript | App logic + DOM updates |
| Classes | Withdraw/Deposit/EditAccount grouping |
| localStorage | Persistent banking data |
| FileReader | Base64 image conversion |

## How to Run
1. Navigate to the VirtualBank folder:
   ```bash
   cd VirtualBank
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Improvements  
- Add a transaction history log    
- Add PIN-change feature
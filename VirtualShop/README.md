# VirtualShop  
A dynamic, interactive shopping simulator where users can add, remove, and reset items while tracking total price and total quantity. Each item has its own stock limit, and the interface automatically alerts the user when stocks run out.

## Features
- Add individual items or add all items at once  
- Remove items individually or remove all items in bulk  
- Reset the entire shop to restock everything  
- Automatic computation of:
  - Total price  
  - Total quantity  
- Stock-limit tracking with alerts for each item  
- Final alert when **all** items reach zero remaining stock  
- Real-time DOM updates for price and item quantities

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | App structure |
| CSS3 | Layout and styling |
| JavaScript (ES6) | All shop logic, DOM manipulation |
| Arrays & Objects | Item management |
| Browser Alerts | Stock notifications |

## How It Works
1. Each product is defined in an array with:
   - `name`  
   - `price`  
   - `quantity`  
   - `quantityLimit`  
   - `quantityDisplay` (DOM reference)  
   - `limitReached` (prevents repeated alerts)
2. When a user adds an item:
   - The script checks if the item is still in stock  
   - Updates quantity, total items, and total price  
   - Alerts if the stock limit is reached  
3. "Add All Items" loops through all products:
   - Adds each available item  
   - Skips and alerts for items already out of stock  
   - Detects when **all** items are fully out of stock  
   - Shows a final total-stock alert  
4. "Remove All" subtracts quantities as long as values are above zero.  
5. "Clear Items" resets **everything** back to default.  

## Screenshot
- [VirtualShop Demo](VirtualShopDemo.png)

## How to Run
1. Open the folder:
   ```bash
   cd VirtualShop
   ```
2. Launch the interface:
   ```bash
   open index.html
   ```
No setup or dependencies required—everything runs in the browser.

## Future Improvements
- Add a receipt-style summary modal   
- Add localStorage saving (persistent cart state)  
- Add search and filtering for items  
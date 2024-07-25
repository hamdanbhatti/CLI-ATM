# CLI-ATM

This is a command-line interface ATM simulation project written in TypeScript.

## Features:

1. Secure PIN-based authentication (PIN: 8877)
2. Account type selection (Current or Saving)
3. Multiple transaction types:
   - Fast Cash
   - Cash Withdraw
   - Balance Inquiry
4. Customizable withdrawal amounts
5. Real-time balance updates
6. Security measures:
   - Three attempts for correct PIN entry
   - Account locking after three failed attempts

## How it works:

1. The user is prompted to enter their PIN.
2. After successful authentication, the user can select their account type and transaction type.
3. For Cash Withdraw, the user can enter a custom amount.
4. For Fast Cash, the user can choose from predefined amounts.
5. The program checks for sufficient balance before processing withdrawals.
6. Balance Inquiry displays the current account balance.
7. The program provides feedback after each transaction.

## Security:

- The user has three attempts to enter the correct PIN.
- If the wrong PIN is entered three times, the account is locked.
- Locked accounts require administrator intervention.

This CLI-ATM provides a simple yet functional simulation of an ATM system, demonstrating basic banking operations and security measures.<br>

Created by Muhammad Hamdan Bhatti

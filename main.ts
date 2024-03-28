#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

interface ansType {
  userPin: number;
  accountType: string;
  transactionType: string;
  amount: number;
}

let maxLoginAttempts = 3;
let loginAttempts = 0;
let accountLocked = false;

while (loginAttempts < maxLoginAttempts) {
  const userInput: ansType = await inquirer.prompt([
    {
      type: "number",
      name: "userPin",
      message: `\n ${chalk.greenBright(
        "This ATM Made By Muhammad Hamdan Bhatti "
      )}\n The Pin is 8877 \nKindly Enter your PIN:`,
    },
  ]);

  const userPin = userInput.userPin;

  if (userPin === 8877) {
    // Correct PIN entered
    console.log(
      `${chalk.yellow("...... W E L C O M E .....")}\n
      This Code Written By ${chalk.green("Muhammad Hamdan Bhatti")}`
    );

    const transactionInput: ansType = await inquirer.prompt([
      {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your Account Type",
      },
      {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Cash Withdraw", "Balance Inquiry"],
        message: "Select Your Transaction Type",
      },
      {
        type: "number",
        name: "amount",
        message: "Enter Your amount you want to withdraw",
        when: (answers) => answers.transactionType === "Cash Withdraw",
      },
      {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000, 20000, 50000],
        message: "Select Amount You Want",
        when: (answers) => answers.transactionType === "Fast Cash",
      },
    ]);

    const enterAmount = transactionInput.amount;

    if (userPin && transactionInput.transactionType === "Balance Inquiry") {
      const userBalance = 50000;
      console.log(
        `Your Current Balance is Rs ${chalk.red(
          userBalance
        )}\n${chalk.bgGray.yellow(
          "Thanks For Using My ATM ...."
        )}\n${chalk.green("This Code Written By Muhammad Hamdan Bhatti")} `
      );
    } else if (userPin) {
      const userBalance2 = 50000;
      if (userBalance2 >= enterAmount) {
        console.log(
          `Your account has been debited with ${chalk.red(
            "RS" + enterAmount
          )} and Your Remaining balance is ${chalk.red(
            "RS " + (userBalance2 - enterAmount)
          )}\n\n${chalk.bgGray.yellow(
            "Thanks For Using My ATM ...."
          )} \n\n${chalk.green("This Code Written By Muhammad Hamdan Bhatti")} `
        );
      } else {
        console.log(
          `${chalk.red("Insufficient Balance")} \n ${chalk.bgGray.yellow(
            "Thanks For Using ATM...  "
          )}\n ${chalk.green("This Code Written By Muhammad Hamdan Bhatti")} `
        );
      }
    }
    break;
  } else {
    loginAttempts++;
    if (loginAttempts < maxLoginAttempts) {
      console.log(
        `You entered the wrong PIN. You have ${
          maxLoginAttempts - loginAttempts
        } attempts left.`
      );
      console.log(
        `If you Enter ${
          maxLoginAttempts - loginAttempts
        } Wrong Pin, Your account will be locked\n`
      );
    } else {
      accountLocked = true;
      console.log(
        `Maximum login attempts reached.${chalk.red(" ==> Account locked")}.\n`
      );
    }
  }
}

if (accountLocked) {
  console.log("Your account has been locked. Contact the administrator\n");
  console.log(`${chalk.yellow("===========>")} ${chalk.bgGray.yellow(
    "Thanks For Using ATM...  "
  )} ${chalk.yellow("<===========")} \n
  ${chalk.green("This Code Written By Muhammad Hamdan Bhatti")}`);
}

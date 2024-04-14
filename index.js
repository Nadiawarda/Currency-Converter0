#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const currencyRate = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.61,
    JPY: 1.81,
    SAR: 74.10,
    SGD: 1.36,
    PKR: 280 // Pakistani rupees
};
// print the users to convert the currencies  from & to
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: chalk.yellow('Select your Currency: '),
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'SAR', 'SGD', 'PKR']
    },
    {
        name: 'to',
        message: chalk.green('Select your Convertion Currency: '),
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'SAR', 'SGD', 'PKR']
    },
    {
        name: 'amount',
        message: chalk.blue('Enter Your Convertion Amount: '),
        type: 'number',
    },
]);
let fromAmount = currencyRate[user_answer.from]; //  Exchange rate
let toAmount = currencyRate[user_answer.to]; // exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // Convert amount to base currency (USD)
let convertedAmount = baseAmount * toAmount; // Convert base amount to target currency
console.log(chalk.cyanBright.italic.bold(`Your converstion from ${chalk.yellow(user_answer.from)} to ${chalk.yellow(user_answer.to)} is ${chalk.magenta(convertedAmount)}`));

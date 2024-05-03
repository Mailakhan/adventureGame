#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let Player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name:",
    },
]);
let Opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your Opponent",
        choices: ["Skeleton", "Alien", "zombie"],
    },
]);
let p1 = new player(Player.name);
let o1 = new opponent(Opponent.select);
do {
    //Skeleton
    if (Opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What Would You Like To Do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red("You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.yellow("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.cyan(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.gray("You Loose,Better Luck Next Time"));
            process.exit();
        }
    }
    //Alien
    if (Opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What Would You Like To Do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.red(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.yellow("You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.cyan(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.yellow("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.cyan(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.yellow("You Loose,Better Luck Next Time"));
            process.exit();
        }
    }
    //Zombie
    if (Opponent.select == "zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What Would You Like To Do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.gray(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.yellow("You Loose,Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.cyan(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.yellow("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.cyan(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.red("You Loose,Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);

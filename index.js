#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.white("\n \t<<==="), chalk.blue.bold("WELCOME TO THE ADVENTURE GAME"), chalk.white("===>>\n"));
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDec() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelInc() {
        let fuel = this.fuel + 20;
        this.fuel = fuel;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDec() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelInc() {
        let fuel = this.fuel + 20;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: chalk.yellow.italic("Enter Your Name: "),
    },
]);
let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: chalk.yellow.italic("Select Your Opponent: "),
        choices: ["Alien", "Zombie", "Psycho Master", "Witch"],
    },
]);
let player1 = new Player(player.name);
let opponent1 = new Opponent(opponent.select);
console.log(chalk.magenta.italic("Welcome to the Game"));
console.log(chalk.magenta.italic("Your Name: " + player1.name));
console.log(chalk.magenta.italic("Opponent Name: " + opponent1.name));
console.log(chalk.magenta.italic("Your Fuel: " + player1.fuel));
console.log(chalk.magenta.italic("Opponent Fuel: " + opponent1.fuel));
do {
    if (opponent.select === "Alien") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                message: chalk.yellow.italic("What do you want to do?"),
                choices: ["Attack", "Drink Potion", "Defend"],
            },
        ]);
        if (ask.select === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.fuelDec();
                console.log(chalk.cyan("The " + opponent1.name + " attacked you"));
                console.log(chalk.red("Your Fuel: " + player1.fuel));
                console.log(chalk.green("Opponent Fuel: " + opponent1.fuel));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold("You Died"));
                    console.log(chalk.red.bold("Better Luck Next Time"));
                    break;
                }
            }
            if (num <= 0) {
                opponent1.fuelDec();
                console.log(chalk.cyan("You attacked the " + opponent1.name));
                console.log(chalk.green("Your Fuel: " + player1.fuel));
                console.log(chalk.red("Opponent Fuel: " + opponent1.fuel));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.red.bold("The " + opponent1.name + " Died"));
                    console.log(chalk.green.bold("You Released"));
                    break;
                }
            }
        }
        if (ask.select === "Drink Potion") {
            player1.fuelInc();
            console.log(chalk.cyan("You drank a Health Portion"));
            console.log(chalk.green("Your Fuel: " + player1.fuel));
            console.log(chalk.red("Opponent Fuel: " + opponent1.fuel));
        }
        if (ask.select === "Defend") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.fuelDec();
                console.log(chalk.cyan("The " + opponent1.name + " defended against you"));
                console.log(chalk.red("Your Fuel: " + player1.fuel));
                console.log(chalk.green("Opponent Fuel: " + opponent1.fuel));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold("You Died"));
                    console.log(chalk.red.bold("Better Luck Next Time"));
                    break;
                }
            }
            if (num <= 0) {
                opponent1.fuelDec();
                console.log(chalk.cyan("You defended against the " + opponent1.name));
                console.log(chalk.green("Your Fuel: " + player1.fuel));
                console.log(chalk.red("Opponent Fuel: " + opponent1.fuel));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.red.bold("The " + opponent1.name + " Died"));
                    console.log(chalk.green.bold("You Released"));
                    break;
                }
            }
        }
    }
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                message: chalk.yellow.italic("What do you want to do?"),
                choices: ["Attack", "Drink Potion", "Defend"],
            },
        ]);
        if (ask.select === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.fuelDec();
                console.log(chalk.cyan("The " + opponent1.name + " attacked you"));
                console.log(chalk.red("Your Fuel: " + player1.fuel));
                console.log(chalk.green("Opponent Fuel: " + opponent1.fuel));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold("You Died"));
                    console.log(chalk.red.bold("Better Luck Next Time"));
                    break;
                }
            }
            if (num <= 0) {
                opponent1.fuelDec();
                console.log(chalk.cyan("You attacked the " + opponent1.name));
                console.log(chalk.green("Your Fuel: " + player1.fuel));
                console.log(chalk.red("Opponent Fuel: " + opponent1.fuel));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.red.bold("The " + opponent1.name + " Died"));
                    console.log(chalk.green.bold("You Released"));
                    break;
                }
            }
        }
        if (ask.select === "Drink Potion") {
            player1.fuelInc();
            console.log(chalk.cyan("You drank a Health Portion"));
            console.log(chalk.green("Your Fuel: " + player1.fuel));
            console.log(chalk.red("Opponent Fuel: " + opponent1.fuel));
        }
        if (ask.select === "Defend") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.fuelDec();
                console.log(chalk.cyan("The " + opponent1.name + " defended against you"));
                console.log(chalk.red("Your Fuel: " + player1.fuel));
                console.log(chalk.green("Opponent Fuel: " + opponent1.fuel));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold("You Died"));
                    console.log(chalk.red.bold("Better Luck Next Time"));
                    break;
                }
            }
            if (num <= 0) {
                opponent1.fuelDec();
                console.log(chalk.cyan("You defended against the " + opponent1.name));
                console.log(chalk.green("Your Fuel: " + player1.fuel));
                console.log(chalk.red("Opponent Fuel: " + opponent1.fuel));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.red.bold("The " + opponent1.name + " Died"));
                    console.log(chalk.green.bold("You Released"));
                    break;
                }
            }
        }
    }
    if (opponent.select === "Psycho Master") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                message: chalk.yellow.italic("What do you want to do?"),
                choices: ["Attack", "Drink Potion", "Defend"],
            },
        ]);
        if (ask.select === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.fuelDec();
                console.log(chalk.cyan("The " + opponent1.name + " attacked you"));
                console.log(chalk.red("Your Fuel: " + player1.fuel));
                console.log(chalk.green("Opponent Fuel: " + opponent1.fuel));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold("You Died"));
                    console.log(chalk.red.bold("Better Luck Next Time"));
                    break;
                }
            }
            if (num <= 0) {
                opponent1.fuelDec();
                console.log(chalk.cyan("You attacked the " + opponent1.name));
                console.log(chalk.green("Your Fuel: " + player1.fuel));
                console.log(chalk.red("Opponent Fuel: " + opponent1.fuel));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.red.bold("The " + opponent1.name + " Died"));
                    console.log(chalk.green.bold("You Released"));
                    break;
                }
            }
        }
        if (ask.select === "Drink Potion") {
            player1.fuelInc();
            console.log(chalk.cyan("You drank a Health Portion"));
            console.log(chalk.green("Your Fuel: " + player1.fuel));
            console.log(chalk.red("Opponent Fuel: " + opponent1.fuel));
        }
        if (ask.select === "Defend") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.fuelDec();
                console.log(chalk.cyan("The " + opponent1.name + " defended against you"));
                console.log(chalk.red("Your Fuel: " + player1.fuel));
                console.log(chalk.green("Opponent Fuel: " + opponent1.fuel));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold("You Died"));
                    console.log(chalk.red.bold("Better Luck Next Time"));
                    break;
                }
            }
            if (num <= 0) {
                opponent1.fuelDec();
                console.log(chalk.cyan("You defended against the " + opponent1.name));
                console.log(chalk.green("Your Fuel: " + player1.fuel));
                console.log(chalk.red("Opponent Fuel: " + opponent1.fuel));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.red.bold("The " + opponent1.name + " Died"));
                    console.log(chalk.green.bold("You Released"));
                    break;
                }
            }
        }
    }
    if (opponent.select === "Witch") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                message: chalk.yellow.italic("What do you want to do?"),
                choices: ["Attack", "Drink Potion", "Defend"],
            },
        ]);
        if (ask.select === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.fuelDec();
                console.log(chalk.cyan("The " + opponent1.name + " attacked you"));
                console.log(chalk.red("Your Fuel: " + player1.fuel));
                console.log(chalk.green("Opponent Fuel: " + opponent1.fuel));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold("You Died"));
                    console.log(chalk.red.bold("Better Luck Next Time"));
                    break;
                }
            }
            if (num <= 0) {
                opponent1.fuelDec();
                console.log(chalk.cyan("You attacked the " + opponent1.name));
                console.log(chalk.green("Your Fuel: " + player1.fuel));
                console.log(chalk.red("Opponent Fuel: " + opponent1.fuel));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.red.bold("The " + opponent1.name + " Died"));
                    console.log(chalk.green.bold("You Released"));
                    break;
                }
            }
        }
        if (ask.select === "Drink Potion") {
            player1.fuelInc();
            console.log(chalk.cyan("You drank a Health Portion"));
            console.log(chalk.green("Your Fuel: " + player1.fuel));
            console.log(chalk.red("Opponent Fuel: " + opponent1.fuel));
        }
        if (ask.select === "Defend") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.fuelDec();
                console.log(chalk.cyan("The " + opponent1.name + " defended against you"));
                console.log(chalk.red("Your Fuel: " + player1.fuel));
                console.log(chalk.green("Opponent Fuel: " + opponent1.fuel));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold("You Died"));
                    console.log(chalk.red.bold("Better Luck Next Time"));
                    break;
                }
            }
            if (num <= 0) {
                opponent1.fuelDec();
                console.log(chalk.cyan("You defended against the " + opponent1.name));
                console.log(chalk.green("Your Fuel: " + player1.fuel));
                console.log(chalk.red("Opponent Fuel: " + opponent1.fuel));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.red.bold("The " + opponent1.name + " Died"));
                    console.log(chalk.green.bold("You Released"));
                    break;
                }
            }
        }
    }
} while (true);
console.log(chalk.white("\n \t<<==="), chalk.magenta.bold("THANKS FOR PLAYING"), chalk.white("===>>\n"));

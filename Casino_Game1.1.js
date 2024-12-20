const readline = require('node:readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout    
});

let balance = 25;

function playGame() {
    console.log("Your balance is: \x1b[34m$" + balance + "\x1b[0m");
    rl.question("How much you'll bet: ", bet => {
        rl.question("Take a quess form 1 to 6: ", quess => {
            let dice = Math.ceil(Math.random() * 6);
            if (quess == dice) {
                console.log("\x1b[32mYOU WON!!\x1b[0m")
                balance += bet * 15;
                console.log("New Balance: \x1b[34m$" + balance + "\x1b[0m");
            } else {
                console.log("\x1b[31mYou Lost!\x1b[0m");
                console.log("Correct Number: \x1b[33m" + dice + "\x1b[0m");
                balance -= bet;
                console.log("New Balance: \x1b[34m$" + balance + "\x1b[0m");
            }
            rl.question("Do you want to play again? (y/n): ", answer => {
                if (answer == "y") {
                    playGame();
                } else {
                    console.log("Thanks for playing! Final Balance: $" + balance);
                    rl.close();
                }
            });
        });
    });
}
playGame();
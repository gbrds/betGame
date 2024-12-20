const readline = require('node:readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout    
});

function playGame() {
    let balance = 10;
    rl.question("Sisestage panus: ", panus => {
        rl.question("Sisestage pakkumine 1 to 6: ", quess => {
            let truth = Math.ceil(Math.random() * 6);
            if (quess == truth) {
                console.log("Winner!!!");
                console.log(panus * 15 - panus + balance);
            }
            else if (quess != truth) {
                console.log("You Lost!");
                console.log("Correct Number: " + truth); 
                console.log(panus * 0);
                console.log(balance - panus)
            }
            rl.question("Do you want to play again? (yes/no): ", answer => {
                if (answer == "yes") {
                    playGame();
                }
                else {
                    console.log("Thanks for playing! Final Balance: " + balance)
                    rl.close();
                }
            })
        });
    });
}
playGame();


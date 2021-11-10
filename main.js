import readline from 'readline';
import chalk from 'chalk';

const moves = ['rock', 'paper', 'scissors']

const int = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

int.question(`Choose your move, the moves are "${moves.join(', ')}": `, answer => {
    let player1_move = answer;
    let player2_move = moves[Math.floor(Math.random() * moves.length)];
    if (!moves.includes(player1_move)) {
        console.log('Choose the right option please!, try again!');
    } else {
        let player1 = chalk.blue('Player1');
        let player2 = chalk.red('Player2');
        if (player1_move === 'rock' && player2_move === 'paper') {
            console.log(
                `${player1} move was: ${chalk.cyan(player1_move)} and ${player2} move was ${chalk.cyan(player2_move)}`
            );
            console.log(chalk.green('Player2 won!'));
        } else if (player1_move === 'rock' && player2_move === 'scissors') {
            console.log(
                `${player1} move was: ${chalk.cyan(player1_move)} and ${player2} move was ${chalk.cyan(player2_move)}`
            );
            console.log(chalk.green('Player1 won!'));
        } else if (player1_move === 'paper' && player2_move === 'rock') {
            console.log(
                `${player1} move was: ${chalk.cyan(player1_move)} and ${player2} move was ${chalk.cyan(player2_move)}`
            );
            console.log(chalk.green('Player1 won!'));
        } else if (player1_move === 'paper' && player2_move === 'scissors') {
            console.log(
                `${player1} move was: ${chalk.cyan(player1_move)} and ${player2} move was ${chalk.cyan(player2_move)}`
            );
            console.log(chalk.green('Player2 won!'));
        } else if (player1_move === 'scissors' && player2_move === 'rock') {
            console.log(
                `${player1} move was: ${chalk.cyan(player1_move)} and ${player2} move was ${chalk.cyan(player2_move)}`
            );
            console.log(chalk.green('Player2 won!'));
        } else if (player1_move === 'scissors' && player2_move === 'paper') {
            console.log(
                `${player1} move was: ${chalk.cyan(player1_move)} and ${player2} move was ${chalk.cyan(player2_move)}`
            );
            console.log(chalk.green('Player1 won!'));
        } else {
            console.log(
                `${player1} move was: ${chalk.cyan(player1_move)} and ${player2} move was ${chalk.cyan(player2_move)}`
            );
            console.log(chalk.yellow('The game equalised :)'));
        };
    };
    int.close();
});
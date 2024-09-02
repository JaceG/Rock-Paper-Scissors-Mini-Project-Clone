const playGame = function () {
    const stats = {
        wins: 0,
        ties: 0,
        losses: 0,
        count: {
            rock: 0,
            paper: 0,
            scissors: 0
        },
    };

    const options = ['R', 'P', 'S'];

    let keepPlaying = true;

    while (keepPlaying) {
        let userChoice = prompt ('Enter R for Rock, P for Paper, or S for Scissors:');

        if (!userChoice) {
            return;
        }

        userChoice = userChoice.toUpperCase();

        if (!options.includes(userChoice)) {
            window.alert('Please enter a valid choice.');
        } else {

            if (userChoice === 'R') {
                stats.count.rock++;
            } else if (userChoice === 'P') {
                stats.count.paper++;
            } else {
                stats.count.scissors++;
            }

            const index = Math.floor(Math.random() * options.length);
            const computerChoice = options[index];

            window.alert(`The computer chose: ${computerChoice}`);

            if (userChoice === computerChoice) {
                stats.ties++;
                window.alert('You tied!');
            } else if (
                (userChoice === 'R' && computerChoice === 'S') ||
                (userChoice === 'P' && computerChoice === 'R') ||
                (userChoice === 'S' && computerChoice === 'P')
            ) {
                stats.wins++;
                window.alert('You win!');
            }
            else {
                stats.losses++;
                window.alert('You lose!');
            }

            keepPlaying = window.confirm('Play again?');
        }
    }

    window.alert(`Stats:
        Wins: ${stats.wins}
        Losses: ${stats.losses}
        Ties: ${stats.ties}

        Your choices:
        Rock: ${stats.count.rock}
        Paper: ${stats.count.paper}
        Scissors: ${stats.count.scissors}
        Total Plays: ${stats.count.rock + stats.count.paper + stats.count.scissors}
    `);

};

playGame();
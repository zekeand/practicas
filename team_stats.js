const team ={
    //variables
    _players:[
        player1={
            firstName:'firstname1',
            lastName:'lastname1',
            age:21
        },
        player2={
            firstName:'firstname2',
            lastName:'lastname2',
            age:22
        },
        player3={
            firstName:'firstname3',
            lastName:'lastname3',
            age:23
        }
    ],
    _games:[
        game1={
            opponent:'team2',
            teamPoints:3,
            opponentPoints:0
        },
        game2={
            opponent:'team3',
            teamPoints:3,
            opponentPoints:0
        },
        game3={
            opponent:'team4',
            teamPoints:3,
            opponentPoints:0
        }
    ],
    //metodos
    get players(){
        return this._players
    },

    get games(){
        return this._games
    },

    addPlayer(newFirstName, newLastName,newAge){
        const player={
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(player);
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints){
        const game={
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(game);
    }
    
    
}
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans',100,98);
console.log(team.players);
console.log(team.games);
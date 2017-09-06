import React from 'react';
import Box from './box'
import './game.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.processUserGuess = this.processUserGuess.bind(this);


        this.state = {
            test: 'TESTING',
            compNumber: this.randomNumber(),
            gameStatus: 'in progress',
            userGuesses: [],
            showGuesses: '',
            guessStatus: 'Starting',
            userGuess: ''           
        };
    }

    randomNumber(){
        return Math.round(Math.random()*100)+1
    }

    processUserGuess(num){
        num = parseInt(num, 10);
        if (num > this.state.compNumber){
            this.setState({
                userGuess: num,
                userGuesses: [...this.state.userGuesses, this.state.userGuess],
                showGuesses: JSON.stringify(this.state.userGuesses),
                guessStatus: 'Too High'
            });
        } else if (num < this.state.compNumber) {
            this.setState({
                userGuess: num,
                userGuesses:[...this.state.userGuesses, this.state.userGuess],
                showGuesses: JSON.stringify(this.state.userGuesses),
                guessStatus: 'Too Low'
            });
        } else if (num === this.state.compNumber) {
            this.setState({
                userGuess: num,
                userGuesses: [...this.state.userGuesses, this.state.userGuess],
                showGuesses: JSON.stringify(this.state.userGuesses),
                gameStatus: 'Game is complete.',
                guessStatus: 'YOU WIN!!!'
            })
        } else {
            this.setState({
                guessStatus: 'Invalid input'
            })
        }
    }

    render() {
        return (
   
            <div className="board">
                <h2>{this.props.title}</h2>
                <div className="board">
                    <Box  getGuess={this.processUserGuess} 
                        compN={this.state.compNumber} 
                        guessStatus={this.state.guessStatus}
                        gameStatus={this.state.gameStatus}
                        userGuesses={JSON.stringify(this.state.userGuesses)}
                        />
                </div>
            </div>
        );
    }
}

Game.defaultProps = {
    title: 'Hot Or Cold'
};



/*

handleClick: function(input) {
        setState with input
}

<Box getInput="this.handleClick" />
*/
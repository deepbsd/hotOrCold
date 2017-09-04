import React from 'react';

import './box.css';

export default class Box extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'TESTING BOXY AREA',
            compNumber: this.randomNumber(),
            gameStatus: '',
            guessStatus: '',
            prompt: 'Your guess?',
            userGuess: ''
            
        };
    }

    randomNumber(){
        return Math.round(Math.random()*100)+1
    }

    onSubmit(event){
        event.preventDefault();
        const guess = this.state.userGuess;
        console.log(this.state.userGuess)

    }

    processUserGuess(num){
        if (num > this.state.compNumber){
            this.setState({
                guessStatus: 'Too High'
            });
        } else if (num < this.state.compNumber) {
            this.setState({
                guessStatus: 'Too Low'
            });
        } else {
            this.setState({
                guessStatus: 'Invalid input'
            })
        }

    }

    render() {

        return (
   
            <div className="boxArea">
                <h2>{this.props.title}</h2>
                <div className="guessBox">
                <div>Guess a number between 1 and 100</div>
                <form onSubmit={(e) => this.onSubmit(e)} >
                    <input type="text" value={this.state.prompt}
                    onChange={e => this.processUserGuess(e.target.value)} />
                    <button>Guess</button>
                </form>
                </div>
                <div>
                    <div>compupter number is: {this.state.compNumber}</div>
                    <div>user guess is: {this.state.userGuess}</div>
                    <div>user Guess Status: {this.state.guessStatus}</div>
                    
                </div>
            </div>
        );
    }
}

Box.defaultProps = {
    title: 'boxy area'
};
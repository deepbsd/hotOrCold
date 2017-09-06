import React from 'react';

import './box.css';

export default class Box extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            guess: '',
        };
    }

    handleSubmit(e){
        e.preventDefault();
        let guess = this.textInput.value.trim();
        guess = parseInt(guess, 10);
        console.log('You guessed: ',guess);
        if (guess && this.textInput) {
            this.props.getGuess(guess);
            this.setState({
                guess
            });
        }
    }


    render() {

        return (
            <div className="boxArea">
                <h4>{this.props.title}</h4>
                <div className="guessBox">
                    <div>Guess a number between 1 and 100</div>
                {/*  How to do notes in React */}
                    <form onSubmit={(e) => this.handleSubmit(e)} >
                        <input type="text"  

                        ref={input => this.textInput = input}  />
                        
                        <button>Guess</button>
                    </form>
                </div>
                <div>
                    <div>compupter number is: {this.props.compN}</div>
                    <div>user guess is: {this.state.guess}</div>
                    <div>user Guess Status: {this.props.guessStatus}</div>
                    <div>game status is: {this.props.gameStatus}</div>
                    <div>user guesses: {this.props.userGuesses}</div>
                </div>
            </div>
        );
    }
}

Box.defaultProps = {
    title: 'box component'
};
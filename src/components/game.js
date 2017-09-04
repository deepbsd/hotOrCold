import React from 'react';
import Box from './box'
import './game.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test: 'TESTING',
            //number: Math.round(Math.random()*100)+1
            compNumber: this.randomNumber()
            // guesses: [41,23]
        };
    }

    randomNumber(){
        return Math.round(Math.random()*100)+1
    }


    render() {
        return (
   
            <div className="board">
                <h2>{this.props.title}</h2>
                <div className="board">
                    <Box />
                </div>
            </div>
        );
    }
}

Game.defaultProps = {
    title: 'Hot Or Cold'
};
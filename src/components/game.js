import React from 'react';

import './game.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test: 'TESTING'
            // number: Math.round(Math.random()*100)+1,
            // guesses: [41,23]
        };
    }

    render() {

        return (
            <div className="board">
                <h2>{this.props.title}</h2>
                <div>
                    "Hey"
                </div>
            </div>
        );
    }
}

Game.defaultProps = {
    title: 'Hot Or Cold'
};
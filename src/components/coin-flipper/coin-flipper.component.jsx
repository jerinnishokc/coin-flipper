import React from 'react';
import './coin-flipper.styles.css';
import TextOutput from '../text-output/text-output.component';

class CoinFlipper extends React.Component {
    state = {
        face: '',
        flips: 0,
        heads: 0,
        tails: 0
    };

    flipCoin() {
        const randomSide = (Math.floor(Math.random() * 2) + 1) === 1 ? 'head' : 'tail';

        this.setState(state => {
            console.log('Incoming latest state: ', state);
            return {
                face: randomSide === 'head' ? 'https://tinyurl.com/react-coin-heads-jpg' : 'https://tinyurl.com/react-coin-tails-jpg',
                flips: state.flips + 1,
                heads: randomSide === 'head' ? state.heads + 1 : state.heads, 
                tails: randomSide === 'tail' ? state.tails + 1 : state.tails 
            };
        }, () => console.log(this.state));
    }

    handleClick = (e) => {
        this.flipCoin();
    }

    render() {
        return (
            <div className="coin-flipper-container">
                <h1>Let's flip the coin</h1>            
                <img src={this.state.face ? this.state.face : null} alt="Coin Holder" />
                <button onClick={this.handleClick}>Flip meeee</button>
                <TextOutput flips={this.state.flips} heads={this.state.heads} tails={this.state.tails}></TextOutput>
            </div>
        );
    }
}

export default CoinFlipper;
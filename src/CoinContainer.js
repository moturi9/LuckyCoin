import React, { Component } from 'react'
import { choice } from './helper.js'
import Coin from './Coin'
import './CoinContainer.css'

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      {
        side: 'tails',
        imgSrc: 'https://tinyurl.com/react-coin-tails-jpg'
      }
    ]
  }
  // http://www.pcgscoinfacts.com/UserImages/71009269r.jpg
  constructor(props) {
    super(props)
    this.state = {
      currCoin: null,
      numFlips: 0,
      numHeads: 0,
      numTails: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  flipCoin() {
    const newCoin = choice(this.props.coins)
    this.setState(st => {
      return {
        currCoin: newCoin,
        numFlips: st.numFlips + 1,
        numHeads: st.numHeads + (newCoin.side === 'heads' ? 1 : 0),
        numTails: st.numTails + (newCoin.side === 'tails' ? 1 : 0)
      }
    })
    console.log(this.state)
  }
  handleClick() {
    this.flipCoin()
  }

  render() {
    return (
      <div className="CoinContainer">
        <h2> Flip the coin </h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}> Flip ME </button>
        <p>
          Out of {this.state.numFlips} flips, there have been{' '}
          {this.state.numHeads} Heads and {this.state.numTails} Tails{' '}
        </p>
      </div>
    )
  }
}

export default CoinContainer

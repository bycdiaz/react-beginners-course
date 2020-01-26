import React from 'react';
import Header from './Header.js'
import Order from './Order.js'
import Inventory from './Inventory.js'

class App extends React.Component {
  state = {
    fishes: {},
    Order: {},
  };

  addFish = (fish) => {
    // copy initial state
    const fishes = { ...this.state.fishes };
    // add new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // set new fishes object to state
    this.setState({ fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    );
  }
}

export default App;

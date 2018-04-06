import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  // in order to update State, you need to use React's setState API
  addFish = fish => {
    // 1. Take a copy of existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to the state (mentioned above)
    this.setState({
      fishes: fishes
    });
    console.log("added");
  };

  loadSampleFish = fishes => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Menu!" />
          <ul className="fishes">
            <Fish />
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFish={this.loadSampleFish}
        />
      </div>
    );
  }
}

export default App;

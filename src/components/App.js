import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);

    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  updateFish = (key, updatedFish) => {
    // 1. Take Copy of current fish
    const fishes = { ...this.state.fishes };
    // 2. Update the state
    fishes[key] = updatedFish;
    // 3. Set updated fishes to state
    this.setState({ fishes });
  };

  deleteFish = key => {
    // 1. Take copy of current fish
    const fishes = { ...this.state.fishes };
    // 2. Update the state
    fishes[key] = null;
    // 3. Set updated state to null
    this.setState({ fishes });
  };

  loadSampleFish = fishes => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1. Take a copy of the order state
    const order = { ...this.state.order };
    // 2. Add to the order or update the number in order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update the state object mentioned above
    this.setState({ order });
  };

  removeFromOrder = key => {
    // 1. Take a copy of the order state
    const order = { ...this.state.order };
    // 2. Remove order
    delete order[key];
    // 3. Call setState to update the state object mentioned above
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Menu!" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                fishDetails={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFish={this.loadSampleFish}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;

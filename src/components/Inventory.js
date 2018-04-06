import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
      </div>
      <button onClick={this.props.loadSampleFish}>Load Sample Fish</button>
    );
  }
}

export default Inventory;

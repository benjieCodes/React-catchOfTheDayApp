import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  goToStore(event) {
    // 1. Stop form from submitting/resetting page
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          {/* This is a store component */}
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit"> Visit Store →</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;

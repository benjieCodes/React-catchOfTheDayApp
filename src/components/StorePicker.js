import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  myInput = React.createRef();

  goToStore(event) {
    // 1. Stop form from submitting/resetting page
    event.preventDefault();
    // 2. get the text from my input in the form
    console.log(this.myInput.value.value);
  }
  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          {/* This is a store component */}
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
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

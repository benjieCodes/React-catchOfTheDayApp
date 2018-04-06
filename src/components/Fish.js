import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    return (
      <li className="menu-fish">
        <img
          src={this.props.fishDetails.image}
          alt={this.props.fishDetails.name}
        />
        <h3 className="fish-name">
          {this.props.fishDetails.name}
          <span className="price">
            {formatPrice(this.props.fishDetails.price)}
          </span>
        </h3>
        <p>{this.props.fishDetails.desc}</p>
      </li>
    );
  }
}

export default Fish;

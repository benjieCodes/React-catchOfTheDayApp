import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="top" r>
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>Fresh Food Daily!</span>
        </h3>
      </header>
    );
  }
}

export default Header;

import React from "react";
import PropType from "prop-types";

const Login = () => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store's inventory</p>
    <button
      className="github"
      onClick={() => this.props.authenticate("Github")}
    >
      Log In With Github
    </button>
    <button
      className="twitter"
      onClick={() => this.props.authenticate("Twitter")}
    >
      Log In With Twitter
    </button>
    <button
      className="facebook"
      onClick={() => this.props.authenticate("Facebook")}
    >
      Log In With Facebook
    </button>
  </nav>
);

Login.propType = {
  authenticate: PropType.func.isRequired
};

export default Login;

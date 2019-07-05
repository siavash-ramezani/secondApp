import React, { Component } from "react";
import { View, Text } from "react-native";
import Splash from "./Splash";
import Home from "./Home";
import Login from "./Login";
class Application extends Component {
  componentWillMount() {
    this.state = {
      view: <Splash />
    };
    setTimeout(() => {
      if (false) {
        this.setState({
          view: <Home />
        });
      } else {
        this.setState({
          view: <Login />
        });
      }
    });
  }
  render() {
    return this.state.view;
  }
}

export default Application;

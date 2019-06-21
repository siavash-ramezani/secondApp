import React, { Component } from "react";
import { View, Text } from "react-native";
class Splash extends Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Splash screen</Text>
      </View>
    );
  }
}

export default Splash;

import React, { Component } from "react";
import { View, Text } from "react-native";
class Application extends Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Application page</Text>
      </View>
    );
  }
}

export default Application;

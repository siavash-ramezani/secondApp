import React, { Component } from "react";
import { View, Text } from "react-native";
class Home extends Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home page</Text>
      </View>
    );
  }
}

export default Home;

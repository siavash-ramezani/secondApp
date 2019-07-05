import React, { Component } from "react";
import Application from "./src/components/Application";
import EstyleSheet from "react-native-extended-stylesheet";
import { Router, Scene, Lightbox } from "react-native-router-flux";
import Login from "./src/components/Login";
import { View, Text } from "react-native";
EstyleSheet.build({
  $statusBarColor: "#2c3e50",
  $headerColor: "#34495e",
  $IS: "IRANSansMobile"
});

class loginLightbox extends Component {
  state = {};
  render() {
    return (
      <View
        style={{
          height: 200,
          justifyContent: "center",
          alignItems: "center",
          flex: 1
        }}
      >
        <Text>Lightbox</Text>
      </View>
    );
  }
}

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Lightbox>
          <Scene key="root" hideNavBar>
            <Scene key="login" component={Login} />
            <Scene key="home" component={Application} initial />
          </Scene>
          <Scene key="loginLightbox" component={loginLightbox} />
        </Lightbox>
      </Router>
    );
  }
}

export default App;

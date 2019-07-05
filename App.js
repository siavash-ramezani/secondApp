import React, { Component } from "react";
import Application from "./src/components/Application";
import EstyleSheet from "react-native-extended-stylesheet";
EstyleSheet.build({
  $statusBarColor: "#2c3e50",
  $headerColor: "#34495e",
  $IS: "IRANSansMobile"
});
class App extends Component {
  state = {};
  render() {
    return <Application />;
  }
}

export default App;

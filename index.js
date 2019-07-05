/**
 * @format
 */
import React, { Component } from "react";
import { AppRegistry, Image, View, Animated, Easing, Text } from "react-native";
// import App from './App';
import { name as appName } from "./app.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
    this.animatedValue = new Animated.Value(0);
  }
  componentWillMount() {
    //   ==Step 1
    // this.spin();

    //   ==Step 2
    this.animate();
  }
  // Step2
  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start(() => this.animate());
  }

  //   ==Step 1
  //   spin() {
  //     this.spinValue.setValue(0);
  //     Animated.timing(this.spinValue, {
  //       toValue: 1,
  //       duration: 4000,
  //       easing: Easing.linear
  //     }).start(() => this.spin());
  //   }
  state = {};
  render() {
    // ==Step1
    // const spin = this.spinValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ["0deg", "360deg"]
    // });
    // return (
    //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //     <Animated.Image
    //       style={{
    //         width: 250,
    //         height: 250,
    //         transform: [{ rotate: spin }]
    //       }}
    //       source={{
    //         uri:
    //           "https://static1.squarespace.com/static/58d20c79725e25b221549193/t/5ac7913c0e2e72e497bb94d8/1523028294001/512px-React-icon.svg.png?format=1000w"
    //       }}
    //     />
    //   </View>
    // );

    // ==Step 2
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    });
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    });
    const fontSize = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [14, 32, 14]
    });
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ["0deg", "180deg", "0deg"]
    });
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animated.View
          style={{
            marginLeft,
            height: 50,
            width: 50,
            backgroundColor: "yellow"
          }}
        />
        <Animated.View
          style={{
            opacity,
            height: 30,
            width: 60,
            backgroundColor: "blue",
            marginTop: 15
          }}
        />
        <Animated.View
          style={{
            marginLeft: movingMargin,
            height: 50,
            width: 50,
            backgroundColor: "yellow"
          }}
        />
        <Animated.Text style={{ fontSize, color: "orange", marginTop: 15 }}>
          Siavash
        </Animated.Text>
        <Animated.View
          style={{
            backgroundColor: "red",
            marginTop: 15,
            width: 70,
            textAlign: "center",
            transform: [{ rotateX }]
          }}
        >
          <Text style={{ color: "white" }}>Hellow</Text>
        </Animated.View>
      </View>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);

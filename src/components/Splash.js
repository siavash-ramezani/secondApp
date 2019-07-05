import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Container, Spinner, Text } from "native-base";
import styles from "../assets/styles";
class Splash extends Component {
  state = {};
  render() {
    return (
      <Container style={styles.index.splashContainer}>
        <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
        <Text style={styles.index.splashText}>مجله آموزشی سیاوش</Text>
        <Spinner />
      </Container>
    );
  }
}

export default Splash;
